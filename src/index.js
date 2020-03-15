import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail.js';

const App = () => {
    // var date = new Date().toLocaleString();
    // var state = {
    //     date: new Date().toLocaleString()
    // };
    // const date = new Date().toLocaleString();
    const simpleComment = 'Simple comment';
    return (
        <div className="ui container comments">
            <CommentDetail picsrc={faker.image.avatar()}
                           author={faker.name.firstName(0)}
                           date={new Date().toLocaleString()}
                           comment={simpleComment}
            />
            <CommentDetail picsrc={faker.image.avatar()}
                           author={faker.name.firstName(0)}
                           date={new Date().toLocaleString()}
                           comment={simpleComment}
            />
            <CommentDetail picsrc={faker.image.avatar()}
                           author={faker.name.firstName(0)}
                           date={new Date().toLocaleString()}
                           comment={simpleComment}
            />
            <CommentDetail picsrc={faker.image.avatar()}
                           author={faker.name.firstName(0)}
                           date={new Date().toLocaleString()}
                           comment={simpleComment}
            />
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));


// https://semantic-ui.com/

// https://cdnjs.com/libraries/semantic-ui

// https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css

//npm install --save faker