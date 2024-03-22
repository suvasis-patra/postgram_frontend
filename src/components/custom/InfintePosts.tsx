import { useCallback, useRef } from "react";
import { Post } from ".";
import { useInfiniteQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/lib/react-query/querykeys";
import { fetchPosts } from "@/lib/api";
import { Button } from "../ui/button";

const InfintePosts = () => {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: [QUERY_KEYS.GET_FILE_PREVIEW],
      queryFn: fetchPosts,
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        console.log("lp: ", lastPage, "ap :", allPages);
        if (lastPage.data.posts.length === 0) {
          return undefined;
        }
        return allPages.length + 1;
      },
    });
  console.log(data, hasNextPage, isFetchingNextPage, fetchNextPage);

  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {data?.pages.map((page) => {
          return page?.data.posts?.map((post: any) => {
            const { _id, imageUrl } = post;
            return <Post id={_id} imageUrl={imageUrl} key={_id} />;
          });
        })}
      </div>
      <div className="flex w-full justify-center items-center mt-6">
        <Button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage || !hasNextPage}
        >
          {" "}
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </Button>
      </div>
      <p>{isFetchingNextPage && "more data loading"}</p>
    </div>
  );
};

export default InfintePosts;
