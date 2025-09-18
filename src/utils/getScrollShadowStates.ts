/**
 * Utility function that checks scroll shadow states for an element
 * Can optionally add event listeners for continuous monitoring
 *
 * @param element - The element to check (HTMLElement or null)
 * @param options - Configuration options
 * @param options.threshold - Threshold in pixels (default: 2)
 * @param options.callback - Optional callback for continuous monitoring
 * @returns Object with shadow states and cleanup function (if callback provided)
 *
 * @example
 * ```tsx
 * const containerRef = useRef<HTMLDivElement>(null);
 *
 * // One-time check
 * const { showLeftShadow, showRightShadow } = getScrollShadowStates(
 *   containerRef.current,
 *   { threshold: 3 }
 * );
 *
 * // Continuous monitoring
 * const { showLeftShadow, showRightShadow, cleanup } = getScrollShadowStates(
 *   containerRef.current,
 *   {
 *     threshold: 3,
 *     callback: ({ showLeftShadow, showRightShadow }) => {
 *       setLeftShadow(showLeftShadow);
 *       setRightShadow(showRightShadow);
 *     }
 *   }
 * );
 *
 * // Cleanup when component unmounts
 * useEffect(() => {
 *   return cleanup;
 * }, []);
 * ```
 */
export function getScrollShadowStates(
  element: HTMLElement | null,
  options: {
    threshold?: number;
    callback?: (states: {
      showLeftShadow: boolean;
      showRightShadow: boolean;
    }) => void;
  } = {}
): {
  showLeftShadow: boolean;
  showRightShadow: boolean;
  cleanup?: () => void;
} {
  const { threshold = 2, callback } = options;

  if (!element) {
    return { showLeftShadow: false, showRightShadow: false };
  }

  const { scrollLeft, scrollWidth, clientWidth } = element;

  const showLeftShadow = scrollLeft > threshold;
  const showRightShadow = scrollLeft < scrollWidth - clientWidth - threshold;

  const states = { showLeftShadow, showRightShadow };

  if (callback) {
    const checkScrollPosition = () => {
      const currentStates = getScrollShadowStates(element, { threshold });
      callback(currentStates);
    };

    checkScrollPosition();

    element.addEventListener("scroll", checkScrollPosition);

    const resizeObserver = new ResizeObserver(checkScrollPosition);
    resizeObserver.observe(element);

    const cleanup = () => {
      element.removeEventListener("scroll", checkScrollPosition);
      resizeObserver.disconnect();
    };

    return { ...states, cleanup };
  }

  return states;
}
