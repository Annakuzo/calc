const output = document.querySelector("output");

const div = document.createElement("div");
div.classList.add("keyboard");
document.querySelector(".Calculator").appendChild(div);

"C CE % / 7 8 9 * 4 5 6 - 1 2 3 + 0 ( ) =".split(" ").map((symbol) => {
  div.insertAdjacentHTML(
    "beforeend",
    `<button value="${symbol}">${symbol}</button>`
  );
});//разделяем массив и создаем кнопки

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    calc(this.value);
  });
});//добавляем созданным кнопкам обработчик события клик

document.addEventListener("keydown", (event) => {
  if (event.key.match(/[0-9%\/*\-+\(\)=]|Backspace|Enter/)) calc(event.key);
});//ввод символов с помощью клавиатуры

function calc(value) {
  if (value.match(/=|Enter/)) {
    try {
      output.textContent = Math.trunc(math.evaluate(output.textContent));
    } catch {
      let oldValue = output.textContent;
      let newValue = "Недопустимое значение";
      output.textContent = newValue;
      setTimeout(() => {
        output.textContent = oldValue;
      }, 1500);
    }
  } else if (value == "C") {
    output.textContent = "";
  } else if (value.match(/CE|Backspace/)) {
    output.tectContent = output.textContent.substring(
      0,
      output.textContent.length - 1
    );
  } else {
    output.textContent += value;
  }
}
