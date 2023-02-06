import React from "react";
import TweetHeader from "./TweetHeader";
import Tweet from "./Tweet";
import greyImage from "./../img/grey.png";
import purpleImage from "./../img/purple.jpeg";
import greenImage from "./../img/green.jpeg";

export default function TweetList(){

  const mainTweets = [
    {
      image: greyImage,
      title: "Halftime Show",
      body: "Excited for Rihanna's halftime show"
    },
    {
      image: purpleImage,
      title: "Predictions",
      body: "Chiefs: 35 Eagles: 28, Halftime Show: Amazing"
    },
    {
      image: greenImage,
      title: "Random Tweet",
      body: "Random"
    }
  ]

  return (
    <div className="col">
      <TweetHeader />
      {mainTweets.map((tweet, index) =>      
      <Tweet image={tweet.image}
      titles={tweet.title}
      body={tweet.body}
      key={index}/>
      )}
    </div>

    // //loop through the array of tweets and display each tweet
    // <Tweet />
  );
}
