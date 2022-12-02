// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
//     проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputValidationEl = document.querySelector("#validation-input");

const checkInputLength = () => {
  if (
    inputValidationEl.value.length === Number(inputValidationEl.dataset.length)
  ) {
    inputValidationEl.classList.remove(`invalid`);
    inputValidationEl.classList.add(`valid`);
    return;
  } else {
    inputValidationEl.classList.remove(`valid`);
    inputValidationEl.classList.add(`invalid`);
  }
};

inputValidationEl.addEventListener("blur", checkInputLength);
