var profile_flag = 1;

var button = document.getElementById("edit_profile");
var name_field = document.getElementById("name");
var name_span = document.createElement("span");
var email_field = document.getElementById("email");
var email_span = document.createElement("span");
var intrest_field = document.getElementById("intrest");
var intrest_span = document.createElement("span");



document.getElementById("edit_profile").addEventListener("click",async function() {
  if (profile_flag === 1) {
    name_span.innerText = name_field.value;
    email_span.innerText = email_field.value;
    intrest_span.innerText = intrest_field.value;
    name_field.parentNode.replaceChild(name_span, name_field);
    email_field.parentNode.replaceChild(email_span, email_field);
    intrest_field.parentNode.replaceChild(intrest_span, intrest_field);

    // send data to DB 
    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name : name_field.value }),
    });

    const result = await response.json();
    console.log(result);


    profile_flag = 0;
    button.innerHTML = "Edit Profile";
  } else {
    name_span.parentNode.replaceChild(name_field, name_span);
    email_span.parentNode.replaceChild(email_field, email_span);
    intrest_span.parentNode.replaceChild(intrest_field, intrest_span);
    button.innerHTML = "Save Profile";

    profile_flag = 1;
  }
});
