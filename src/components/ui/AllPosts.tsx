"use client";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import PostCard from "./PostCard";

import items from "@/src/constans/products";

const AllPosts = () => {
  return (
    <InfiniteScroll
      dataLength={items.length}
      hasMore={false}
      loader={<h4>Loading more posts...</h4>}
      next={() => {}}
    >
      <div className="inline-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {items.map((post: any) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default AllPosts;
