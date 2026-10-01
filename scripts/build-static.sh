#!/usr/bin/env bash
#
# Build the fully static version of the Droyce Tech Club website (./out).
# Intended for static hosting such as Cloudflare Pages direct upload.
#
# - Excludes src/app/api (no backend on static hosting)
# - Bakes NEXT_PUBLIC_STATIC_BUILD=1 so the contact form uses the
#   prefilled mailto flow (drpeace.droycetechclub@gmail.com)
#
set -uo pipefail
cd "$(dirname "$0")/.."

API_DIR="src/app/api"
API_BACKUP=".api-backup-tmp"

restore_api() {
  if [ -d "$API_BACKUP" ]; then
    mv "$API_BACKUP" "$API_DIR"
    echo "[build-static] restored $API_DIR"
  fi
}
trap restore_api EXIT

if [ -d "$API_DIR" ]; then
  echo "[build-static] excluding $API_DIR for static export"
  mv "$API_DIR" "$API_BACKUP"
fi

echo "[build-static] running next build (output: export)…"
BUILD_MODE=export NEXT_PUBLIC_STATIC_BUILD=1 bunx next build

STATUS=$?
if [ $STATUS -ne 0 ]; then
  echo "[build-static] BUILD FAILED (exit $STATUS)" >&2
  exit $STATUS
fi

# With a custom distDir, the export lands in .next-export — copy it to ./out
echo "[build-static] copying export to ./out"
rm -rf out
cp -r .next-export out

echo "[build-static] done — static site is in ./out"
