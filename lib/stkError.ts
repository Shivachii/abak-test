export type STKError = {
  response?: {
    data?: {
      errorCode?: string;
      errorMessage?: string;
    };
  };
};
