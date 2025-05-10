function validateForm(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform your validation logic here
    if (username === "your_username" && password === "your_password") {
        alert("Login successful!");
        // Redirect to the desired page
        // window.location.href = "index.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
