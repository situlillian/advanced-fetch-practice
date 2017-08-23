
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

let promise = fetch("https://jsonplaceholder.typicode.com/users");
promise = promise.then(usersRetrieved);
promise.then(userJSONReady);
