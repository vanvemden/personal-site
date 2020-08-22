window.addEventListener("load", (event) => {
  (function () {
    let activeBadgeColor = "#008000";
    let inactiveBadgeColor = "#6c757d";

    /**
     * Event listeners for parallax icon to show/hide overlay
     */
    let icons = document.querySelectorAll(".overlay .toggle");
    icons.forEach((icon) => {
      icon.addEventListener("click", function (event) {
        event.target.parentElement.parentElement.classList.toggle("overlay");
      });
    });

    /**
     * Event listeners for project buttons to highligh skill badges
     */
    let buttons = document.querySelectorAll(".skills .btn");
    buttons.forEach((button) => {
      button.addEventListener("click", function (event) {
        let project_num = event.target.dataset.project;

        // Set currently active project button to inactive
        document.querySelectorAll(".skills .btn-success").forEach((e) => {
          e.classList.remove("btn-success");
          e.classList.add("btn-outline-success");
        });

        // Set currently active badges to inactive
        document.querySelectorAll(".skills .badge").forEach((e) => {
          e.style.backgroundColor = inactiveBadgeColor;
        });

        // Set selected project button to active
        document
          .querySelectorAll(`.skills .btn.proj-${project_num}`)
          .forEach((e) => {
            e.classList.add("btn-success");
            e.classList.remove("btn-outline-success");
          });

        // Set active badges for selected project number
        document
          .querySelectorAll(`.skills .badge.proj-${project_num}`)
          .forEach((e) => {
            e.style.backgroundColor = activeBadgeColor;
          });
      });
    });

    /**
     * By default, set project 1 button and skill badges to active
     */
    buttons[0].classList.toggle("btn-success");
    buttons[0].classList.toggle("btn-outline-success");
    document.querySelectorAll(".skills .badge.proj-1").forEach((e) => {
      e.style.backgroundColor = activeBadgeColor;
    });
  })();
});
