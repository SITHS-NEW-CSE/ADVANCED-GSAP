import { gsap } from "gsap";

gsap.to(".box", { rotation: 225, x: 900, y: 350, duration: 1 });

//gsap is animations done through js, most of which done through tweening (short for inbetweening), which generates animations based on the beginning and end of two set frames. using a function such as gsap.to to set the endpoint of an element, tweening will create animation between the initial position and the final position (set in the the gsap.to function.)
