import { useLoading } from "@contexts/loading-context";
import { useCallback } from "react";

export const useAsyncOperation = () => {
  const { showLoading, hideLoading } = useLoading();

  const executeWithLoading = useCallback(
    async <T>(operation: () => Promise<T>): Promise<T> => {
      try {
        showLoading();
        const result = await operation();
        return result;
      } finally {
        hideLoading();
      }
    },
    [showLoading, hideLoading],
  );

  return { executeWithLoading };
};
