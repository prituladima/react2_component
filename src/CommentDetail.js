import React from 'react';
// import faker from "faker";
// CommentDetail
/**
 * picsrc
 * author
 * date
 * comment
 */
const CommentDetail = props => {
    // const date = new Date().toLocaleString();
    return (
        <div className="comment">

            <a href="/" className="avatar">
                <img alt="avatar" src={props.picsrc}/>
            </a>

            <div className="content">
                <a href="/" className="author">{props.author}</a>
                <div className="metadata">
                    <span className="date">{props.date}</span>
                </div>
                <div className="text">{props.comment}</div>
            </div>
        </div>
    )
};

export default CommentDetail;