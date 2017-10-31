function usersRetrieved(response) {
  return response.json();
}
function userJSONReady(users) {
  const usersDiv = document.getElementById("users");
  let usersHTML = "";
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    usersHTML += "<div>" + user.name + "</div>";
  }
  usersDiv.innerHTML = (usersHTML);
}

const userRequestPromise = fetch("https://jsonplaceholder.typicode.com/users");
const getJsonPromise = userRequestPromise.then(usersRetrieved);
getJsonPromise.then(userJSONReady);

function commentsRetrieved(response) {
  return response.json();
}

function commentJSONReady(comments) {
  const commentsDiv = document.getElementById("comments");
  let commentsHTML = "";
  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    commentsHTML += "<div>" + comment.body + "</div>";
  }
  commentsDiv.innerHTML = (commentsHTML);
}

const commentRequestPromise = fetch("https://jsonplaceholder.typicode.com/comments");
const getJsonPromise2 = commentRequestPromise.then(commentsRetrieved);
getJsonPromise2.then(commentJSONReady);
