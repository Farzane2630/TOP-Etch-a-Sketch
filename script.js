const container = document.querySelector(".container");
container.classList.add("container");

const userInsert = Number(prompt("Insert preferred squares number:"));

if (userInsert <= 50) {
  const squaresCount = Math.pow(userInsert, 2);

  Array.from(Array(squaresCount)).map((elem) => {
    const divElement = document.createElement("div");
    divElement.classList.add("div-child");

    /* 
    below functions could be handeled by css
    but this is a DOM manipulation exercise 
    so I used MouseEvent
    */
    divElement.addEventListener("mouseover", () => {
      divElement.classList.add("hovered");
    });
    divElement.addEventListener("mouseout", () => {
      divElement.classList.remove("hovered");
    });

    container.appendChild(divElement);
  });
} else {
  alert("please enter a number between 0 and 50");
}
