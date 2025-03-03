function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}
function calculateResult(){
    try{
        let result = new Function("return " + document.getElementById("display").value)();
        document.getElementById("display").value = result;
    }catch (error){
        alert("Error in the calculation!");
    }
}
document.addEventListener("keydown", function(event) {
    let key = event.key;

    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        backspace();
    } else if (key === "Escape") {
        clearDisplay();
    }
});

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

