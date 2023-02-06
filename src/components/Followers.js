import React from "react";
import Follower from "./Follower";

function Followers() {
  return (
    <div class="col followers">
      <h1 class="follower-header">Your Suggested Followers</h1>
      <Follower
        name="bill"
        description="sport lover"
      />
      <Follower
        name="derek"
        description="fadfafasfasdfadfafdasdfsfdf"
      />
    </div>
  );
}

export default Followers;