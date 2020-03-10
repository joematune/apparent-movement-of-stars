gsap.registerPlugin(MotionPathPlugin);

let point = {
    x: 0,
    y: 0
}

let lightRayA = document.querySelector('.light-path-A');
let lightRayB = document.querySelector('.light-path-B');

gsap.to(point, { 
    duration: 5,
    motionPath: {
        path: '.bottom-ring',
        start: -0.22,
        end: 0.78
    },
    repeat: -1,
    ease: 'none',
    onUpdate: function() {
        lightRayA.setAttribute('d', `M117.5,0.5 L${point.x - 8},${point.y + 452}`);
        // console.log(point);
    }
});

gsap.to(point, { 
    duration: 5,
    motionPath: {
        path: '.bottom-ring',
        start: 0.295,
        end: 1.295
    },
    repeat: -1,
    ease: 'none',
    onUpdate: function() {
        lightRayB.setAttribute('d', `M43.5,9.5 L${point.x - 8},${point.y + 452}`);
        // console.log(point);
    }
});

gsap.set('.point-A', {xPercent: -30, yPercent: -70, transformOrigin: '50% 50%'});

gsap.to('.point-A', {
    duration: 5,
    motionPath: {
        path: '.bottom-ring',
        start: -0.22,
        end: 0.78
    },
    repeat: -1,
    ease: 'none'
});

gsap.set('.point-B', {xPercent: -30, yPercent: -70, transformOrigin: '50% 50%'});

gsap.to('.point-B', {
    duration: 5,
    motionPath: {
        path: '.bottom-ring',
        start: 0.295,
        end: 1.295
    },
    repeat: -1,
    ease: 'none'
});

gsap.set('.blue-star', {transformOrigin: '50% 50%'});

gsap.to('.blue-star', {
    duration: 3,
    rotate: "-360",
    ease: 'none',
    repeat: -1
})