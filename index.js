gsap.registerPlugin(
  DrawSVGPlugin,
  MotionPathHelper,
  MotionPathPlugin,
  MorphSVGPlugin,
  ScrollTrigger,
  ScrollSmoother,
  ScrollToPlugin
);

const smoother = ScrollSmoother.create({
  content: "#smooth-content",
  smooth: 1.5,
  smoothTouch: 0.1,
  effects: true,
});

const list = document.querySelectorAll(".section");

list.forEach((li) => {
  li.addEventListener("click", (e) => {
    const id = e.target.innerText;
    gsap.to(smoother, {
      scrollTop: smoother.offset(`#${id}`, "top center"),
      duration: 1,
      ease: "power4",
    });
  });
});

smoother.effects(".back", { speed: 0.5 });


const tl = gsap.timeline();
const logo = document.querySelector(".logo");
const scales = {
  getScale: (vw) => {
    if (vw <= 480) return 0.9; // phones
    if (vw <= 768) return 1.2; // tablets
    return vw <= 1200 ? 3 : 5;
  },
};
const scale = scales.getScale(window.innerWidth);
const widthMid = window.innerWidth / 2 - logo.offsetWidth;
const heightMid = window.innerHeight / 2 - logo.offsetHeight;
tl.clear();
tl.from(".draw-me", { duration: 5, drawSVG: -1 });
gsap.set("#logo", { clearProps: "all" });
gsap.from("#logo", {
  x: widthMid,
  y: heightMid,
  scale: 5,
  duration: 2,
  delay: 0.3,
  transformOrigin: "center center",
  ease: "power2.out",
});

const burger = document.querySelector(".burger");
const sidebar = document.querySelector(".sidebar");
const close = document.querySelector("#close");
const content = document.getElementById("smooth-content");

burger.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.classList.toggle("active");
});

close.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.classList.remove("active");
});
if (sidebar.classList.contains("active")) {
  content.addEventListener("click", (e) => {
    e.preventDefault();
    sidebar.classList.remove("active");
  });
}
