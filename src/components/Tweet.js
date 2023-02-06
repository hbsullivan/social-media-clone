import React from "react";
import PropTypes from "prop-types";

export default function Tweet(props) {
  return (
    <div class="my-3 row">
      <div class="tweet-border">
        <div class="col-3">
          <img src={props.image} width={50} height={50}/>
        </div>
        <div>
          <h6>{props.titles}</h6>
          <p>{props.body}</p>  
        </div>
      </div>      
    </div>
  );
}

Tweet.propTypes = {
  titles: PropTypes.string,
  body: PropTypes.string
} ;