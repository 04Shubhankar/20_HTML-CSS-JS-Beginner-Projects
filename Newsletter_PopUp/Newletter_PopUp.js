// Function to toggle the visibility of the newsletter popup
function toggleNewsLetterwidgit(){
    // Get the element with the ID "newsletter"
    const newsletter = document.getElementById("newsletter");
    
    // Toggle the "active" class on the newsletter element. This will either add or remove the "active" class.
    // If the "active" class is added, the newsletter will be visible; if removed, it will be hidden.
    newsletter.classList.toggle("active");
}

// Function to handle the signup process and show the "in process" message
function inprocess(){
    // Call the toggleNewsLetterwidgit function to hide the newsletter popup when the signup button is clicked
    toggleNewsLetterwidgit();
    
    // Get the element with the ID "inprocess" (the message to show when the process is active)
    const inprocess = document.getElementById("inprocess");
    
    // Toggle the "active" class on the inprocess element. This will show the "in process" message when the "active" class is added,
    // and hide it when the "active" class is removed.
    inprocess.classList.toggle("active");
}
