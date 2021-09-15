import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import CommentsList from "./CommentsList";
import { useCallback } from "react";

const Comments = () => {
  const params = useParams();
  const { quoteId } = params;
  const [isAddingComment, setIsAddingComment] = useState(false);
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);
  const addedCommentHandler = useCallback(() => {
    sendRequest({ quoteId });
  }, [sendRequest, quoteId]);
  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (status === "completed" && loadedComments && loadedComments.length) {
    comments = <CommentsList comments={loadedComments} />;
  }
  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered">No comments were added yet!</p>;
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm quoteId={quoteId} onAddComment={addedCommentHandler} />
      )}
      {comments}
    </section>
  );
};

export default Comments;
