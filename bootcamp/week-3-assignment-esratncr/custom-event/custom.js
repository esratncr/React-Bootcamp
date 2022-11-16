const counterCh = document.querySelector("#counter");

counterCh.addEventListener("counter-change", (e) => {
  e.target.innerHTML = e.detail.count;
});

function counterChange(type) {
  switch (type) {
    case "increment":
      counterCh.dispatchEvent(
        new CustomEvent(
          "counter-change",
          {
            detail: {
              count: Number(counterCh.innerHTML) + 1,
            },
          },
          false
        )
      );
      break;
    case "decrement":
      counterCh.dispatchEvent(
        new CustomEvent(
          "counter-change",
          {
            detail: {
              count: Number(counterCh.innerHTML) - 1,
            },
          },
          false
        )
      );
    default:
      break;
  }
}