export const END_POINTS = {
  //AUTH
  GET_ACCESS_TOKEN: "/auth/token",

  //FOLDER
  GET_SORT_FILTER: "/folders/sort-filter",
  GET_RECENT_MARKED_FOLDERS: "/folders/recent-marks",
  POST_FOLDERS: "/folders/addFolder",
  PATCH_FOLDERS: (folderId: number) => `/folders/${folderId}`,
  DELETE_FOLDER: (folderId: number) => `/folders/${folderId}`,
  MARK_FOLDER: (folderId: number) => `/folders/${folderId}/mark-folders`,
  GET_FOLDERS_ELEMENT: (folderId: number) => `/folders/${folderId}/element`,
  POST_SUB_FOLDER: (folderId: number) => `/folders/${folderId}/addSubFolder`,

  //NOTE
  GET_NOTES_SORT_FILTER: "/folders/notes/sort-filter",
  GET_NOTE: "/notes/getNote",
  MARK_NOTE: "/notes/markNote",
  DELETE_NOTE: "/notes/deleteNote",
  WRITE_NOTE: "/notes/write",
  ADD_NOTE: "/notes/addNote",
};
