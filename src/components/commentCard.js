const CommentCard = ({ comment }) => {
  return (
    <div class="card">
      <div class="card-header">Comment</div>
      <div class="card-body">
        <h5 class="card-title">{comment.title}</h5>
        <p class="card-text">{comment.description}</p>
      </div>
    </div>
  );
};
export default CommentCard;
