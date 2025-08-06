export const END_POINTS = {
  GET_ACCESS_TOKEN: "/auth/token",
  GET_SORT_FILTER: "/folders/sort-filter",
  POST_FOLDERS: "/folders/addFolder",
  PATCH_FOLDERS: (folderId: number) => `/folders/${folderId}`,
  DELETE_FOLDER: (folderId: number) => `/folders/${folderId}`,
  MARK_FOLDER: (folderId: number) => `/folders/${folderId}/mark-folders`,
  POST_SUB_FOLDER: (folderId: number) => `/folders/${folderId}/addSubFolder`,
  GET_NOTES_SORT_FILTER: "/folders/notes/sort-filter",
  MARK_NOTE: "/notes/markNote",
};
