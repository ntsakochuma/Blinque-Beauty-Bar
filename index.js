

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}


function validateForm() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Perform your validation here
  // For example, check if the username and password are valid

  if (username === 'admin' && password === 'password') {
    alert('Login successful!');
    return true; // Allow form submission
  } else {
    alert('Invalid username or password!');
    return false; // Prevent form submission
  }
}



document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    showPopup();
  }, 5000); // 5 seconds

  document.getElementById('closePopup').addEventListener('click', function() {
    hidePopup();
  });
});

function showPopup() {
  document.getElementById('newsletterPopup').style.display = 'block';
}

function hidePopup() {
  document.getElementById('newsletterPopup').style.display = 'none';
}
