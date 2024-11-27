function increaseTextSize() {
    document.body.style.fontSize = '120%'; 
}
function decreaseTextSize() {
    document.body.style.fontSize = '100%'; 
}
function toggleTheme() {
document.body.classList.toggle("darktheme")
}

function validateForm (event) {
    event.preventDefault()
    const input=document.querySelectorAll("input[required]")

    let allFilled=true
    input.forEach(input =>{

    if(!input.value.trim()) {
        allFilled = false;
        input.style.border
     ="1px solid red"; // Highlight empty fields
    } else {
        input.style.border=""; // Remove highlight if filled
    }
});
// If all fields are filled, display submit message
if (allFilled) {
    alert("Form submitted successfully!");
    return true;
} else {
    alert ("Please fill in all required fields.");
    return false; 
}
console.log("Button pressed")
}