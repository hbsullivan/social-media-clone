import React from "react";

function Follower(props) {
  return (
    <div class = "followersuggestion">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <button placeholder="Tweet" className="btn  btn-outline-primary">Follow</button>
    </div>
  );
}
export default Follower;