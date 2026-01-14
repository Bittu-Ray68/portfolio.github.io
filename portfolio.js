const spanEl = document.querySelector(".span-el");
const position_coll = ["Frontend Developer","FullStack Developer","Backend Developer","UI/UX Designer"];
let POS_Index = 0;
let POS_Char_Index = 0;

function textChan() {
    POS_Char_Index++;
    spanEl.innerHTML= `${position_coll[POS_Index].slice(0,POS_Char_Index)}`;
    if(POS_Char_Index === position_coll[POS_Index].length){
        POS_Index++;
        POS_Char_Index = 0;
    }
    if(POS_Index === position_coll.length){
        POS_Index = 0;
    }
    setTimeout(textChan,400);
}
textChan();

// click menu 

let hamburger = document.querySelector(".click-bar");
let menu = document.querySelector(".navigation-menu");
let closeBtn = document.querySelector(".navigation-menu span");

hamburger.addEventListener("click", () => {
    if(menu.style.display === "none"){
        menu.style.display = "grid";
    }
    else {
        menu.style.display = "none";
    }
});

closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
})
