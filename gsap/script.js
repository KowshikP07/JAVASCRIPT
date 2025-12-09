// gsap.to(".logo",{
//     duration:2,
//     scale:0.2,
//     delay:0.1,
//     opacity:0,
//     repeat:-1,
//     yolo:true
// })
// gsap.from("li",{
//     // y:-20,
//     duration:1,
//     // delay:0.5,
//     opacity:0,
//     scale:0,
//     stagger: 0.5
// })
// gsap.to(".box", {
//   opacity: 0,
//   duration: 3,   // very quick fade → blink
//   repeat: -1,
//   yoyo: true,
//   ease: "power1.in"
// });
// gsap.to(".box", {
//   opacity: 0,
//   duration: 0.5,     // how fast it turns OFF
//   repeat: -1,        // infinite loop
// //   yoyo: true,        // come back to opacity:1
//   repeatDelay: 2,    // wait 2 seconds before turning ON again
//   ease: "power1.inOut",
//   stagger: 1
// });
// 
// Make sure SplitText is included
// Animate h1 characters
let split = new SplitText(".page1 h1", { type: "chars" });

gsap.from(split.chars, {
  opacity: 0,
  duration: 1,
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



