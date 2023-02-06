import React from "react";
import profileImage from "./../img/mahomes.png";

function Profile(){
  return(
    
    <div class="col">
    {/*    <div class="row">
         <div class="col-4 profile-comp" > */}         
          <div class="profile-comp">
            <div class="banner">            
              <div class="profileMain">
                <img class="profileImg" src={profileImage} alt="profile picture" width={80} height={80}/>
                <span class="profileName">Patrick Mahomes</span>
              </div>
              <div class="profileBtns">
                <button placeholder="Tweet" className="btn btn-outline-primary">Tweets</button>
                <button placeholder="Tweet" className="btn btn-outline-primary">Following</button>
                <button placeholder="Tweet" className="btn btn-outline-primary">Followers</button>
              </div> 
            </div>
          </div>
          
          <div class="profile-comp my-5 p-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a consectetur diam. Quisque ut euismod purus, a sagittis metus. Nunc fermentum diam at nisi finibus iaculis. Donec sit amet velit risus. Integer ac laoreet quam, vel tempus nibh. Ut fringilla cursus purus eget eleifend. Donec imperdiet, leo in interdum eleifend, tellus nisi varius nibh, quis auctor ipsum odio eget nulla. Phasellus tristique turpis pulvinar felis laoreet, at venenatis orci cursus. Mauris quis blandit dui. Fusce mollis non ex non vulputate. Sed aliquam sapien sit amet quam vestibulum dictum. Mauris sit amet quam vitae diam porttitor sagittis non quis massa.</p>
          </div>
      {/* </div>
       </div> */}
    </div>    
  );
}

export default Profile;