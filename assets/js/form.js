function validateForm(event) {
    console.log(event);
    const uname = document.getElementById("uname").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const errorMessages = [];
console.log(uname, title, content)
    if (uname.trim() === "") {
        errorMessages.push("Name is required.");
    }

    if (title.trim() === "") {
        errorMessages.push("Title is required.");
    }

    if (content.trim() === "") {
        errorMessages.push("Content is required.");
    }
    if (errorMessages.length > 0) {
        displayErrors(errorMessages);
        console.log(errorMessages, errorMessages.length)
        return false; // Prevent form submission
    } else {
        console.log('something')
        //write form info to local to local storage
        const info = {
            uname: uname,
            title: title,
            content: content,
        }
        localStorage.setItem("info", JSON.stringify(info))
            window.location.href = "./blog.html";
    }
    };

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


    const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate the form
        validateForm(event);
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
    
    }
    
    
