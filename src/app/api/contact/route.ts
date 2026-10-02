import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const submissionSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(120),
  email: z.string().trim().email("A valid email is required").max(200),
  details: z.string().trim().min(2, "Project details are required").max(600),
  message: z.string().trim().min(10, "Message is too short").max(4000),
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

    const { name, email, details, message } = parsed.data;

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
