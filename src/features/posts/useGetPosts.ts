import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPosts } from "./postsSlice";

type APIPostsResponse = {
  posts: {
    id: string;
    title: string;
    body: string;
    userId: number;
  }[];
};
export type InternalPost = {
  id: string;
  title: string;
  body: string;
  userId: number;
};

export const useGetPosts = (postsAmmount: number) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/posts`)
      .then((res) => res.json())
      .then((response: APIPostsResponse) => {
        const postsList = response.posts.map<InternalPost>((post) => {
          return {
            id: post.id,
            title: post.title,
            body: post.body,
            userId: post.userId,
          };
        });
        dispatch(setPosts(postsList.slice(0, postsAmmount)));
      });
  }, [postsAmmount]);
};
