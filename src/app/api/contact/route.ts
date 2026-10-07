import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const submissionSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(120),
  email: z.string().trim().email("A valid email is required").max(200),
  title: z.string().trim().min(2, "Project title is required").max(200),
  category: z.string().trim().min(2, "Category is required").max(120),
  synopsis: z.string().trim().min(10, "Brief overview is too short").max(4000),
  why: z.string().trim().min(10, "Please tell the committee why this project belongs").max(4000),
  notes: z.string().trim().max(4000).optional().default(""),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = submissionSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
        { status: 400 }
      );
    }

    const { name, email, title, category, synopsis, why, notes } = parsed.data;

    // Map the submission form onto the storage model:
    // details = project title + category, message = overview + rationale + notes.
    const details = `${title} — ${category}`;
    const message = [
      `Overview: ${synopsis}`,
      `Why it belongs here: ${why}`,
      ...(notes ? [`Notes: ${notes}`] : []),
    ].join("\n\n");

    await db.submission.create({
      data: { name, email, details, message },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] submission failed:", error);
    return NextResponse.json(
      {
        error:
          "We could not record your submission right now. Please email drpeace.droycetechclub@gmail.com directly.",
      },
      { status: 500 }
      );
  }
}
