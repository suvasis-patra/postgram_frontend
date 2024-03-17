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
    // console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.message;
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
export const logoutCurrentUser = async () => {
  try {
    const response = await apiRequestHandler.post("/user/logout");
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log("something went wrong , failed to logout user", error);
  }
};

export const currentUser = async () => {
  try {
    const response = await apiRequestHandler.get("/user/current-user");
    return response.data;
  } catch (error) {
    console.log("something went wrong,failed to get user info", error);
  }
};

export const createPost = async (post: FormData) => {
  try {
    const response = await apiRequestHandler.post("/post/create-post", post);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("something went wrong, failed to create post", error);
  }
};

export const getAllPosts = async () => {
  try {
    const response = await apiRequestHandler.get("/post/all-post");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("something went wrong, failed to get posts", error);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await apiRequestHandler.get("/user/get-all-users");
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log("something went wrong,failed to get users", error);
  }
};

export const getRecentPosts = async () => {
  try {
    const response = await apiRequestHandler.get("/post/recent-posts");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("something went wrong, failed to get recent posts", error);
  }
};

export const getUserById = async (id: string) => {
  try {
    const response = await apiRequestHandler.get(`/user/get-user/${id}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Something went wrong, failed to find creator", error);
  }
};
export const TogglePostSaved = async (postId: string) => {
  try {
    const response = await apiRequestHandler.patch("/user/save-post", {
      postId,
    });
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log("something went wrong , failed to save post", error);
  }
};

export const TogglePostLiked = async (postId: string) => {
  try {
    const response = await apiRequestHandler.patch("/user/like-post", {
      postId,
    });
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log("something went wrong , failed to like post", error);
  }
};

export const getSavedPosts = async () => {
  try {
    const response = await apiRequestHandler.get("/user/get-saved-posts");
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log("something went wrong failed to get saved posts", error);
  }
};

export const getLikedPosts = async () => {
  try {
    const response = await apiRequestHandler.get("/user/get-liked-posts");
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log("something went wrong failed to get liked posts", error);
  }
};

export const getTopCreators = async () => {
  try {
    const topCreators = await apiRequestHandler.get("/user/top-creator");
    // console.log(topCreators);
    return topCreators.data;
  } catch (error) {
    console.log("something went wrong ,failed to get top creator", error);
  }
};

export const getUserPosts = async (id: string) => {
  try {
    const response = await apiRequestHandler.get(`/user/get-user-posts/${id}`);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log("something went wrong , failed to get user posts", error);
  }
};
