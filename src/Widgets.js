import React from 'react';
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import { Search } from '@material-ui/icons';
const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <Search className="widgets__searchIcon" />
                <input type="text" placeholder="Search Twitter" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"858551177860055040"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="AmericanFilm"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={"https://www.facebook.com/huytu1604/"}
                    options={{ text: "#reactjs is awesome", via: "huytu" }}
                />
            </div>

        </div>
    );
}

export default Widgets;
