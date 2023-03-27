import ProfileHeader from "@/components/ProfileHeader";
import { ProfilePosts } from "@/components/ProfilePosts";
import React from "react";

const profile = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-4">
      <ProfileHeader />
      <ProfilePosts />
    </div>
  );
};

export default profile;
