const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in')
var x = document.getElementById("myTopnav");
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -60% 0px"

};
const appearOnScroll = new IntersectionObserver
(function(
    entries,
    appearOnScroll
    ) {
        entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }  else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }   
        });
    },
    appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });

  function myFunction() {
    if (x.className === ".navmenu") {
      x.className += " responsive";
    } else {
      x.className = ".navmenu";
    }
  }