//  // form
//  function MyButton(event) {
//     event.preventDefault(); 
//     let userName = document.getElementById('userName').value;
//     let password = document.getElementById('password').value;
//     console.log("Username: ", userName);
//     console.log("Password: ", password);

//     // displyed UI page
//     let outputText = `<h2>Details</h2>
//     <p><b>Username:</b> ${userName}</p>
//     <p><b>Password:</b> ${password}</p>`;
//     document.getElementById('output').innerHTML = outputText;
//     output.style.paddingLeft="15rem";
//   }
//     let nameError = document.getElementById('nameError');
//     let passwordError = document.getElementById('passwordError');
  
// // validation
//   if (userName.trim() === "") {
//     nameError.textContent = "Username is required*";
//     nameError.style.color = "red";
//     nameError.style.fontSize="13px";
//     nameError.style.paddingLeft="15px";
//     valid = false;
// } else {
//     nameError.textContent = '';
// }


function MyButton(event) {
  event.preventDefault();

 
  let username = document.getElementById("userName").value.trim();
  let password = document.getElementById("password").value.trim();

  
  let nameError = document.getElementById("nameError");
  let passwordError = document.getElementById("passwordError");

  // Clear previous errors
  nameError.innerHTML = "";
  passwordError.innerHTML = "";

  // Validation flags
  let isValid = true;

  // Username validation
  if (username === "") {
      nameError.innerHTML = "Username required";
      nameError.style.color = "red";
      isValid = false;
  }

  // Password validation (8 characters minimum)
  if (password.length < 8) {
      passwordError.innerHTML = "Password must be at least 8 characters";
      passwordError.style.color = "red";
      isValid = false;
  }

  // Final check for form validity
  if (isValid) {
      document.getElementById("output").innerHTML = "";
      document.getElementById("output").style.color = "green";
  } else {
      document.getElementById("output").innerHTML = "Login Failed!";
      document.getElementById("output").style.color = "red";
  }
}

