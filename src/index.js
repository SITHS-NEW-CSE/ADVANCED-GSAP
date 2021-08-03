import { gsap } from "gsap";

// registers a new reuseable gsap effect
gsap.registerEffect({
  name: "fade",
  effect: (targets, config) => {
    return gsap.to(targets, { duration: config.duration, opacity: 0 });
  },
  defaults: { duration: 2 }, // defaults can be used as in "config" objects for reuseability
  extendTimeline: true, //extendTimeline allows you to call an effect directly on a timeline
});

gsap.effects.fade(".box"); //when calling an effect you can call
