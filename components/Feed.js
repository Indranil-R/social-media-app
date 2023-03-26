import React from "react";

import Post from "./Post";

const Posts = [
  {
    username: "user1",
    likes: "10",
    caption: "This is the caption for the Post",
    liked: true,
  },

  {
    username: "user2",
    likes: "30",
    caption: "This is the caption for the Post 2",
    liked: false,
  },
];

const Feed = () => {
  return (
    <div class="flex flex-col items-center space-y-2">
      {Posts.map((postData) => (
        <Post postData={postData} key={postData.username} />
      ))}
      {/* <div class="rounded-lg overflow-hidden shadow-md py-2 space-y-1">
        <div class="flex items-center space-x-2 px-2">
          <img src="https://placehold.co/10x10" class="rounded-full" alt="" />
          <p>Username</p>
        </div>
        <img src="https://placehold.co/400x400" alt="" class="w-full" />
        <div class="flex items-center justify-between py-3 px-4">
          <div class="flex items-center space-x-3">
            <button class="focus:outline-none">
              <AiOutlineHeart size={24} />
            </button>
            <button class="focus:outline-none">
              <AiOutlineMessage size={24} />
            </button>
            <button class="focus:outline-none">
              <AiOutlineShareAlt size={24} />
            </button>
          </div>
          <p class="text-gray-500">12 likes</p>
        </div>
        <div className="px-2">caption goes here</div>
      </div>
      <div class="rounded-lg overflow-hidden shadow-md py-2 space-y-1">
        <div class="flex items-center space-x-2 px-2">
          <img src="https://placehold.co/10x10" class="rounded-full" alt="" />
          <p>Username</p>
        </div>
        <img src="https://placehold.co/400x400" alt="" class="w-full" />
        <div class="flex items-center justify-between py-3 px-4">
          <div class="flex items-center space-x-3">
            <button class="focus:outline-none">
              <AiOutlineHeart size={24} />
            </button>
            <button class="focus:outline-none">
              <AiOutlineMessage size={24} />
            </button>
            <button class="focus:outline-none">
              <AiOutlineShareAlt size={24} />
            </button>
          </div>
          <p class="text-gray-500">12 likes</p>
        </div>
        <div className="px-2">caption goes here</div>
      </div> */}
    </div>
  );
};

export default Feed;
