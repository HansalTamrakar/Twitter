import "./App.css";
import Middle from "./Components/Middle";
import Rightbar from "./Components/Rightbar";
import Leftbar from "./Components/Leftbar";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "./Components/signIn";
import SignUp from "./Components/signup";
import { useEffect, createContext, useContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../src/utils/firebase";
import { useNavigate } from "react-router-dom";
import ImageAdder from "./Components/ImageAdder";


function App() {
  const navigate = useNavigate();
 

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user Present");
        navigate("/app");
        
        
        // console.log(userDetails);
      } else {
        navigate("/");
      }
    });
    return () => subscribe();
  }, []);
  return (
    // <UserData.Provider value={userDetails}>
      <div className=" overflow-x-hidden flex reative bg-black text-white scroll-smooth">
        <Leftbar />
     
        <Middle />
        <Rightbar />
      </div>
    // </UserData.Provider>
  );
}
function Body() {
  const navigate = useNavigate();

  return <SignUp />;
}
export const AppRouter = createBrowserRouter([
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/",
    element: <SignUp />,
  },
]);

export default Body;
