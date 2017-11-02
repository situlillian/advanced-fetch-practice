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
//1) make web call to url
//ask the operating system to make a network call through your wifi or network card
//2) return a promise object

const getJsonPromise = userRequestPromise.then(usersRetrieved);
//3) pretend the web request is finished at this point
//convert body into a javascript object
getJsonPromise.then(userJSONReady);
//4) now you can run the function that you want


// shorthand below

function commentJSONReady(comments) {
  const commentsDiv = document.getElementById("comments");
  let commentsHTML = "";
  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    commentsHTML += "<div>" + comment.body + "</div>";
  }
  commentsDiv.innerHTML = (commentsHTML);
}

fetch("https://jsonplaceholder.typicode.com/comments").then((response) => {
  return response.json();
}).then(commentJSONReady);
