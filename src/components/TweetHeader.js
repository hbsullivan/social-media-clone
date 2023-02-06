import React from "react";
import profileImage from "./../img/mahomes.png";

export default function TweetHeader() {
  return (
    <div class='tweet-header'>
      <img src={profileImage} alt="profile picture" width={25} height={25} className="mx-1"/>
      <input type="text" placeholder="What's happening?" className="mx-1" />      
    </div>
  );
}