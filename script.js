function save() {
    let userinput = document.getElementById("journal").textContent;
    localStorage.setItem('input', userinput);
    
}
const s = document.getElementById("s");
s.addEventListener("click",save);
function show() {
    y = localStorage.getItem('input');
    const x = document.getElementById("out");
    x.textContent = y; 
}
const notes = document.getElementById("notes");
notes.addEventListener("click",show);