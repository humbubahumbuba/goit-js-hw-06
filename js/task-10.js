function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controlsInput: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  targetBox: document.querySelector("#boxes"),
};

refs.destroyBtn.addEventListener("click", destroyBoxes);
refs.createBtn.addEventListener("click", () => {
  refs.controlsInput.addEventListener("input", () => {
    return refs.controlsInput.value;
  });
  createBoxes(refs.controlsInput.value);
});

function createBoxes(amount) {
  const arrayNewBoxes = [];
  for (let i = 0, j = 30; i < amount; i += 1, j += 10) {
    const newBox = document.createElement("div");
    newBox.style.width = `${j}px`;
    newBox.style.height = `${j}px`;
    newBox.style.backgroundColor = getRandomHexColor();

    arrayNewBoxes.push(newBox);
  }
  refs.targetBox.append(...arrayNewBoxes);
}

function destroyBoxes() {
  refs.targetBox.innerHTML = "";
}
