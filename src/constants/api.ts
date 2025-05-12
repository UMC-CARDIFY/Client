export const END_POINTS = {
  GET_ACCESS_TOKEN: "/api/v1/auth/token",
  GET_FOLDER_SORT_FILTER: "/api/v1/folders/sort-filter",
  DELETE_FOLDER: (folderId: number) => `/api/v1/folders/${folderId}`,
  MARK_FOLDER: (folderId: number) => `/api/v1/folders/${folderId}/mark-folders`,

  GET_NOTE_SORT_FILTER: "/api/v1/folders/notes/sort-filter",
};
