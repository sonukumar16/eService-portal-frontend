import { HTTP_CODE } from "./httpConstants";
const { BAD_REQUEST } = HTTP_CODE;

export const handleResponse = (response) => {
  const { status, data, fieldError, } = response;
  if (status === BAD_REQUEST) {
    throw fieldError;
  }
  if(status===401)
  throw data;
  return data;
};

export const handleError = (error) => {
  throw error;
};

