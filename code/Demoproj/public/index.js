var profile_flag = 1;

document.getElementById("edit_profile").addEventListener("click", function() {
  if (profile_flag == 1) {
    console.log(`display is none`);
    document.querySelectorAll("input").forEach((input) => {
      input.style.display = "none"; // Hide the input
      input.value = ""; // Clear the value
      profile_flag = 0;
    });
  }
  else{
    console.log(`display is block`);
    document.querySelectorAll("input").forEach((input) => {
      input.style.display = "block"; // Hide the input
      // input.value = ""; // Clear the value
      profile_flag = 1;
    });
  }
});
