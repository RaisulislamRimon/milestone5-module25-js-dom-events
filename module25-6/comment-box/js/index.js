// step 1 : add event listener to the post button
document.getElementById("btn-post").addEventListener("click", function () {
  //   console.log("post button is clicked");

  //   step 2 : get the comment from the text area field

  /*   const commentBox = document.getElementById("new-comment");
     console.log(commentBox); */
  /* const commentBox = document.getElementById("new-comment").value;
  console.log(commentBox); */
  const commentBox = document.getElementById("new-comment");
  const newComment = commentBox.value;
  //   console.log(commentBox.value);

  //   step 3 : set the comment inside the comment-container
  // 1. get the comment conatiner
  // 2. create a new element (p tag)
  // 3. set the text of the comment as innerText of the p tag
  // 4. add the p tag using appendChild

  const commentContainer = document.getElementById("comment-container");
  const p = document.createElement("p");
  //   p.innerText = commentBox.value;
  p.innerText = newComment;
  commentContainer.appendChild(p);

  //   step 4 : empty the text area field
  commentBox.value = "";
});
