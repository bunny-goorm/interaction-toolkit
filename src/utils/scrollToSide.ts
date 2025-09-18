type ScrollDirection = "left" | "right" | "top" | "bottom";

interface ScrollToSideOptions {
  direction?: ScrollDirection;
  scrollBehavior?: ScrollBehavior;
}

/**
 * Utility function that scrolls an element or window to the specified direction
 *
 * @param element - The element to scroll (HTMLElement or null/undefined for window scroll)
 * @param options - Scroll configuration options
 * @returns void
 *
 * @example
 * ```tsx
 * const containerRef = useRef<HTMLDivElement>(null);
 *
 * // Element scroll
 * scrollToSide(containerRef.current, {
 *   direction: 'right',
 *   scrollBehavior: 'smooth'
 * });
 *
 * // Window scroll
 * scrollToSide(null, {
 *   direction: 'top',
 *   scrollBehavior: 'instant'
 * });
 *
 * // Window scroll (element omitted)
 * scrollToSide(undefined, { direction: 'bottom' });
 * ```
 */
export function scrollToSide(
  element?: HTMLElement | null,
  options: ScrollToSideOptions = {}
): void {
  const { direction = "right", scrollBehavior = "smooth" } = options;

  let targetScrollLeft: number | undefined;
  let targetScrollTop: number | undefined;

  if (element) {
    // Element scroll
    const { scrollWidth, clientWidth, scrollHeight, clientHeight } = element;

    switch (direction) {
      case "left":
        targetScrollLeft = 0;
        break;
      case "right":
        targetScrollLeft = scrollWidth - clientWidth;
        break;
      case "top":
        targetScrollTop = 0;
        break;
      case "bottom":
        targetScrollTop = scrollHeight - clientHeight;
        break;
      default:
        targetScrollLeft = scrollWidth - clientWidth;
        break;
    }

    element.scrollTo({
      left: targetScrollLeft,
      top: targetScrollTop,
      behavior: scrollBehavior,
    });
  } else {
    // Window scroll
    switch (direction) {
      case "left":
        targetScrollLeft = 0;
        break;
      case "right":
        targetScrollLeft =
          document.documentElement.scrollWidth - window.innerWidth;
        break;
      case "top":
        targetScrollTop = 0;
        break;
      case "bottom":
        targetScrollTop =
          document.documentElement.scrollHeight - window.innerHeight;
        break;
      default:
        targetScrollLeft =
          document.documentElement.scrollWidth - window.innerWidth;
        break;
    }

    window.scrollTo({
      left: targetScrollLeft,
      top: targetScrollTop,
      behavior: scrollBehavior,
    });
  }
}
