import { Button, Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import "./TweetBox.css";
import db from "./firebase";
const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Huy Tú",
            userName: "huytu",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
        });
        setTweetImage("");
        setTweetMessage("");
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input
                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput"
                    placeholder="Optional : Enter image URL"
                    type="text"
                />
            </form>
            <Button onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
        </div>
    );
}

export default TweetBox;
