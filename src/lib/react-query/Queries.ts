import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { NewUser } from "../types";
import {
  TogglePostLiked,
  TogglePostSaved,
  createNewUser,
  createPost,
  currentUser,
  getAllPosts,
  getAllUsers,
  getLikedPosts,
  getRecentPosts,
  getSavedPosts,
  getTopCreators,
  getUserById,
  getUserPosts,
  loginUser,
  logoutCurrentUser,
} from "../api";
import { QUERY_KEYS } from "./querykeys";

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  const createuserMutation = useMutation({
    mutationFn: (user: NewUser) => createNewUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
      });
    },
  });
  return createuserMutation;
};

export const useLoginUser = () => {
  const loginuserMutation = useMutation({
    mutationFn: (user: { username: string; password: string }) =>
      loginUser(user),
  });
  return loginuserMutation;
};
export const useLogoutUser = () => {
  const logoutUser = useMutation({
    mutationFn: () => logoutCurrentUser(),
  });
  return logoutUser;
};
export const useGetUserById = (id: string) => {
  const getUserByUserId = useQuery({
    queryKey: [QUERY_KEYS.GET_USER_BY_ID],
    queryFn: () => getUserById(id),
  });
  return getUserByUserId;
};

export const useCreatePost = () => {
  const createPostMutation = useMutation({
    mutationFn: (post: FormData) => createPost(post),
  });
  return createPostMutation;
};

export const useGetUser = () => {
  const getUser = useQuery({
    queryKey: [QUERY_KEYS.GET_CURRENT_USER],
    queryFn: () => currentUser(),
  });
  return getUser;
};

export const useGetTopCreator = () => {
  const topCreators = useQuery({
    queryKey: [QUERY_KEYS.GET_TOP_CREATORS],
    queryFn: () => getTopCreators(),
  });
  return topCreators;
};

export const useGetPosts = () => {
  const getPosts = useQuery({
    queryKey: [QUERY_KEYS.GET_POSTS],
    queryFn: () => getAllPosts(),
  });
  return getPosts;
};

export const useRecentPosts = () => {
  const recentPosts = useQuery({
    queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
    queryFn: () => getRecentPosts(),
  });
  return recentPosts;
};

export const useTogglePostLike = (postId: string) => {
  const queryClient = useQueryClient();
  const likePostMutation = useMutation({
    mutationFn: () => TogglePostLiked(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_LIKED_POSTS],
      });
    },
  });
  return likePostMutation;
};

export const useTogglePostSaved = (postId: string) => {
  const queryClient = useQueryClient();
  const savePostMutation = useMutation({
    mutationFn: () => TogglePostSaved(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_SAVED_POSTS],
      });
    },
  });
  return savePostMutation;
};

export const useGetSavedPosts = () => {
  const savedPosts = useQuery({
    queryKey: [QUERY_KEYS.GET_SAVED_POSTS],
    queryFn: () => getSavedPosts(),
  });
  return savedPosts;
};

export const useGetLikedPosts = () => {
  const likedPosts = useQuery({
    queryKey: [QUERY_KEYS.GET_LIKED_POSTS],
    queryFn: () => getLikedPosts(),
  });
  return likedPosts;
};

export const useGetUserPosts = (id: string) => {
  const userPosts = useQuery({
    queryKey: [QUERY_KEYS.GET_USER_POSTS, id],
    queryFn: () => getUserPosts(id),
  });
  return userPosts;
};

export const useGetAllUsers = () => {
  const allUsers = useQuery({
    queryKey: [QUERY_KEYS.GET_USERS],
    queryFn: () => getAllUsers(),
  });
  return allUsers;
};
