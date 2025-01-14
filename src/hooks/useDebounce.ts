import { useCallback } from "react";

export function useDebounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number,
): T {
  let timeoutId: NodeJS.Timeout;

  return useCallback(
    ((...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => callback(...args), delay);
    }) as T,
    [callback, delay],
  );
}
