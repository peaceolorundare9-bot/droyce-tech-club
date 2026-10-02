#!/usr/bin/env python3
"""Extract readable text content from the source website HTML."""
import re
from html.parser import HTMLParser

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.texts = []
        self.skip_tags = {'script', 'style', 'noscript', 'link', 'meta'}
        self.current_skip = 0

    def handle_starttag(self, tag, attrs):
        if tag in self.skip_tags:
            self.current_skip += 1

    def handle_endtag(self, tag):
        if tag in self.skip_tags and self.current_skip > 0:
            self.current_skip -= 1

    def handle_data(self, data):
        if self.current_skip == 0:
            text = data.strip()
            if text and len(text) > 1:
                self.texts.append(text)

with open('/home/z/my-project/source_site.html', 'r', encoding='utf-8') as f:
    html = f.read()

parser = TextExtractor()
parser.feed(html)

# Deduplicate while preserving order (Next.js often duplicates content)
seen = set()
unique_texts = []
for t in parser.texts:
    if t not in seen:
        seen.add(t)
        unique_texts.append(t)

with open('/home/z/my-project/source_content.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(unique_texts))

print(f"Extracted {len(unique_texts)} unique text blocks")
print("=" * 60)
for t in unique_texts:
    print(t)
