var myFullpage = new fullpage('#fullpage', {
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors: ['firstPage', 'secondPage'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['firstSlide', 'secondSlide'],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    sectionsColor: ['#3498db', '#1abc9c', '#27ae60', '#3d566e'],
    paddingTop: '3em',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: true,
    parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },
    cards: false,
    cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,

    //events
    onLeave: function(origin, destination, direction) {},
    afterLoad: function(origin, destination, direction) {},
    afterRender: function() {},
    afterResize: function(width, height) {},
    afterReBuild: function() {},
    afterResponsive: function(isResponsive) {},
    afterSlideLoad: function(section, origin, destination, direction) {},
    onSlideLeave: function(section, origin, destination, direction) {}
});

particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});

var t1 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
})

t1.add({
    targets: '.main-heading',
    opacity: 1,
    duration: 800,
    easing: 'easeInQuad',
    delay: 300
})

t1.add({
    targets: '.main-heading',
    translateY: -380,
    scale: 0.8,
    duration: 1000
})
t1.add({
    targets: 'iframe',
    opacity: 1,
    duration: 800,
    easing: 'easeInQuad',
    delay: 300
})
t1.add({
    targets: '.arrow',
    opacity: 1,
    duration: 800,
    easing: 'easeInQuad',
    delay: 300
})