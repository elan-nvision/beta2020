particlesJS("particles-js", {
  particles: {
    number: {
      value: 85,
      density: { enable: true, value_area: 315.65905665290904 }
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: false, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});

// nav bar js

// THIS PROJECT IS PART OF A UDEMY TUTORIAL ON GREENSOCK JAVASCRIPT ANIMATIONS
// LEARN HOW TO ANIMATE WITH JAVASCRIPT BY ENROLLING IN THE COURSE: https://www.udemy.com/javascript-animations-using-greensock/
// USE DISCOUNT CODE 'CODEPEN' TO TAKE THE COURSE FOR JUST $9.99!

//NAV

$(".burgerIcon").hover(
  function() {
    TweenMax.to(".burgerLine:first-child", 0.2, { x: -10 });
    TweenMax.to(".burgerLine:last-child", 0.2, { x: 10 });
  },

  function() {
    TweenMax.to(".burgerLine:first-child", 0.2, { x: 0 });
    TweenMax.to(".burgerLine:last-child", 0.2, { x: 0 });
  }
);

var tlmenu = new TimelineMax({ paused: true });

tlmenu
  .to("nav", 0.3, { autoAlpha: 1 })
  .staggerFromTo(
    "nav li",
    0.5,
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1 },
    0.1
  );

$(".burgerIcon").click(function() {
  tlmenu.play(0);
});

$(".closeButton").click(function() {
  tlmenu.reverse(0);
});

$(".closemenu").click(function() {
  tlmenu.reverse(0);
  $(".firstpage").css("display", "none");

  if (flag == 1) {
    $(".homebutton").removeClass("in");
  }
  $(".homebutton").addClass("out");
});

// Letter Spacing

let letters = document.getElementsByClassName("title-letter");

setTimeout(() => {
  showSubTitle();

  for (let i = 0; i < letters.length; i++) {
    anime({
      targets: letters[i],
      easing: "easeInQuad",
      translateX: ["5px", "0"],
      delay: 90 * i
    });

    anime({
      targets: letters[i],
      easing: "easeInQuad",
      opacity: 1,
      delay: 80 * i,
      complete: function(anim) {
        if (i === letters.length - 1) {
          showSubTitle2();
        }
      }
    });
  }
}, 500);

function showSubTitle() {
  anime({
    targets: "#sub-title",
    easing: "easeInQuad",
    opacity: 1,
    duration: 300,
    delay: 1
  });
}

function showSubTitle2() {
  anime({
    targets: "#sub-title1",
    easing: "easeInQuad",
    opacity: 1,
    duration: 300,
    delay: 1
  });
}

var flag = 0;
var id;
var ids;
$(".pb").click(function() {
  $(".firstpage").css("display", "none");

  id = this.id;
  console.log("#" + id);
  $("." + id).addClass("disp");
  $("." + id).css("display", "block");

  if (flag == 1) {
    $(".homebutton").removeClass("in");
  }
  $(".homebutton").addClass("out");
});

$(".homebutton").click(function() {
  flag = 1;
  $(".firstpage").css("display", "block");
  $(".firstpage").addClass("disp");

  $(".homebutton").removeClass("out");
  $(".homebutton").addClass("in");

  $(".page2").removeClass("disp");
  $(".page2").css("display", "none");
});
$(".ttb").click(function() {
  alert("Hello");
});
$(".tb").click(function() {
  ids = this.id;
  $(".backbutton").addClass("bout");
  $(".backbutton").removeClass("binn");
  $(".backbutton").addClass(id + "backbutton");
  $(".page2").removeClass("disp");
  $(".page2").css("display", "none");

  $(".homebutton").removeClass("out");
  $(".homebutton").addClass("in");

  $(".burgerIcon").addClass("up");
  $(".burgerIcon").removeClass("down");

  $("#wrapper").css("display", "none");

  $("." + ids).css("display", "block");
});

$(".backbutton").click(function() {
  $(".backbutton").removeClass("bout");
  $(".backbutton").removeClass("csee");
  $("." + ids).css("display", "none");
  $("." + id).addClass("disp");
  $("." + id).css("display", "block");
  $("#wrapper").css("display", "block");
  $(".homebutton").removeClass("in");
  $(".homebutton").addClass("out");
  $(".burgerIcon").removeClass("up");
  $(".burgerIcon").addClass("down");
});

// month1 & month2
$(document).ready(function() {
  $("#ml1").click(function() {
    $("#ml2").slideToggle("slow");
  });
  $("#ml3").click(function() {
    $("#ml4").slideToggle("slow");
  });
});

//school
$(document).ready(function() {
  $("#c11").click(function() {
    $("#c12").slideToggle("slow");
  });
  $("#c13").click(function() {
    $("#c14").slideToggle("slow");
  });
});

$(document).ready(function() {
  $("#c21").click(function() {
    $("#c22").slideToggle("slow");
  });
  $("#c23").click(function() {
    $("#c24").slideToggle("slow");
  });
});

$(document).ready(function() {
  $("#c31").click(function() {
    $("#c32").slideToggle("slow");
  });
  $("#c33").click(function() {
    $("#c34").slideToggle("slow");
  });
});

$(document).ready(function() {
  $("#c41").click(function() {
    $("#c42").slideToggle("slow");
  });
  $("#c43").click(function() {
    $("#c44").slideToggle("slow");
  });
});

$(document).ready(function() {
  $("#c51").click(function() {
    $("#c52").slideToggle("slow");
  });
  $("#c53").click(function() {
    $("#c54").slideToggle("slow");
  });
});

$(document).ready(function() {
  $("#c61").click(function() {
    $("#c62").slideToggle("slow");
  });
  $("#c63").click(function() {
    $("#c64").slideToggle("slow");
  });
});

$(document).ready(function() {
  $("#c71").click(function() {
    $("#c72").slideToggle("slow");
  });
  $("#c73").click(function() {
    $("#c74").slideToggle("slow");
  });
});

$(document).ready(function() {
  $("#c81").click(function() {
    $("#c82").slideToggle("slow");
  });
  $("#c83").click(function() {
    $("#c84").slideToggle("slow");
  });
});

$(document).ready(function() {
  $("#c91").click(function() {
    $("#c92").slideToggle("slow");
  });
  $("#c93").click(function() {
    $("#c94").slideToggle("slow");
  });
});

$(document).ready(function() {
  $("#c101").click(function() {
    $("#c102").slideToggle("slow");
  });
  $("#c103").click(function() {
    $("#c104").slideToggle("slow");
  });
});

$(document).ready(function() {
  $("#c111").click(function() {
    $("#c112").slideToggle("slow");
  });
  $("#c113").click(function() {
    $("#c114").slideToggle("slow");
  });
});

$(document).ready(function() {
  $("#c121").click(function() {
    $("#c122").slideToggle("slow");
  });
  $("#c123").click(function() {
    $("#c124").slideToggle("slow");
  });
});
