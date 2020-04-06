window.addEventListener('load', (event) => {

   (function () {
       // toggle no or show text icons
       let icons = document.querySelectorAll(".overlay .glyphicon");
        for (let i = 0; i < icons.length; i++) {
            icons[i].addEventListener("click", function(event) {
                event.target.parentElement.parentElement.classList.toggle("overlay");
            })
        }

   })()

});