#!/bin/bash
# Capture section screenshots for visual QA
S=/home/z/my-project/screenshots
agent-browser open http://localhost:3000 >/dev/null
agent-browser set viewport 1440 900 >/dev/null
agent-browser wait --load networkidle >/dev/null 2>&1
agent-browser screenshot $S/01-hero.png >/dev/null

for anchor in about experience committee operate voices contact; do
  agent-browser open "http://localhost:3000/#$anchor" >/dev/null
  agent-browser wait 2200 >/dev/null
  agent-browser screenshot "$S/section-$anchor.png" >/dev/null
done
echo "Done"; ls $S/
