import axios from "axios";
import { NewUser } from "../types";

const baseUrl = "http://localhost:8080/api/v1";

export const apiRequestHandler = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export const createNewUser = async (user: NewUser) => {
  try {
    const response = await apiRequestHandler.post("/user/register", user);
    return response.data;
  } catch (error) {
    console.log("something went wrong, failed to register user", error);
  }
};

export const loginUser = async (user: {
  username: string;
  password: string;
}) => {
  try {
    const response = await apiRequestHandler.post("/user/login", user);
    return response.data;
  } catch (error) {
    console.log("something went wrong, failed to sign in user", error);
  }
};
