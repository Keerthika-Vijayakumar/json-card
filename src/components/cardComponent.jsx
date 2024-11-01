import '../pages/Cards/style.css';
import parse from 'html-react-parser';
import React, { Component } from "react";

class CardComponent extends Component {

    getBackgroundColor() {
        const r = Math.floor(200 + Math.random() * 55);
        const g = Math.floor(200 + Math.random() * 55);
        const b = Math.floor(200 + Math.random() * 55);
        return `rgb(${r}, ${g}, ${b})`;
    }
    render() {
        const { title, selftext_html, url, score } = this.props.post;
        const backgroundColor = this.getBackgroundColor(score);

        return (
            <div className="card" style={{ backgroundColor: backgroundColor }}>
                <h2>{title}</h2>
                {selftext_html ? (
                    <div
                        className="selftext"
                        dangerouslySetInnerHTML={{ __html: parse(selftext_html) }}
                    />
                ) : (
                    <p className="selftext-fallback">No additional text available for this post.</p>
                )}
                <a href={url} target="_blank" rel="noopener noreferrer">
                    Visit Post
                </a>
                <div className="score">Score: {score}</div>
            </div>
        );
    }
}
export default CardComponent;