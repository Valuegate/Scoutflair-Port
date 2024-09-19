import React from "react";
import Ads from "../common/Ads";
import Feeds from "../common/Feeds";
import Posts from "../common/Posts";

import CreateNewPost from "./CreateNewPost";

const Spotlight = () => {
  return (
    <div className="w-full p-6 gap-6 grid grid-cols-[2fr_1fr]">
      <div className="w-full flex flex-col gap-6">
        <CreateNewPost />
        <Posts />
      </div>

      <div className="flex flex-col gap-6 w-full">
        <Feeds />
        <div className="sticky top-6 self-start">
          <Ads />
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
