import React from "react";
import blackshirt from "../../images/blackshirt.png";
import greyshirt from "../../images/greyshit.png";
const banner = () => {
  return (
    <div className="banner">
      <div className="bg-background">
        <div className="blackshirt">
          <img src={blackshirt} alt="" />
        </div>
        <div className="greyshirt">
          <img src={greyshirt} alt="" />
        </div>
      </div>
      <div className="designer-line">
        <div className="designer-line-text">
        <h1>JOIN OUR TEAM</h1>
        <p>share your art</p>
      </div>
        </div>
       
    </div>
  );
};

export default banner;
