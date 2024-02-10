import React, { useState } from "react";
import tick from "../Assets/tick.png";
import redlike from "../Assets/redlike.png";
import blacklike from "../Assets/whitelike.png";
import comment from "../Assets/comment.png";
import bar from "../Assets/bar.png";
import bookmark from "../Assets/bookmark.png";
import wbookmark from "../Assets/whitebookmark.png";

import Video from "./Video";
const Structure = ({ snippet, statistics }) => {

  const [data, setData] = useState(false);
  return (
    <div>
      <div className="flex ml-4 mt-12">
        <div className="  rounded-full h-12 w-auto ml-4">
          <img
            className="rounded-full h-12 w-auto"
            src={snippet?.thumbnails?.default?.url}
            alt=""
          />
        </div>

        <div className="text-2xl  font-bold ml-2">
          {snippet?.title.slice(0, 48)}
        </div>
        <img className="rounded-full ml-2 mt-1 h-6  w-auto" src={tick} alt="" />
      </div>
      <div className="font-bold text-gray-400 mt-1 ml-16">
        @{snippet?.title}
      </div>
      <div className="ml-10 mt-4">{snippet?.description}</div>
      <div className="mr-6">
        <img
          className=" h-[500px]  ml-14 w-full mt-6 "
          src={snippet?.thumbnails?.high?.url}
          alt=""
        />
      </div>

      <div className="flex justify-between m-6 ml-8 mr-8">
        <div>
          <img
            className="h-12"
            onClick={() => {
              setData(!data);
            }}
            src={data ? redlike : blacklike}
            alt=""
          />

          <span className=" pt-6 text-xl  ">{statistics?.likeCount}</span>
        </div>
        <div>
          <img className="h-12" src={comment} alt="" />
          <span className="pt-6 text-xl  ">{statistics?.commentCount}</span>
        </div>
        <div>
          <img className="h-12" src={bar} alt="" />
          <span className="pt-6 text-xl  ">{statistics?.viewCount}</span>
        </div>
        <div>
        <img
            className="h-12"
            onClick={() => {
              setData(!data);
            }}
            src={data ? bookmark : wbookmark}
            alt=""
          />
        </div>
      </div>
      <hr className="w-full h-1 bg-black" />
    </div>
  );
};

export default Structure;
