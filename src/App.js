import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import TweetList from "./components/TweetList";
import Followers from "./components/Followers";

function App() {
  return (
    <>
    <div class="row">
      <Header />
      <Profile />
      <TweetList />
      <Followers/>
    </div>
      
    </>
  );
}

export default App;
