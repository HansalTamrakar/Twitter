import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
const Rightbar = () => {
  const navigate = useNavigate();

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  }
  return (
    <div className="fixed left-[1600px]">
      <div className="ml-[800px">
        <button className=" text-white" onClick={handleSignOut}>
          SignOut
        </button>
      </div>
      <div className="relative  w-1/3 text-3xl text-white  h-screen pl-4 ">
        <div className="bg-slate-900 h-[700px] w-[500px] mt-24 ml-6 rounded-xl p-6">
          <h1 className="font-bold">What's happening</h1>
          <div className="mt-12">
            <h1 className="text-2xl text-gray-500">Religion . Trending</h1>
            <h1 className="text-2xl">#AkhandBharat</h1>
            <h1 className="text-lg ml-2">73.2k posts</h1>
          </div>
          <div className="mt-12">
            <h1 className="text-2xl text-gray-500">Health . Trending</h1>
            <h1 className="text-2xl">#Corona</h1>
            <h1 className="text-lg ml-2">35.2k posts</h1>
          </div>
          <div className="mt-12">
            <h1 className="text-2xl text-gray-500">Politics . Trending</h1>
            <h1 className="text-2xl">#Adityayogi</h1>
            <h1 className="text-lg ml-2">23.2k posts</h1>
          </div>
          <div className="mt-12">
            <h1 className="text-2xl text-gray-500">Politics . Trending</h1>
            <h1 className="text-2xl">#Justice</h1>
            <h1 className="text-lg ml-2">14.2k posts</h1>
          </div>
          <h1 className="text-sky-500 mt-8">show more</h1>
        </div>
        <div className="bg-slate-900 h-[700px] w-[500px] mt-4 ml-6 rounded-xl p-6">
          <h1>Who to Follow</h1>
          <div className="flex justify-between">
            <div className="flex align-baseline mt-16  ">
              <div className="border  rounded-full h-16 w-16 ">
                <img
                  className="rounded-full"
                  src="https://pbs.twimg.com/profile_images/1700435941100527616/yOK_0ZhS_400x400.jpg"
                  alt=""
                />
              </div>
              <div>
                <div className="text-xl  font-bold ml-3">Hansal Tamrakar</div>
                <div className="font-bold text-gray-400 mt-1 ml-3 text-xl">
                  @HansalTamrakar
                </div>
              </div>
              <div className=" ml-12  bg-white text-black font-sans font-bold w-44  h-16  text-2xl py-4  text-center rounded-full">
                Follow
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex align-baseline mt-16  ">
              <div className="border  rounded-full h-16 w-16 ">
                <img
                  className="rounded-full"
                  src="https://imgs.search.brave.com/pUEzAuW8hcjz3o_GT4RfM88w8G9pODTHBRy1WwpIwWI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3J0cmFpdC1jaGVl/cmZ1bC1hdHRyYWN0/aXZlLXlvdW5nLWNo/dWJieS1wbHVzLXNp/emUtZmVtYWxlLWNh/c3VhbC1jbG90aGVz/LWxvb2tpbmctd2l0/aC1icm9hZC1oYXBw/eS1zbWlsZS13aGls/ZS1wb3NpbmctaW5k/b29ycy13aW5kb3ct/d2l0aC1jb3B5LXNw/YWNlLXlvdXItaW5m/b3JtYXRpb25fMzQ0/OTEyLTI1MDkuanBn/P3NpemU9NjI2JmV4/dD1qcGc"
                  alt=""
                />
              </div>
              <div>
                <div className="text-xl  font-bold ml-3">Priya Dewangan </div>
                <div className="font-bold text-gray-400 mt-1 ml-3 text-xl">
                  @PriyaDewangan
                </div>
              </div>
              <div className=" ml-12  bg-white text-black font-sans font-bold w-44  h-16  text-2xl py-4  text-center rounded-full">
                Follow
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
