var profile_flag = 1;

document.getElementById("edit_profile").addEventListener("click", function () {
  console.log(`Is getting called`);
  const inputs = document.querySelectorAll("input");

  if (profile_flag === 1) {
    console.log("display is none");
    inputs.forEach((input) => {
      input.style.display = "none";
      input.value = "";
    });
    profile_flag = 0;
  } else {
    console.log("display is block");
    inputs.forEach((input) => {
      input.style.display = "block";
    });
    profile_flag = 1;
  }
});

