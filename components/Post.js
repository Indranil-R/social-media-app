import React, { useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShareAlt,
} from "react-icons/ai";
const Post = ({ postData }) => {
  const [isLiked, setIsLiked] = useState(postData.liked);
  function handleClick() {
    setIsLiked(!isLiked);
  }
  return (
    <div class="rounded-lg overflow-hidden shadow-md py-2 space-y-1">
      <div class="flex items-center space-x-2 px-2">
        <img src="https://placehold.co/10x10" class="rounded-full" alt="" />
        <p>{postData.username}</p>
      </div>
      <img src="https://placehold.co/400x400" alt="" class="w-full" />
      <div class="flex items-center justify-between py-3 px-2">
        <div class="flex items-center space-x-3">
          <button class="focus:outline-none" onClick={handleClick}>
            {isLiked ? (
              <AiFillHeart size={24} color="red" />
            ) : (
              <AiOutlineHeart size={24} />
            )}
          </button>
          <button class="focus:outline-none">
            <AiOutlineMessage size={24} />
          </button>
          <button class="focus:outline-none">
            <AiOutlineShareAlt size={24} />
          </button>
        </div>
        <p class="text-gray-500">{postData.likes} likes</p>
      </div>
      <div className="px-2">{postData.caption}</div>
    </div>
  );
};

export default Post;
