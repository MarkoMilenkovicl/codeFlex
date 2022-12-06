/* AOS
  ================================================== */
  AOS.init();

/* Hamburger Menu
  ================================================== */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

/* GSAP ANIMATIONS
  ================================================== */
  var fourthSectionCheck = document.querySelector(".fourth_section");
  
if(typeof(fourthSectionCheck) != 'undefined' && fourthSectionCheck != null){
    gsap.to('.fourth_section', {
        scrollTrigger: '.fourth_section',
        width: "99.1vw",
        duration: 2
});
}



var secoundSectionCheck = document.querySelector(".secound_section_left_side");
if(typeof(secoundSectionCheck) != 'undefined' && secoundSectionCheck != null){
gsap.from(".secound_section_left_side", {
    duration: 0.3,
    opacity: 0,
    delay: 0.5,
    stagger: 0.5
});
gsap.to(".secound_section_left_side", {
    scrollTrigger: {
        trigger: ".secound_section_left_side",
        pin: true,
        start: "-=150",
        duration: 5,
        end: "+=670",
        delay: 3
    }
});
}

var aboutBoxSectionCheck = document.querySelector(".about_page_box_section");
if(typeof(aboutBoxSectionCheck) != 'undefined' && aboutBoxSectionCheck != null){

gsap.to(".about_page_box_section", {
    scrollTrigger: ".about_page_box_section",
    width: "99.1vw",
    duration: 2
});
}

var technologyBoxSectionCheck = document.querySelector(".technology_box");
if(typeof(technologyBoxSectionCheck) != 'undefined' && technologyBoxSectionCheck != null){
    gsap.to(".technology_box", {
        scrollTrigger: ".technology_box",
        width: "99.1vw",
        duration: 2
    });

}


/* #Accordion
================================================== */
const accordions = document.querySelectorAll('.accordion');

if (accordions) {
  accordions.forEach((accordion) => {
    const collapsibles = accordion.querySelectorAll('.collapsible');

    accordion.addEventListener('click', (e) => {
      if (e.target.closest('.collapse-toggler')) {
        e.preventDefault();

        const collapsible = e.target.closest('.collapsible');
        const collapse = collapsible.querySelector('.collapse');

        if (!accordion.classList.contains('no-close')) {
          collapsibles.forEach((coll) => {
            if (coll.classList.contains('show') && coll != collapsible) {
              collCollapse = coll.querySelector('.collapse');

              coll.classList.remove('show');
              gsap.to(collCollapse, {
                height: '0'
              });
            }
          });
        }

        collapsible.classList.toggle('show');

        if (collapsible.classList.contains('show')) {
          gsap.to(collapse, {
            height: 'auto',
            duration: .4,
            ease: 'power1.inOut'
          });
        } else {
          gsap.to(collapse, {
            height: '0'
          });
        }
      }
    });
  })
}