// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputFontsizeControlEl = document.querySelector("#font-size-control");
const textSpanEl = document.querySelector("#text");

textSpanEl.style.fontSize = inputFontsizeControlEl.value + "px";

const textSpanResizing = () => {
  textSpanEl.style.fontSize = `${inputFontsizeControlEl.value}px`;
};
inputFontsizeControlEl.addEventListener("input", textSpanResizing);
