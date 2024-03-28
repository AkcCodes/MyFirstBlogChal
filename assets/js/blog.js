const submittedTitle = localStorage.getItem("submittedTitle");
const submittedContent = localStorage.getItem("submittedContent");

// Display submitted data
document.getElementById("submittedTitle").textContent = submittedTitle;
document.getElementById("submittedContent").textContent = submittedContent;

// Clear localStorage to avoid displaying the same data again on refresh
localStorage.removeItem("submittedTitle");
localStorage.removeItem("submittedContent");