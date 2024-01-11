import React from "react";
import './Announcement.css';
import Marquee from "react-fast-marquee";

const Announcement = () => {
    return (
        <div className="announcement">
          <Marquee>
            <div className="announcement-text text1">
                <span>YOUR AD HERE!</span>
            </div>
            <div className="announcement-text text2">
                <span>YOUR AD HERE!</span>
            </div>
          </Marquee>
        </div>
    )
}

export default Announcement