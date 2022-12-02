const listItemsEl = document.querySelectorAll(".item");
const quantity = listItemsEl.length;
console.log(`Кількість категорій: ${quantity}`);

const allCategoriesArray = listItemsEl.forEach((el) => {
  const category = el.querySelector("h2").textContent;
  const element = el.querySelectorAll("li").length;

  console.log(`Категорія: ${category}`);
  console.log(`Елементів: ${element}`);
});
