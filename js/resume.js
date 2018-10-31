(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  var anchors = [
    {
      counter: 0,
      hash: "#education",
      contentHash: "#educationTitle",
      text: "Education"
    },
    {
      counter: 0,
      hash: "#skills",
      contentHash: "#skillsTitle",
      text: "Skills"
    },
    {
      counter: 0,
      hash: "#projects",
      contentHash: "#projectsTitle",
      text: "Projects"
    },
    {
      counter: 0,
      hash: "#learning",
      contentHash: "#learningTitle",
      text: "Currently Learning"
    },
    {
      counter: 0,
      hash: "#contact",
      contentHash: "#contactTitle",
      text: "Get in touch"
    }
  ];


  $(window).on("scroll", function () {
    var scrollPosition = scrollY || pageYOffset;

    for (var index = 0; index < anchors.length; index++) {
      var anchor = anchors[index];
      if (scrollPosition > $(anchor.hash).position().top - $(window).height()) {
        if (anchor.counter === 0) {
          var data = {
            theLetters: "-+*/|}{[]~\\\":,?/.><=+-_)(*&^%$#@!)}",
            ctnt: anchor.text,
            speed: 50, // ms per frame
            increment: 4, // frames per step
            clen: anchor.text.length,
            si: 0,
            stri: 0,
            block: "",
            fixed: "",
            anchorData: anchor
          };

          //Call self x times, whole function wrapped in setTimeout
          (function rustle(i) {
            setTimeout(function () {
              if (--i) { rustle(i); }
              data = nextFrame(i, data);
              data.si = data.si + 1;
            }, data.speed);
          })(data.clen * data.increment + 1);

          anchor.counter = 1;
        }
      } else {
        anchor.counter = 0;
      }
    }


  });

  function nextFrame(pos, currentData) {
    for (var i = 0; i < currentData.clen - currentData.stri; i++) {
      //Random number
      var num = Math.floor(currentData.theLetters.length * Math.random());
      //Get random letter
      var letter = currentData.theLetters.charAt(num);
      currentData.block = currentData.block + letter;
    }
    if (currentData.si == (currentData.increment - 1)) {
      currentData.stri++;
    }
    if (currentData.si == currentData.increment) {
      // Add a letter;
      // every speed*10 ms
      currentData.fixed = currentData.fixed + currentData.anchorData.text.charAt(currentData.stri - 1);
      currentData.si = 0;
    }
    $(currentData.anchorData.contentHash).html(currentData.fixed + currentData.block);
    currentData.block = "";
    return currentData;
  }

})(jQuery); // End of use strict
