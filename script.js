// Get reference to select element
const courseSelect = document.getElementById("courseSelect");

// Get reference to hidden checkbox container
const extraOption = document.getElementById("extraOption");

// Add event listener for change event
courseSelect.addEventListener("change", function () {

    // If Web Development is selected
    if (courseSelect.value === "web") {
        extraOption.classList.remove("hidden");
    } else {
        extraOption.classList.add("hidden");
    }

});


// Get reference to text input
const nameInput = document.getElementById("nameInput");

// Add keydown event listener
nameInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        alert("Enter key was pressed!");
    }

});
