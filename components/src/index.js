import React from 'react';
import ReactDom from 'react-dom';
import faker from "faker";
import CommentDetail from './CommentDetail.js';
import ApprovalCard from './ApprovalCard.js';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Ahmed"
          timeAgo="Today at 10:05AM"
          avatar={faker.image.avatar()}
          content="Nice blog!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Rocky"
          timeAgo="Today at 1PM"
          avatar={faker.image.avatar()}
          content="You did it!"
        />
      </ApprovalCard>
       
      <ApprovalCard>
        <CommentDetail
          author="Dillon"
          timeAgo="Today at 5:45PM"
          avatar={faker.image.avatar()}
          content="You're the best!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
