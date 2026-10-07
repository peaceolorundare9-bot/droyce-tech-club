#!/usr/bin/env python3
"""Extract visible text structure from ThoughtReadersClub source HTML."""
import re, html as htmllib

with open('/home/z/my-project/source_trc.html', 'r', encoding='utf-8') as f:
    src = f.read()

# Drop scripts/styles/svg
src = re.sub(r'<script[\s\S]*?</script>', '', src)
src = re.sub(r'<style[\s\S]*?</style>', '', src)
src = re.sub(r'<svg[\s\S]*?</svg>', '', src)

# Mark structural boundaries
src = re.sub(r'<(h1|h2|h3|h4)[^>]*>', r'\n\n### \1> ', src)
src = re.sub(r'</(h1|h2|h3|h4)>', '\n', src)
src = re.sub(r'<(p|li|blockquote)[^>]*>', '\n', src)
src = re.sub(r'<br\s*/?>', '\n', src)
src = re.sub(r'</(div|section|header|footer|nav|ul|ol|span|a|button|form|label)>', '\n', src)

# Strip remaining tags
txt = re.sub(r'<[^>]+>', '', src)
txt = htmllib.unescape(txt)

# Collapse whitespace
lines = []
for ln in txt.split('\n'):
    ln = re.sub(r'\s+', ' ', ln).strip()
    if ln:
        lines.append(ln)

# Dedup consecutive identical lines
out = []
for ln in lines:
    if not out or out[-1] != ln:
        out.append(ln)

print('\n'.join(out))
