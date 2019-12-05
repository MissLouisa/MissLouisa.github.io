window.onload = () => {
  const switchStylesButton = document.getElementById("switchStylesAction");
  const styleForm = document.getElementById("change-style");
  const defaults = document.getElementById("default");
  const alternate = document.getElementById("alternate");
  const regularButtons = document.getElementById("buttons1");
  const switchButtons = document.getElementById("buttons2");

  styleForm.addEventListener("submit", event => {
    event.preventDefault();
    const value = document.querySelector('input[name="switcher"]:checked')
      .value;
    if (value.toLowerCase() === "alternate") {
      disableStylesheet(defaults);
      enableStylesheet(alternate);
      disableStylesheet(regularButtons);
      enableStylesheet(switchButtons);
    } else {
      disableStylesheet(alternate);
      enableStylesheet(defaults);
      disableStylesheet(switchButtons);
      enableStylesheet(regularButtons);
    }
  });
};

function enableStylesheet(node) {
  node.rel = "stylesheet";
}

function disableStylesheet(node) {
  node.rel = "alternate stylesheet";
}
