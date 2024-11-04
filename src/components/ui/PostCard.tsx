"use client";
import React, { useState } from "react"; // Import useRouter for navigation
import { Button } from "@nextui-org/button";

import PostInteractionSection from "./PostInteractionSection";
import UserCard from "./UserCard";

import products from "@/src/constans/products";
import { TItem } from "@/src/types";

const PostCard = ({ post }: { post: (typeof products)[number] }) => {
  const { items } = post;

  const title = post.title;

  const [itemsVisible, setitemsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<TItem>();

  const handleTopUpClick = () => {
    setitemsVisible(!itemsVisible);
    setSelectedItem(undefined);
  };

  const handleSelectedItem = (item: TItem) => {
    setSelectedItem(item);
  };

  return (
    <div className="h-fit p-4 bg-gradient-to-b from-default-100 to-default-50  rounded-xl shadow-lg flex flex-col gap-4">
      {/* Post header with user profile info */}
      <div className="flex justify-between gap-4">
        <div className="w-full">
          <UserCard name={post.title} photo={post.photo} />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          {title.length > 101 ? `${title.substring(0, 101)}...` : title}
        </h2>
        <Button
          className={`bg-default-100 w-1/2 transition-transform duration-300 ${
            itemsVisible ? "text-primary-500 " : "text-default-500"
          }`}
          onClick={handleTopUpClick}
        >
          Top Up
        </Button>
      </div>
      <PostInteractionSection
        handleSelectedItem={handleSelectedItem}
        items={items}
        itemsVisible={itemsVisible}
        selectedItem={selectedItem}
      />
    </div>
  );
};

export default PostCard;
