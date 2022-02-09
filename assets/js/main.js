AOS.init({
  duration: 1500
})

// SVG file to SVG code convert JS Start
function img2svg() {
  jQuery(".in-svg").each(function (i, e) {
    var $img = jQuery(e)
    var imgID = $img.attr("id")
    var imgClass = $img.attr("class")
    var imgURL = $img.attr("src")
    jQuery.get(
      imgURL,
      function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find("svg")
        // Add replaced image's ID to the new SVG
        if (typeof imgID !== "undefined") {
          $svg = $svg.attr("id", imgID)
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== "undefined") {
          $svg = $svg.attr("class", " " + imgClass + " replaced-svg")
        }
        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr("xmlns:a")
        // Replace image with new SVG
        $img.replaceWith($svg)
      },
      "xml"
    )
  })
}
img2svg()
// SVG file to SVG code convert JS End

// Banner Parallax JS Start
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".rf__hero--block",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    scrub: true
  }
})

const turtleTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".rf__hero--block",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    scrub: true
  }
})

const sharkTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".rf__hero--block",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    scrub: true
  }
})

gsap.utils.toArray(".rf__hero__img").forEach((layer) => {
  const depth = layer.dataset.depth
  const movement = layer.offsetHeight * depth
  tl.to(layer, {y: movement, ease: "none"}, 0)
})

gsap.to(
  ".rf__hero--banner img",
  {
    duration: 1,
    y: 200,
    scrollTrigger: {
      trigger: ".rf__hero--block",
      start: "top top",
      end: "bottom top",
      scrub: 1,
      scrub: true
    }
  },
  0
)
// Banner Parallax JS End

// Banner Elements JS Start
gsap.to(
  ".rf__hero--elementOne",
  {
    duration: 2,
    y: 250,
    x: 50
  },
  0
)
turtleTl.to(".rf__hero--elementOne", {
  y: 50,
  x: 150,
  duration: 2
})

if ($(window).width() < 991) {
  gsap.to(
    ".rf__hero--elementOne",
    {
      duration: 2,
      y: 0,
      x: 50
    },
    0
  )
}

gsap.to(
  ".rf__hero--elementTwo",
  {
    duration: 2,
    y: 490,
    x: -330
  },
  0
)

sharkTl.to(".rf__hero--elementTwo", {
  y: 50,
  x: -100,
  duration: 2
})
// Banner Elements JS End

