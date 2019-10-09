// pseudocode
// 1.  write a method, submitData, that takes two strings arguments, one representing a user's name and the other representing a user's email.

const configObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify({
    name: userName,
    email:userEmail
  })
};

function submitData(userName, userEmail){
  fetch('http://localhost:3000/users', configObject)
}
