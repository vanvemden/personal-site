window.addEventListener("load", (event) => {
  (function () {
    let activeBadgeColor = "#28a745";
    let inactiveBadgeColor = "#ffffff";

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

        // Set currently active project to inactive
        document.querySelectorAll(".skills .btn-success").forEach((e) => {
          // change button style to outline
          e.classList.remove("btn-success");
          e.classList.add("btn-outline-success");
          // hide project text on smaller screens
          e.parentElement.parentElement.children[1].classList.add("d-none");
        });

        // Set currently active badges to inactive
        document.querySelectorAll(".skills .badge").forEach((e) => {
          e.style.color = activeBadgeColor;
          e.style.backgroundColor = inactiveBadgeColor;
        });

        // Set selected project button to active
        document
          .querySelectorAll(`.skills .btn.proj-${project_num}`)
          .forEach((e) => {
            e.classList.add("btn-success");
            e.classList.remove("btn-outline-success");
            // Show project text on smaller screens
            e.parentElement.parentElement.children[1].classList.remove(
              "d-none"
            );
          });

        // Set active badges for selected project number
        document
          .querySelectorAll(`.skills .badge.proj-${project_num}`)
          .forEach((e) => {
            e.style.color = inactiveBadgeColor;
            e.style.backgroundColor = activeBadgeColor;
          });
      });
    });

    /**
     * By default, set project 1 button and skill badges to active
     */
    buttons[0].classList.add("btn-success");
    buttons[0].classList.remove("btn-outline-success");
    // Show project text on smaller screens
    buttons[0].parentElement.parentElement.children[1].classList.remove(
      "d-none"
    );
    // Set active badges for project 1
    document.querySelectorAll(".skills .badge.proj-1").forEach((e) => {
      e.style.color = inactiveBadgeColor;
      e.style.backgroundColor = activeBadgeColor;
    });
  })();
});
