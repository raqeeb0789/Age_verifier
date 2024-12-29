const ageInput = document.getElementById("text"); 
const btn = document.getElementById("button"); 
const label = document.getElementById("random"); 

btn.onclick = function () {
    const newAge = Number(ageInput.value);    
    if (isNaN(newAge) || newAge < 0) {
        label.textContent = "Please enter a valid number.";
        label.style.color = "red"; 
    } else if (newAge > 18) {
        label.textContent = "You are eligible!";
        label.style.color = "green"; 
    } else {
        label.textContent = "You are not eligible.";
        label.style.color = "orange"; 
    }
};
