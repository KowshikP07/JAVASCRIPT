let minislide = document.querySelectorAll(".minislide")
let topping=document.querySelectorAll(".slide")
let prevbtn = document.querySelector(".prevbtn")
let nextbtn = document.querySelector(".nextbtn")
prevbtn.addEventListener("click", prevfunc)
nextbtn.addEventListener("click", nextfunc)
let index=0;
let len=minislide.length;
function showslide(val,direction){
    const cur=minislide[index];
    const next=minislide[val];
    const toppingcur=topping[index];
    const toppingnext=topping[val];
    minislide.forEach((s)=>s.className="minislide")
    topping.forEach((s)=>s.className="slide")
        if (direction === "left") {
            cur.classList.add("exit-right");
            next.classList.add("entry-left");
            toppingcur.classList.add("exit-right");
            toppingnext.classList.add("entry-left");
        } else {
            cur.classList.add("exit-left");
            next.classList.add("entry-right");
            toppingcur.classList.add("exit-left");
            toppingnext.classList.add("entry-right");
        }
        next.classList.add("active");
        toppingnext.classList.add("active");
        index = val;
}
function prevfunc(){
    let val=(index-1+len)%len
    showslide(val,"left")
}
function nextfunc(){
    let val=(index+1)%len
    showslide(val,"right");
}