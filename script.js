// Optional animation on page load
window.onload = function() {
   const container = document.querySelector('.container');
   container.style.opacity = '0'; // Start with opacity 0
   container.style.transform = 'translateY(20px)'; // Start with a slight downward position

   setTimeout(() => {
       container.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
       container.style.opacity = '1'; // Fade in
       container.style.transform = 'translateY(0)'; // Move to original position
   }, 100); // Delay for effect
};

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
   event.preventDefault(); // Prevent the default form submission

   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const message = document.getElementById('message').value;

   alert(`Thank you for your message, ${name}! We will get back to you soon.`);
   
   // Reset the form after submission
   this.reset();
});
var name1=document.getElementById('name').value;
var phone1=document.getElementById('phone').value;
var email1=document.getElementById('email').value;
var messagebody="Name" +name1 +
"<br/> Phone" +phone1 +
"<br/> Email" +email1;
function emailSend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "backup1kshitiz1303@gmail.com",
        Password : "F768537AE5CA5FC1ED9E48838692032214DD",
        To : 'backup1kshitiz1303@gmail.com',
        From : "backup1kshitiz1303@gmail.com",
        Subject : "This is the subject",
        Body : messagebody
    }).then(
      message => alert(message)
    );
}