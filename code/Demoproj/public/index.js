var profile_flag =1;

document.getElementById('edit_profile').addEventListener('click', function() {
    if(profile_flag==1){

  document.querySelectorAll('input').forEach(input => {
    input.style.display = 'none';  // Hide the input
    input.value = '';              // Clear the value
    profile_flag=0;
  });
    }
});

