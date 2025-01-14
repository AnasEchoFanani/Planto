import { useEffect, useCallback } from "react";

export function useWindowEvent<K extends keyof WindowEventMap>(
  type: K,
  listener: (event: WindowEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions,
  delay = 100,
) {
  const debouncedListener = useCallback(
    (() => {
      let timeoutId: NodeJS.Timeout;
      return (event: WindowEventMap[K]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => listener(event), delay);
      };
    })(),
    [listener, delay],
  );

  useEffect(() => {
    window.addEventListener(type, debouncedListener, options);
    return () => window.removeEventListener(type, debouncedListener, options);
  }, [type, debouncedListener, options]);
}
