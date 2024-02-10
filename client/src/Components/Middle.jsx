import React, { useEffect, useState } from "react";
import setting from "../Assets/setting.png";
import globe from "../Assets/globe.png";
import photo from "../Assets/photo.png";
import location from "../Assets/location.png";
import timer from "../Assets/timer.png";
import gif from "../Assets/gif.png";
import more from "../Assets/more.png";
import Structure from "./Structure";
import { data } from "../Components/Constant";
import axios from "axios";
import Image from "./Image";
import ImageAdder from "./ImageAdder";

// import { useContext } from "react";
// import {userData} from '../App'

const Middle = () => {
  const [color, setColor] = useState("for");
  const [imgUpload, setImgUpload] = useState(0);
  const [Data, setData] = useState(data);
  const [file, setFile] = useState();
  const [respond, setRespond] = useState();
  async function getFile() {
    try {
      await axios
        .get("http://localhost:4000/getfileString")
        .then((response) => {
          console.log(response?.data?.response?.imageUrl);
          setFile(response?.data?.response?.imageUrl);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  const Post = () => {
    const input = document.querySelector("#text").value;
    getFile();
    if (!file) {
      return;
    }
    Data.unshift({
      kind: "youtube#searchResult",
      etag: "mxAj9DSgASV4K--KsNF89WbW-3M",
      statistics: {
        viewCount: "24311146",
        likeCount: "416478",
        favoriteCount: "0",
        commentCount: "9654",
      },
      id: {
        kind: "youtube#channel",
        channelId: "UCFbNIlppjAuEX4znoulh0Cw",
      },
      snippet: {
        publishedAt: "2018-05-24T16:26:39Z",
        channelId: "UCFbNIlppjAuEX4znoulh0Cw",
        title: "Hansal Tamrakar",
        description: `${input}`,
        thumbnails: {
          default: {
            url: "https://pbs.twimg.com/profile_images/1700435941100527616/yOK_0ZhS_400x400.jpg",
          },
          medium: {
            url: "",
          },
          high: {
            url: `${file}`,
          },
        },
        channelTitle: "Web Dev Simplified",
        liveBroadcastContent: "none",
        publishTime: "2018-05-24T16:26:39Z",
      },
    });
    document.getElementById("text").value = "";
  };

  return (
    <>
      <div className={`w-1/3   h-[1800px] relative top-0  left-[800px]`}>
        <div className="font-extrabold text-2xl flex justify-around pt-4 pb-5 p-6   h-24">
          <div>
            <div
              className="cursor-pointer"
              onClick={() => {
                setColor("for");
              }}
            >
              For you
            </div>
            <br />
            {color === "for" ? <hr className="w-24 bg-sky-400 h-2 " /> : null}
          </div>

          <div>
            <div
              className="cursor-pointer"
             
            >
              Following
            </div>
            <br />
            {color === "follow" ? (
              <hr className="w-24 bg-sky-400 h-2 " />
            ) : null}
          </div>
          <div>
            <img src={setting} alt="" className="h-10 " />
          </div>
        </div>
        <div>
          <div className="flex min-h-24 pr-6">
            <img
              className="rounded-full h-16 ml-4"
              src="https://pbs.twimg.com/profile_images/1700435941100527616/yOK_0ZhS_400x400.jpg"
              alt=""
            />
            <textarea
              type="text"
              id="text"
              placeholder="What is Happening ?"
              className="ml-4 text-2xl text-white bg-black p-4 mt-4 overflow-hidden h-48  w-full border  "
            />
          </div>
          <div className="ml-20 mt-8 flex">
            <div>
              <img className="h-8" src={globe} alt="" />
            </div>
            <div className="font-bold text-sky-400 text-2xl ml-2 ">
              Everyone can reply
            </div>
          </div>
          {imgUpload ? <ImageAdder /> : null}

          <hr className="w-full colo h-1 bg-sky-500 mt-8 flex justify-between " />
          <div className="flex justify-between">
            <div className="flex">
              <img
                className="ml-8 h-6 mt-7"
                src={photo}
                alt=""
                onClick={() => {
                  setImgUpload(1);
                }}
              />
              <img className="ml-8 h-6 mt-7" src={timer} alt="" />
              <img className="ml-8 h-6 mt-7" src={gif} alt="" />
              <img className="ml-8 h-6 mt-7" src={location} alt="" />
              <img className="ml-8 h-6 mt-7" src={more} alt="" />
            </div>
            <button
              className="  rounded-full text-2xl mt-3 text-white font-extrabold bg-sky-400 w-48 h-14 mb-2 mr-4"
              onClick={() => {
                setImgUpload(0);
                Post();
              }}
            >
              POST
            </button>
          </div>
        </div>

        {Data?.map((index, val) => {
          return <Structure key={val} {...index} />;
        })}
        <Structure />
      </div>
    </>
  );
};

export default Middle;
