import React from "react";
import house from "../Assets/home.png";
import find from "../Assets/find.png";
import bookmark from "../Assets/bookmark.png";
import group from "../Assets/icons8-group-32.png";
import grow from "../Assets/grow.png";
import list from "../Assets/list.png";
import message from "../Assets/message.png";
import more from "../Assets/more.png";
import user from "../Assets/user.png";
import notification from "../Assets/notification.png";
import twitter from "../Assets/twitter.png";
import UserStrucuture from "./UserStrucuture";
const leftbar = () => {
  return (
    <div className="w-1/3 pt-4 pl-[500px] fixed">
      <div className="flex align-baseline ">
        <img className="h-12 " src={twitter} alt="" />
      </div>
      <div className="flex align-baseline mt-6">
        <img className="h-12" src={house} alt="" />
        <div className="ml-8 text-2xl mt-3 font-bold">Home</div>
      </div>
      <div className="flex align-baseline mt-6">
        <img className="h-12" src={find} alt="" />
        <div className="ml-8 text-2xl mt-3 font-bold">Find</div>
      </div>
      <div className="flex align-baseline mt-6">
        <img className="h-12" src={notification} alt="" />
        <div className="ml-8 text-2xl mt-3 font-bold">Notifications</div>
      </div>
      <div className="flex align-baseline mt-6">
        <img className="h-12" src={message} alt="" />
        <div className="ml-8 text-2xl mt-3 font-bold">Messages</div>
      </div>
      <div className="flex align-baseline mt-6">
        <img className="h-12" src={grow} alt="" />
        <div className="ml-8 text-2xl mt-3 font-bold">Grok</div>
      </div>
      <div className="flex align-baseline mt-6">
        <img className="h-12" src={list} alt="" />
        <div className="ml-8 text-2xl mt-3 font-bold">List</div>
      </div>
      <div className="flex align-baseline mt-6">
        <img className="h-12" src={bookmark} alt="" />
        <div className="ml-8 text-2xl mt-3 font-bold">Bookmark</div>
      </div>
      <div className="flex align-baseline mt-6">
        <img className="h-12" src={group} alt="" />
        <div className="ml-8 text-2xl mt-3 font-bold">Groups</div>
      </div>
      <div className="flex align-baseline mt-6">
        <img className="h-12" src={user} alt="" />
        <div className="ml-8 text-2xl mt-3 font-bold">User</div>
      </div>
      <div className="flex align-baseline mt-6">
        <img className="h-12" src={more} alt="" />
        <div className="ml-8 text-2xl mt-3 font-bold">More</div>
      </div>
      <div className="flex align-baseline mt-6">
        <button className=" -ml-8  rounded-full text-2xl mt-3 text-white font-extrabold bg-sky-400 w-72 h-20 mb-2">
          POST
        </button>
      </div>
     <UserStrucuture/>
    </div>
  );
};

export default leftbar;
