# Snippets

This folder contains VS Code snippet files for the Ultimate Core UI components. Files with the `.code-snippets` extension will be included in the published npm package so editors and tooling can consume them.

How this works:

- The package's `files` array includes `src/snippets`, so these files are published to npm.
- Consumers can copy the `.code-snippets` files into their workspace `.vscode` folder or use an editor extension that imports snippets from packages.

Notes:

- Snippet files should be valid JSON (no fenced code blocks). The repository previously had a fenced file; this has been corrected.
- If you want editor auto-install of snippets, consider publishing a separate `vscode` extension or adding an installation script for supported editors.
