import { Targets } from "@locator/shared";
import { buildLinkFromSource, buildLink } from "./buildLink";
import { HREF_TARGET } from "../consts";
import { LinkProps, Source } from "../types/types";
import { OptionsStore } from "./optionsStore";

export function goTo(link: string, options: OptionsStore) {
  // Check if clipboard-only mode
  const isClipboardOnly = link.startsWith('clipboard://');

  // Extract file info from link
  const match = link.match(/file\/\/(.+?)(?::(\d+))?(?::(\d+))?$/);

  if (match) {
    const [, filePath, line, column] = match;

    // Always copy to clipboard
    const clipboardText = `${filePath}:${line || 1}:${column || 1}`;
    navigator.clipboard.writeText(clipboardText).then(() => {
      console.log('📋 Copied to clipboard for Claude Code:', clipboardText);

      // Show notification
      const notification = document.createElement('div');
      notification.textContent = '📋 Copied to clipboard!';
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-family: system-ui, -apple-system, sans-serif;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 999999;
        animation: slideIn 0.3s ease-out;
      `;
      document.body.appendChild(notification);

      setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
      }, 2000);
    }).catch((error) => {
      console.error('Failed to copy to clipboard:', error);
    });

    // Only open editor if NOT in clipboard-only mode
    if (!isClipboardOnly) {
      window.open(link, options.getOptions().hrefTarget);
    }
  } else {
    // No file match - only open if not clipboard mode
    if (!isClipboardOnly) {
      window.open(link, options.getOptions().hrefTarget);
    }
  }
}

export function goToLinkProps(
  linkProps: LinkProps,
  targets: Targets,
  options: OptionsStore
) {
  const link = buildLink(linkProps, targets, options);
  // Use goTo instead of window.open directly to handle clipboard mode
  goTo(link, options);
}

export function goToSource(
  source: Source,
  targets: Targets,
  options: OptionsStore
) {
  return goTo(buildLinkFromSource(source, targets, options), options);
}
