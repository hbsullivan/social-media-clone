import React from "react";


//const inline = { display: "flex", alignItems: "center", flexDirection: "row" };
const navBarStyle = "btn btn-outline-primary btn-m";

function Header() {
  return (
    <section className="row">
      <div className="col-7">
        <button className={navBarStyle}>Home</button>
        <button className={navBarStyle}>Notifications</button>
        <button className={navBarStyle}>Messages</button> 
      </div>           
      <div className="col-5 form-group">
        <input type="text" className="rounded-pill border text-center mx-3" placeholder="Search"/>
        <button placeholder="Tweet" className="btn rounded-pill btn-outline-primary">Tweet</button>
      </div>
      <hr/>
    </section>
  )
}

export default Header;