// Story Block Elements JS Start
gsap.to(
  ".rf__butterfly__group, .angel_fish_orange_grp, .CaribbeanReefShark",
  {
    x: 150,
    scrollTrigger: {
      trigger: ".rf__story--block",
      duration: 2,
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  },
  0
)

gsap.to(
  ".rf__ParrotFish__group .ParrotFish__odd",
  {
    x: 150,
    scrollTrigger: {
      trigger: ".rf__story--block",
      duration: 2,
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  },
  0
)
gsap.to(
  ".rf__ParrotFish__group .ParrotFish__even",
  {
    x: -250,
    scrollTrigger: {
      trigger: ".rf__story--block",
      duration: 2,
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  },
  0
)
// Story Block Elements JS End

// Revolutionary Features Elements JS Start
gsap.to(
  ".aqua__hammerhead",
  {
    x: 150,
    scrollTrigger: {
      trigger: ".rf__revolutionary_features--block",
      duration: 2,
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  },
  0
)
gsap.to(
  ".blue__hammerhead",
  {
    x: -150,
    scrollTrigger: {
      trigger: ".rf__revolutionary_features--block",
      duration: 2,
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  },
  0
)
// Revolutionary Features Elements JS End

// Rebuilding Coral Reefs Elements Start
gsap.to(
  ".reefs__Two_LionFish",
  {
    x: 350,
    scrollTrigger: {
      trigger: ".rf__revolutionary_features--block",
      duration: 2,
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  },
  0
)
if ($(window).width() < 767) {
  gsap.to(
    ".reefs__Two_LionFish",
    {
      x: 10,
      scrollTrigger: {
        trigger: ".rf__revolutionary_features--block",
        duration: 2,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    },
    0
  )
}

gsap.to(
  ".ParrotFish_left",
  {
    x: -250,
    scrollTrigger: {
      trigger: ".rf__revolutionary_features--block",
      duration: 2,
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  },
  0
)
gsap.to(
  ".game__hammerhead_blue-one",
  {
    x: 250,
    y: 60,
    scrollTrigger: {
      trigger: ".rf__coral_reefs--block",
      duration: 2,
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  },
  0
)
gsap.to(
  ".game__hammerhead_blue-two",
  {
    x: -250,
    y: 60,
    scrollTrigger: {
      trigger: ".rf__coral_reefs--block",
      duration: 2,
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  },
  0
)
// Rebuilding Coral Reefs Elements End

// Game Elements Start
gsap.to(
  ".group_of_fish_2",
  {
    x: 150,
    scrollTrigger: {
      trigger: ".rf__game__elements--block",
      duration: 2,
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  },
  0
)
// Game Elements End

// Roadmap Elements Start
gsap.to(
  ".shark_with_fish_under",
  {
    x: 250,
    scrollTrigger: {
      trigger: ".rf__roadmap--block",
      duration: 2,
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  },
  0
)
// Roadmap Elements End

// Partners Elements Start
gsap.to(
  ".story__trutle",
  {
    x: -150,
    scrollTrigger: {
      trigger: ".rf__partners--block",
      duration: 2,
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  },
  0
)
if ($(window).width() < 767) {
  gsap.to(
    ".reefs__Two_LionFish",
    {
      x: 10,
      scrollTrigger: {
        trigger: ".rf__team--block",
        duration: 2,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    },
    0
  )
}
// Partners Elements End

// Join The Reef Club Start
gsap.to(
  ".CaribbeanReefShark",
  {
    x: 150,
    scrollTrigger: {
      trigger: ".rf__join_club--block",
      duration: 2,
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  },
  0
)

gsap.to(
  ".Two_MaoriWrasse__fish",
  {
    x: 150,
    scrollTrigger: {
      trigger: ".rf__contact",
      duration: 2,
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  },
  0
)
gsap.to(
  ".Four_butterfly__fish",
  {
    x: -150,
    scrollTrigger: {
      trigger: ".rf__contact",
      duration: 2,
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  },
  0
)
//Join The Reef Club End

// Inverstor Elements Start
gsap.to(
  ".Caribbean__ReefShark",
  {
    x: 150,
    scrollTrigger: {
      trigger: ".rf__investors--block",
      duration: 2,
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  },
  0
)
// Inverstor Elements End

// Game Elements Slider JS Start
var swiper = new Swiper(".game__slider", {
  slidesPerView: 4,
  spaceBetween: 90,
  //autoHeight: true,
  //centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      centeredSlides: false
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 60
    },
    1400: {
      slidesPerView: 4.5
    }
  }
})
// Game Elements Slider JS End

// Menu Toggle JS
jQuery(document).ready(function () {
  jQuery(".toggle__menu").click(function () {
    jQuery(".header__menu").slideToggle()
    jQuery(".toggle__menu, .main__wrapper").toggleClass("open")
  })
})
// Menu Toggle JS

// Heder Fixed JS Start
$(window).scroll(function () {
  if ($(this).scrollTop() > 60) {
    $(".header").addClass("fixed")
  } else {
    $(".header").removeClass("fixed")
  }
})
// Heder Fixed JS End

/* Accordion jQuery
  ================================================== */
$(function () {
  $(".rf__accordion--title").click(function (j) {
    var dropDown = $(this)
      .closest(".rf__accordion--item")
      .find(".rf__accordion--panel")
    $(this)
      .closest(".rf__accordion")
      .find(".rf__accordion--panel")
      .not(dropDown)
      .slideUp()

    if ($(this).hasClass("active")) {
      $(this).removeClass("active")
    } else {
      $(this)
        .closest(".rf__accordion")
        .find(".rf__accordion--title.active")
        .removeClass("active")
      $(this).addClass("active")
    }
    dropDown.stop(false, true).slideToggle()
    j.preventDefault()
  })
})
/* Accordion jQuery
  ================================================== */
