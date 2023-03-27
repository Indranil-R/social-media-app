import React from "react";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
    <img
      class="my-4 h-24 w-24 rounded-full object-cover"
      src="https://via.placeholder.com/150"
      alt="Profile picture"
    />
    <h1 class="mb-2 text-3xl font-bold text-center">John Doe</h1>
    <p class="mb-4 text-gray-600 text-center">Web Developer | Photographer | Traveller</p>
    {/* <div class="mb-8 flex justify-center space-x-4">
      <a href="#" class="text-gray-600 hover:text-gray-900">
        <i class="fab fa-facebook fa-lg"></i>
      </a>
      <a href="#" class="text-gray-600 hover:text-gray-900">
        <i class="fab fa-twitter fa-lg"></i>
      </a>
      <a href="#" class="text-gray-600 hover:text-gray-900">
        <i class="fab fa-instagram fa-lg"></i>
      </a>
      <a href="#" class="text-gray-600 hover:text-gray-900">
        <i class="fab fa-linkedin fa-lg"></i>
      </a>
    </div> */}
     <div class="flex w-full px-2 justify-evenly">
    <div class="mb-4 text-center md:mb-0">
      <h2 class="text-lg font-bold">Posts</h2>
      <p class="text-gray-600">100</p>
    </div>
    <div class="mx-2 mb-4 text-center md:mb-0">
      <h2 class="text-lg font-bold">Followers</h2>
      <p class="text-gray-600">500</p>
    </div>
    <div class="text-center">
      <h2 class="text-lg font-bold">Following</h2>
      <p class="text-gray-600">200</p>
    </div>
  </div>
  </div>
  
  );
};

export default ProfileHeader;
