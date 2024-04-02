var tl = gsap.timeline()

tl.from("#img1,#nav h3, #nav h4,#nav button",{
    y: -100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2
})

// tl.from("#left-img",{
//     x:-200,
//     duration:1,
//     opacity:0
// })

tl.from("#main h1",{
    duration:1,
    y:50,
    opacity:0,
    // stagger:0.3
})

tl.from("#main>img", {
    duration:0.5,
    scale:0,
    opacity:0,
    stagger: 0.2
})

tl.from("h5",{
    scale:0,
    opacity:0
}
)

tl.to("h5",{
    y:20,
    duration:0.7,
    repeat:-1,
    yoyo:true
})