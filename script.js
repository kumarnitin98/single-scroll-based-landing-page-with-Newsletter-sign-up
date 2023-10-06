document.getElementById('newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // You can add code here to handle form submission, e.g., sending data to a server.
    // For demonstration purposes, we'll display an alert.
    alert(`Thank you, ${name}! You've subscribed with the email: ${email}`);
});
