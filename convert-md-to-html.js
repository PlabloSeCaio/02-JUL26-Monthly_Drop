#!/usr/bin/env node
/**
 * convert-md-to-html.js
 * Converts a Markdown file to a styled HTML page.
 * Usage: node convert-md-to-html.js <input.md> <output.html>
 */

import { readFileSync, writeFileSync } from "fs";
import { marked } from "marked";

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function getTitle(markdown) {
  const match = markdown.match(/^#\s+(.+)/m);
  return match ? match[1].trim() : "Document";
}

const [_node, _script, inputPath, outputPath] = process.argv;

if (!inputPath || !outputPath) {
  console.error("Usage: node convert-md-to-html.js <input.md> <output.html>");
  process.exit(1);
}

let markdown;
try {
  markdown = readFileSync(inputPath, "utf-8");
} catch (err) {
  console.error(`Error reading file "${inputPath}": ${err.message}`);
  process.exit(1);
}
const bodyHtml = marked.parse(markdown, { gfm: true });

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(getTitle(markdown))}</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #1a1a2e;
      background: #fafafa;
      line-height: 1.7;
      padding: 2rem 1rem;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: #fff;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
      padding: 2.5rem 2rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    h1 { font-size: 1.75rem; margin-bottom: 0.5rem; }
    h2 { font-size: 1.35rem; margin-top: 2rem; margin-bottom: 0.75rem; padding-bottom: 0.4rem; border-bottom: 1px solid #e5e7eb; }
    h3 { font-size: 1.1rem; margin-top: 1.5rem; margin-bottom: 0.5rem; }
    p { margin-bottom: 1rem; color: #374151; }
    ul, ol { margin-bottom: 1rem; padding-left: 1.5rem; }
    li { margin-bottom: 0.25rem; color: #374151; }
    strong { font-weight: 600; color: #111827; }
    em { font-style: italic; }
    code {
      background: #f3f4f6;
      padding: 0.15rem 0.4rem;
      border-radius: 4px;
      font-size: 0.875rem;
      font-family: 'SF Mono', 'Fira Code', monospace;
    }
    pre {
      background: #f3f4f6;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
      margin-bottom: 1rem;
      border: 1px solid #e5e7eb;
    }
    pre code { background: none; padding: 0; border-radius: 0; }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }
    th, td {
      border: 1px solid #e5e7eb;
      padding: 0.5rem 0.75rem;
      text-align: left;
    }
    th { background: #f9fafb; font-weight: 600; }
    tr:nth-child(even) td { background: #fafafa; }
    blockquote {
      border-left: 3px solid #d1d5db;
      padding-left: 1rem;
      margin: 1rem 0;
      color: #6b7280;
      font-style: italic;
    }
    hr { border: none; border-top: 1px solid #e5e7eb; margin: 2rem 0; }
    a { color: #2563eb; text-decoration: underline; }
    a:hover { color: #1d4ed8; }
    img { max-width: 100%; height: auto; border-radius: 8px; margin: 1rem 0; }
    .back-link {
      display: inline-block;
      margin-bottom: 1.5rem;
      font-size: 0.875rem;
      color: #6b7280;
      text-decoration: none;
    }
    .back-link:hover { color: #374151; text-decoration: underline; }
    @media (max-width: 640px) {
      .container { padding: 1.5rem 1rem; }
      h1 { font-size: 1.4rem; }
    }
  </style>
</head>
<body>
  <div class="container">
    <a href="./" class="back-link">&larr; Back to landing page</a>
    ${bodyHtml}
  </div>
</body>
</html>`;

try {
  writeFileSync(outputPath, html, "utf-8");
  console.log(`Written: ${outputPath}`);
} catch (err) {
  console.error(`Error writing file "${outputPath}": ${err.message}`);
  process.exit(1);
}
