const buttons = document.querySelectorAll(".readAll");

buttons.forEach(function (temp) {
  temp.addEventListener("click", (e) => {
    if (e.target.id == "read-first") {
      window.open(
        "https://jayeshhande.hashnode.dev/javascript-in-the-browser-dom-and-events-fundamentals#heading-event-handler-attributes",
        "_blank"
      );
    }
    if (e.target.id == "read-second") {
      window.open("https://jayeshhande.hashnode.dev/server-errors", "_blank");
    }
  });
});

// const button1 = document.querySelector("#read-first");

// button1.addEventListener("click", () => {

// });
