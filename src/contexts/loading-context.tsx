import { setLoadingCallback } from "@apis/config/instance";
import { Spinner } from "@components/common/spinner";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface LoadingContextType {
  isLoading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
  setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setLoadingCallback(setIsLoading);
  }, []);

  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);
  const setLoading = (loading: boolean) => setIsLoading(loading);

  return (
    <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading, setLoading }}>
      {children}
      {isLoading && <Spinner />}
    </LoadingContext.Provider>
  );
};
