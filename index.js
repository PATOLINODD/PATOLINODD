gsap.registerPlugin(MotionPathHelper,MotionPathPlugin,ScrollTrigger,ScrollSmoother,ScrollToPlugin)

const smoother = ScrollSmoother.create({
    content: '#smooth-content',
    smooth: 1.5,
    smoothTouch: 0.1,
    effects: true
})

const list = document.querySelectorAll('.section');

list.forEach(li => {
    li.addEventListener('click', (e) => {
        const id = e.target.innerText;
        gsap.to(smoother, {
            scrollTop: smoother.offset(`#${id}`, 'top center'),
            duration: 1,
            ease: 'power4'
        });
    })
})

smoother.effects('.back', {speed: 0.5})
