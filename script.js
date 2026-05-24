function save() {
    let userinput = document.getElementById("journal").value;
    localStorage.setItem('input', userinput);
    document.getElementById("journal").value = "";
}
const s = document.getElementById("save");
s.onclick=save;
function show() {
    i = localStorage.getItem('input');
    const o = document.getElementById("output");
    o.textContent = i; 
}
const notes = document.getElementById("notes");
notes.onclick=show;