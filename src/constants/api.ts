export const END_POINTS = {
  GET_ACCESS_TOKEN: "/auth/token",
  GET_SORT_FILTER: "/folders/sort-filter",
  POST_FOLDERS: "/folders/addFolder",
  PATCH_FOLDERS: (folderId: number) => `/folders/${folderId}`,
  DELETE_FOLDER: (folderId: number) => `/folders/${folderId}`,
  MARK_FOLDER: (folderId: number) => `/folders/${folderId}/mark-folders`,
  GET_FOLDERS_ELEMENT: (folderId: number) => `/folders/${folderId}/element`,
};
