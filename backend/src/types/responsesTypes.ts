export interface OneDocumentResponse<T> {
  document: T;
}

export interface PostResponce<T> {
  msg: String;
  examples: T[];
}
