import {generateComment} from '../mock/comment.js';

const COMMENTS_COUNT = 100;

const generateComments = () => {
  const comments = [];

  for (let i = 0; i < COMMENTS_COUNT; i++) {
    comments.push(generateComment(i));
  }

  return comments;
};

export default class CommentModel {
  comments = generateComments();

  getComments = () => this.comments;
}
