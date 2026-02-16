// Get reference to the select dropdown
const courseSelect = document.getElementById("courseSelect");

// Get reference to the checkbox container
const extraOption = document.getElementById("extraOption");

// Event handler for dropdown change
courseSelect.addEventListener("change", function() {
    // If "Web Development" is selected, show the hidden div
    if (courseSelect.value === "web") {
        extraOption.classList.remove("hidden");
    } else {
        // Otherwise, keep it hidden
        extraOption.classList.add("hidden");
    }
});

// Get reference to the text input using querySelector
const nameInput = document.querySelector("#nameInput");

// Add keydown event handler
nameInput.addEventListener("keydown", function(event) {
    // Check if the key pressed is "Enter"
    if (event.key === "Enter") {
        alert("the enter key was pressed");
    }
});

