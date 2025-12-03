const consoleDiv = document.getElementById("console");

function formatValue(value) {
    if (typeof value === "object" && value !== null) {
        // nicely formatted JSON output
        return JSON.stringify(value, null, 2);
    }
    return String(value);
}

function printToScreen(...messages) {
    const line = document.createElement("pre");  // <pre> keeps formatting
    line.style.margin = "0";
    line.textContent = messages.map(formatValue).join(" ");
    consoleDiv.appendChild(line);
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
}


function clg(...messages) {
    printToScreen(...messages);
}


const originalLog = console.log;
console.log = function (...messages) {
    printToScreen(...messages);
    originalLog.apply(console, messages);
};

// let name = prompt("enter the name");
// let age = prompt("enter your age");



// clg("your name is " + name + " and you are "+age+" year old")

document.getElementById("changeBtn").addEventListener("click",()=>{
    document.getElementById("text").innerHTML="Jaadduuuuuu!😁";
})