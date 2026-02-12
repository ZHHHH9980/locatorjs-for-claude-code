![LocatorJS](./docs/logo-noborders.png)

# LocatorJS for Claude Code

Click on UI Component in the browser to open its code in your IDE - **or copy the file path to clipboard for AI assistants like Claude Code**.

![Intro](./docs/intro.gif)

go to [www.locatorjs.com](https://www.locatorjs.com) for more info

## 🆕 What's New in This Fork

This fork adds a **"📋 Clipboard only"** option to the browser extension, perfect for AI coding assistants like Claude Code:

- **No editor required**: Just copy the file path to clipboard
- **Paste to Claude**: Paste the path directly to Claude Code or any AI assistant
- **Clean workflow**: Click component → Copy path → Paste to AI → Done

### How to Use

1. Install the extension (see below)
2. In the extension settings, select **"📋 Clipboard only"**
3. Click any component (Option/Alt + Click)
4. Paste the file path to Claude Code or your AI assistant
5. The AI will automatically open and edit the file

Format: `/path/to/file.tsx:42:10`

> [!NOTE]
> For Next.js 15+ with Turbopack or SWC, use the [@locator/webpack-loader](https://www.locatorjs.com/install/react) instead of the direct babel plugin.

## Install Browser extension

[Install extension from Chrome Web Store](https://chrome.google.com/webstore/detail/locatorjs/npbfdllefekhdplbkdigpncggmojpefi) (works for Chrome, Brave, Opera and Edge)

[Install extension from Firefox Add-ons](https://addons.mozilla.org/cs/firefox/addon/locatorjs/)

[Extension readme](./apps/extension/README.md) (requirements, troubleshooting, etc)

## Install as a library (or combination with extension)

[installation docs](https://www.locatorjs.com/install)

- [React DevTools based](https://www.locatorjs.com/install/react)
- [React data-id based](https://www.locatorjs.com/install/react-data-id)
- [SolidJS](https://www.locatorjs.com/install/solidjs)
- [Preact](https://www.locatorjs.com/install/preact)
- [Svelte](https://www.locatorjs.com/install/svelte)
- [Vue](https://www.locatorjs.com/install/vue)

## Contributing

Feel free to create issue or pull request.

[more info](./contributing.md)

## Similar projects and alternatives

- [click-to-component](https://github.com/ericclemmons/click-to-component)
- [react-dev-inspector](https://github.com/zthxxx/react-dev-inspector)
- [vite-plugin-react-inspector](https://github.com/sudongyuer/vite-plugin-react-inspector)
- [vite-plugin-svelte](https://github.com/sveltejs/vite-plugin-svelte/tree/main/packages/vite-plugin-svelte/src/ui/inspector)
- [vite-plugin-vue-inspector](https://github.com/webfansplz/vite-plugin-vue-inspector)
- [solid-devtools/locator](https://github.com/thetarnav/solid-devtools/tree/main/packages/locator)
- [code-inspector-plugin](https://github.com/zh-lx/code-inspector)
