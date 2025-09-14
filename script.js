// AOS

AOS.init();


const names = ["SORO" ,"ସୋର","सोरो"];


    let index = 0;
    const namebox = document.getElementById("nameBox");
   
    
    

function changeText() {
      gsap.to([namebox], {
        opacity: 0,
        y: 10,
        duration: 0.3,
        ease: "power2.inOut",
        stagger:0.1,
        onComplete: () => {
          
          index = (index + 1) % names.length;
          namebox.textContent = names[index];
          

          
          gsap.fromTo([namebox],
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.3, ease: "power2.inOut",stagger:0.1 }
          );
        }
      });
    }

        function loop() {
      changeText();
      gsap.delayedCall(5, loop); 
    }

    
    gsap.delayedCall(5, loop);


    const menuBtn = document.getElementById("menu-btn");
      const menuIcon = document.getElementById("menu-icon");
      const closeIcon = document.getElementById("close-icon");
      const mobileMenu = document.getElementById("mobile-menu");

      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("translate-x-full");
        menuIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");
      });



      var tl = gsap.timeline();

tl.from("#a", {
  y: 50,
  opacity:0,
  duration:0.3,
});
tl.from("#b", {
  y: 50,
  opacity:0,
  duration:0.3,
});
tl.from("#c", {
  y: 30,
  opacity:0,
  duration:0.3,
});
tl.from("#d", {
  y: 30,
  opacity:0,
  duration:0.3,
});
tl.from("#e", {
  y: 30,
  opacity:0,
  duration:0.3,
});
tl.from("#f", {
  y: 30,
  opacity:0,
  duration:0.3,
});




