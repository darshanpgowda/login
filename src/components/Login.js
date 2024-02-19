import React from "react";

export default function Login() {
  return (
    <div className="logincontainer">
      <div className="primaryblock">
        <img src="https://w0.peakpx.com/wallpaper/458/87/HD-wallpaper-a-dark-cartoon-cartoon-dark.jpg" alt="" />
      </div>
      <div className="secondaryblock">
        <div className="Containerblock">
          <h2 className="heading">LOGIN</h2>
        </div>
        <div className="block">
          <div className="heading">
            <div className="inputBlock flex">
            <img src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png" alt="" />
              <input type="text" placeholder="Unique name"/>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="heading">
            <div className="inputBlock flex">
            <img src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" alt="" />
              <input type="password" placeholder="Password"/>
            </div>
          </div>
        </div>
        <div className="Submitblock">
          <input type="submit" value="Submit" />
        </div>
      </div>
    </div>
  );
}
