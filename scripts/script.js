gsap.registerPlugin(MotionPathPlugin);
let point = {
    x: 0,
    y: 0
}
let lightRayA = document.querySelector('.light-path-A');
let lightRayB = document.querySelector('.light-path-B');
let diameter = document.querySelector('.diameter');
let masterTl = gsap.timeline({
        defaults: {
            duration: 5,
            ease: 'none',
            repeat: -1
        }
});
masterTl.add('start')

let twinkleTimeline = gsap.timeline({
    defaults: {
        transformOrigin: '50% 50%'
    }
});
twinkleTimeline.to('.small-star', {
    duration: 0.5,
    opacity: 0.5,
    scale: 0.6,
    ease: "circ.inOut",
    stagger: {
        each: 0.3,
        repeat: -1,
        yoyo: true
    }
}, 'start');
twinkleTimeline.to('.small-star', {
    duration: 5,
    rotate: 360,
    ease: 'none',
    repeat: -1
}, 'start');
masterTl.add(twinkleTimeline, 'start');

gsap.set('.point-A, .point-B, .blue-star', { transformOrigin: '50% 50%' });
gsap.set('.point-A, .point-B', { xPercent: -30, yPercent: -70 });

let pointATimeline = gsap.timeline({
        defaults: {
            motionPath: {
                path: '.bottom-ring',
                start: -0.22,
                end: 0.78
            },
            duration: 5,
            ease: 'none',
            repeat: -1
        }
});
pointATimeline.to([point], {
    onUpdate: () => {
        lightRayA.setAttribute('d', `M117.5,0.5 L${point.x - 8},${point.y + 452}`);
        diameter.setAttribute('d', `${diameter.getAttribute('d').split(' ')[0]} L${point.x},${point.y}`);
    }
}, 'start');
pointATimeline.to('.point-A', { }, 'start');
masterTl.add(pointATimeline, 'start');

let pointBTimeline = gsap.timeline({
    defaults: {
            motionPath: {
                path: '.bottom-ring',
                start: 0.295,
                end: 1.295
            },
            duration: 5,
            ease: 'none',
            repeat: -1
        }
});
pointBTimeline.to([point], {
    onUpdate: () => {
        lightRayB.setAttribute('d', `M43.5,9.5 L${point.x - 8},${point.y + 452}`);
        diameter.setAttribute('d', `M${point.x},${point.y} ${diameter.getAttribute('d').split(' ')[1]}`);
    }
}, 'start');
pointBTimeline.to('.point-B', { }, 'start');
masterTl.add(pointBTimeline, 'start');

masterTl.to('.blue-star', {
    rotate: "-360"
}, 'start');