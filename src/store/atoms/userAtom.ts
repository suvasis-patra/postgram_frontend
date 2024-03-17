import { userInfo } from "@/lib/types";
import { atom } from "recoil";

export const userAtom = atom({
  key: "userAtom",
  default: {
    _id: "",
    name: "",
    username: "",
    imageUrl: "",
    email: "",
    bio: "",
    saved: [],
    liked: [],
    posts: [],
  } as userInfo,
});
