import axios from "axios";

export const ERROR_CODES = {
  FOLDER_LIMIT_EXCEEDED: 2008,
} as const;

type ServerErrorBody = {
  code?: number | string;
  message?: string;
  timeStamp?: string;
};

export function getServerErrorCode(err: unknown): number | undefined {
  if (!axios.isAxiosError(err)) return undefined;
  const data = err.response?.data as ServerErrorBody | undefined;
  if (!data?.code) return undefined;
  const n = typeof data.code === "string" ? Number(data.code) : data.code;
  return Number.isFinite(n) ? n : undefined;
}

export function isFolderLimitError(err: unknown) {
  return getServerErrorCode(err) === ERROR_CODES.FOLDER_LIMIT_EXCEEDED;
}
