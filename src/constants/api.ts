export const END_POINTS = {
  GET_ACCESS_TOKEN: "/api/v1/auth/token",
  GET_SORT_FILTER: "/api/v1/folders/sort-filter",
  POST_FOLDERS: "/api/v1/folders/addFolder",
  PATCH_FOLDERS: (folderId: number) => `/api/v1/folders/${folderId}`,
};
