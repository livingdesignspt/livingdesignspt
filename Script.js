document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}, for reaching out. We have received your message and will respond to ${email} soon.`);

    // Clear the form
    this.reset();
});
