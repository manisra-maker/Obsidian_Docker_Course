var profile_flag =1;

document.getElementById('edit_profile').addEventListener('click', function() {
  document.querySelectorAll('input').forEach(input => {
    input.style.display = 'none';  // Hide the input
    input.value = '';              // Clear the value
  });
});

