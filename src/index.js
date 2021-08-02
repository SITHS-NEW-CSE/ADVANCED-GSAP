import { gsap } from "gsap";

//this is an example of a default timeline, the timeline is declared as being a timeline through gsap.timeline() and then it runs by the default condition of having every element play once the previous one ended.

let tl1 = gsap.timeline();

tl1.to(".box1", { rotation: 225, x: 900, y: 200, duration: 1 });
tl1.to(".box2", { rotation: 225, x: 900, y: 200, duration: 1 });
tl1.to(".box3", { rotation: 225, x: 900, y: 200, duration: 1 });

// this example will show that the timing of elements can be manually set to play in different ways.

let tl2 = gsap.timeline();

tl2.to(".box4", { rotation: 225, x: 900, y: 200, duration: 1 }, 6);
tl2.to(".box5", { rotation: 225, x: 900, y: 200, duration: 1 }, "-=0.75");
tl2.to(".box6", { rotation: 225, x: 900, y: 200, duration: 1 }, "+=0.5");

// by adding values to the method, you can set the time which an animation will play. using a set value such as 6 will have the animation play after six seconds, using "-=0.75" will cause the next animation to run 0.75 seconds before the previous animation ends while using "+=0.5" will cause the animation to run 0.5 seconds after the previous animation ends. MATH FUNCTIONS WILL ONLY WORK WITHIN THE SAME TIMELINE.

// you can also set defaults to your timelines, as well as have them run at the same time as other timelines easily.

let tl3 = gsap.timeline({ repeat: 1, repeatDelay: 2 });

tl3.to(".box7", { rotation: 225, x: 900, y: 200, duration: 1 });
tl3.to(".box8", { rotation: 225, x: 900, y: 200, duration: 2 });
tl3.to(".box9", { rotation: 225, x: 900, y: 200, duration: 1 });
