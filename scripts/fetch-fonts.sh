#!/usr/bin/env bash
#
# Download the variable woff2 fonts (latin subset) used by the site from
# Google Fonts into src/fonts/, so next/font/local builds need no network.
#
set -euo pipefail
cd "$(dirname "$0")/.."

UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
mkdir -p src/fonts

fetch_latin_url() {
  local css url
  css=$(curl -sf --retry 5 --retry-all-errors --max-time 30 -A "$UA" "$1")
  url=$(printf '%s' "$css" | sed -n '/\/\* latin \*\//,/^}/p' | grep -o 'https://[^)]*' | head -1)
  if [ -z "$url" ]; then
    echo "ERROR: could not extract latin woff2 URL from $1" >&2
    return 1
  fi
  printf '%s' "$url"
}

download() { # $1=css2-url  $2=output-file
  local url
  url=$(fetch_latin_url "$1")
  echo "[fonts] $2 <- $url"
  curl -sf --retry 5 --retry-all-errors --max-time 60 -A "$UA" -o "src/fonts/$2" "$url"
}

download "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900&display=swap" "PlayfairDisplay-Variable.woff2"
download "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400..900&display=swap" "PlayfairDisplay-Italic-Variable.woff2"
download "https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"              "Manrope-Variable.woff2"
download "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800&display=swap" "JetBrainsMono-Variable.woff2"
download "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@1,100..800&display=swap" "JetBrainsMono-Italic-Variable.woff2"

echo "[fonts] downloaded:"
ls -la src/fonts/
