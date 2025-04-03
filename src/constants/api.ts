export const END_POINTS = {
  GET_ACCESS_TOKEN: "/auth/token",
  GET_SORT_FILTER: "/folders/sort-filter",
  POST_FOLDERS: "/folders/addFolder",
  PATCH_FOLDERS: (folderId: number) => `/folders/${folderId}`,
};
