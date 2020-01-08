window.onload = () => {
  const switchStylesButton = document.getElementById("switchStylesAction");
  const styleForm = document.getElementById("option-template");
  const defaults = document.getElementById("default");
  const alternate = document.getElementById("alternate");

  styleForm.addEventListener("submit", event => {
    event.preventDefault();
    const value = document.querySelector('input[name="switcher"]:checked').value;
    if (value.toLowerCase() === "default") {
      disableStylesheet(alternate);
      enableStylesheet(defaults);
    } else {
      disableStylesheet(defaults);
      enableStylesheet(alternate);
    }
  });
};

function enableStylesheet(node) {
  node.rel = "stylesheet";
}

function disableStylesheet(node) {
  node.rel = "alternate stylesheet";
}
