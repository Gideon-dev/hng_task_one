const dayPar = document.getElementById("day");
const btns = document.querySelectorAll(".open-close");
const dropPanels= document.querySelectorAll(".goal-drop-item");

window.addEventListener("DOMContentLoaded", () => {
    dropPanels.forEach(item => item.classList.add('not-active'));
    
});
dropPanels.forEach(item => item.classList.add(".not-active"))
btns.forEach(btn => btn.addEventListener("click",()=>{
    const query = btn.getAttribute("data-id");
    const currentBtn = document.getElementById(`${query}`);
    dropPanels.forEach(item => {
        if(item.id === currentBtn.id){
            item.classList.toggle("not-active")
        }else{
            item.classList.add("not-active")
        }
    })
}));

const daysOfTheWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const now = new Date();
const dayUTC = now.getUTCDate();
const day = daysOfTheWeek[dayUTC];
dayPar.innerHTML = `on ${day}`;
console.log(day);
