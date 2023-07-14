// Smooth scrolling animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Update active navigation link
  window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
  
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });
  
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  });
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Construct the email body
    var body = 'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message;
  
    // Send the email
    var mailtoLink = 'mailto:howrah055@gmail.com subject=New message from website&body=' + encodeURIComponent(body);
    window.location.href = mailtoLink;
  
    // Reset the form
    document.getElementById('contact-form').reset();
  });
    