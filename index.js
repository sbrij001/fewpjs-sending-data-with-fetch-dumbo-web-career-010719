// pseudocode
// 1.  write a method, submitData, that takes two strings arguments, one representing a user's name and the other representing a user's email.
function submitData(userName, userEmail){
  return (
    fetch("http://localhost:3000/users", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail
      })
    })
    .then(function(response){
      return response.json();
    })
    .then(function(object){
      document.body.innerHTML = object["id"];
    })
  )
}
