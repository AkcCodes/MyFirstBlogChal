function validateForm() {
    const uname = document.getElementById("uname").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const errorMessages = [];

    if (uname.trim() === "") {
        errorMessages.push("Name is required.");
    }

    if (title.trim() === "") {
        errorMessages.push("Title is required.");
    }

    if (content.trim() === "") {
        errorMessages.push("Content is required.");

    if (errorMessages.length > 0) {
        displayErrors(errorMessages);
        return false; // Prevent form submission
    } else {
        return true; // Allow form submission
    }
    }};

    function displayErrors(errors) {
        const errorContainer = document.createElement("div");
        errorContainer.classList.add("error");
        
        errors.forEach(function(error) {
            const errorMessage = document.createElement("p");
            errorMessage.textContent = error;
            errorContainer.appendChild(errorMessage);
        })
        const form = document.getElementById("myForm");
    form.parentNode.insertBefore(errorContainer, form.nextSibling);
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate the form
        if (validateForm()== true) {
            // Redirect to another page after successful validation
            const redirectUrl = "blog.html"; // Change this to your desired URL
            window.location.href = redirectUrl;
        }
    });
});

function myFunction() {
    const element = document.querySelector('.Myfirstblog')
    element.classList.add("dark-mode");
}

function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const uname = document.getElementById("uname").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    // Store data in localStorage
    localStorage.setItem("submittedUName", uname);
    localStorage.setItem("submittedTitle", title);
    localStorage.setItem("submittedContent", content);
    // Redirect to display page
    window.location.href = "blog.html";
}
