/*---------------Profile Page--------------*/
const lim = document.getElementById("limQuestions");
const lir = document.getElementById("lirQuestions");

const toggle = () => {
    lir.style.color = "#0044ff";
    lir.style.fontWeight = "bolder";
    lim.style.color = "black";
}
toggle();

lir.onclick = () => {
    lir.style.color = "#0044ff";
    lir.style.fontWeight = "bolder";
    lim.style.color = "black";
    lim.style.fontWeight = "normal";
}

lim.onclick = () => {
    lir.style.color = "black";
    lim.style.color = "#0044ff";
    lim.style.fontWeight = "bolder";
    lir.style.fontWeight = "normal";
}

//-------------LOGSOUT USER--------------------
let logout = document.getElementById("logout");

logout.onclick = () => {
    let check = confirm("ARE YOU SURE?");
    if (check) {
        window.location.assign("./index.html");
    }
}