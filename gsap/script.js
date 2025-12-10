let split = new SplitText(".page1 h1", { type: "chars" });

gsap.from(split.chars, {
  opacity: 0,
  duration: 3,
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".page1",
    start: "top 0%",      // when page2 reaches top
    end: "bottom top",     // until page2 scrolls out
    scrub: true,
    markers: true,
    pin:true
  }
});

// Animate box rotation and pin page2
gsap.to(".page2 .box", {
  rotate: 360,
  scrollTrigger: {
    trigger: ".page2",
    start: "top top",
    end: "+=100%",   // pin for exactly 1 viewport height
    pin: true,
    scrub: true,
    markers: true
  }
});

gsap.to(".page3 h3",{
  transform:"translate(-150%)",
  scrollTrigger:{
    trigger:".page3",
    scroller:"body",
    start:"top 0%",
    end:"top -100%",
    scrub:10,
    pin:true
  }
})
let initial="M 10 150 Q 400 150 790 150"
let final="M 10 150 Q 400 150 790 150"
let line=document.querySelector("#line")
line.addEventListener("mousemove",function(delts){
  console.log("mouse hover");
  initial=`M 10 150 Q 400 ${delts.offsetY} 790 150`
  gsap.to("svg path",{
    attr:{d:initial},
    duration:0.5
  })
})
line.addEventListener("mouseleave",function(){

  gsap.to("svg path",{
    attr:{d:final},
    duration:2.5,
    ease: "elastic.out(1.5,0.3)"
  })
})