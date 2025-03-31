export const END_POINTS = {
  GET_ACCESS_TOKEN: "/api/v1/auth/token",
  GET_SORT_FILTER: "/api/v1/folders/sort-filter",
  DELETE_FOLDER: "api/v1/folders",
  MARK_FOLDER: (folderId: number) => `/api/v1/folders/${folderId}/mark-folders`,
};
