const color_picker_1 = document.querySelector("#color1");
const color_picker_2 = document.querySelector("#color2");
const color_picker_3 = document.querySelector("#color3");
const color_picker_4 = document.querySelector("#color4");
const color_picker_5 = document.querySelector("#color5");
const color_picker_6 = document.querySelector("#color6");
const color_picker_7 = document.querySelector("#color7");
const boxShadow = "0px 0px 1.5vw";

function updateColor(picker, selector) {
  document.querySelector(selector).style.borderColor = picker;
  document.querySelector(selector).style.boxShadow = `${boxShadow} ${picker}`;
}
// triggers 'onInput' and 'onChange' on all color pickers when they are ready
// jscolor.trigger("input change");

function reset() {
  document.querySelector("input[name='rainbow-color-number']").checked = true;
}

function setRainbow(numberOfColors) {
  let ul = document.querySelector("#rainbowBase");
  color_picker_6.style.display = "none";
  color_picker_7.style.display = "none";
  ul.innerHTML = "";
  for (let i = 1; i <= numberOfColors; i++) {
    let li = document.createElement("li");
    let color = "";
    switch (i) {
      case 1:
        li.setAttribute("id", "firstColor");
        color = color_picker_1.dataset.currentColor;
        li.style.borderColor = color;
        li.style.boxShadow = boxShadow + color;
        break;
      case 2:
        li.setAttribute("id", "secondColor");
        color = color_picker_2.dataset.currentColor;
        li.style.borderColor = color;
        li.style.boxShadow = boxShadow + color;
        break;
      case 3:
        li.setAttribute("id", "thirdColor");
        color = color_picker_3.dataset.currentColor;
        li.style.borderColor = color;
        li.style.boxShadow = boxShadow + color;
        break;
      case 4:
        li.setAttribute("id", "fourthColor");
        color = color_picker_4.dataset.currentColor;
        li.style.borderColor = color;
        li.style.boxShadow = boxShadow + color;
        break;
      case 5:
        li.setAttribute("id", "fifthColor");
        color = color_picker_5.dataset.currentColor;
        li.style.borderColor = color;
        li.style.boxShadow = boxShadow + color;
        break;
      case 6:
        li.setAttribute("id", "sixthColor");
        color = color_picker_6.dataset.currentColor;
        li.style.borderColor = color;
        li.style.boxShadow = boxShadow + color;
        color_picker_6.style.display = "block";
        break;
      case 7:
        li.setAttribute("id", "seventhColor");
        color = color_picker_7.dataset.currentColor;
        li.style.borderColor = color;
        li.style.boxShadow = boxShadow + color;
        color_picker_7.style.display = "block";
        break;
    }
    ul.append(li);
  }
}
document
  .querySelectorAll("input[name='rainbow-color-number']")
  .forEach((input) => {
    input.addEventListener("change", (e) => {
      setRainbow(e.target.value);
    });
  });

const buildForm = () => {
  const form = document.querySelector("#order-form");
  form.innerHTML = "";

  const h3 = document.createElement("h2");
  h3.innerText = "Información del pedido";
  form.append(h3);

  const numberOfColors = document.createElement("span");
  const numberOfRainbows = document.querySelector(
    "input[name='rainbow-color-number']:checked"
  );
  numberOfColors.setAttribute("id", "colorsCount");
  numberOfColors.setAttribute("name", "cantidad");
  numberOfColors.innerHTML =
    "Usted seleccionó <strong>" + numberOfRainbows.value + "</strong> colores";
  form.append(numberOfColors);

  let div = document.createElement("div");
  let color = "";
  div.setAttribute("class", "colors__wrapper");
  const color_selected_1 = document.createElement("input");
  color_selected_1.setAttribute("type", "text");
  color_selected_1.setAttribute("class", "color-picker-wrapper");
  const color_picker_1 = document.querySelector("#color1");
  color = color_picker_1.dataset.currentColor;
  color_selected_1.style.backgroundColor = color;
  color_selected_1.setAttribute("name", `color_1:${color}`);
  div.append(color_selected_1);
  const color_selected_2 = document.createElement("input");
  color_selected_2.setAttribute("type", "text");
  color_selected_2.setAttribute("class", "color-picker-wrapper");
  color_selected_2.setAttribute("name", "color_2");
  const color_picker_2 = document.querySelector("#color2");
  color = color_picker_2.dataset.currentColor;
  color_selected_2.style.backgroundColor = color;
  color_selected_2.setAttribute("name", `color_2:${color}`);
  div.append(color_selected_2);
  const color_selected_3 = document.createElement("input");
  color_selected_3.setAttribute("type", "text");
  color_selected_3.setAttribute("class", "color-picker-wrapper");
  color_selected_3.setAttribute("name", "color_3");
  const color_picker_3 = document.querySelector("#color3");
  color = color_picker_3.dataset.currentColor;
  color_selected_3.style.backgroundColor = color;
  color_selected_3.setAttribute("name", `color_3:${color}`);
  div.append(color_selected_3);
  const color_selected_4 = document.createElement("input");
  color_selected_4.setAttribute("type", "text");
  color_selected_4.setAttribute("class", "color-picker-wrapper");
  color_selected_4.setAttribute("name", "color_4");
  const color_picker_4 = document.querySelector("#color4");
  color = color_picker_4.dataset.currentColor;
  color_selected_4.style.backgroundColor = color;
  color_selected_4.setAttribute("name", `color_4:${color}`);
  div.append(color_selected_4);
  const color_selected_5 = document.createElement("input");
  color_selected_5.setAttribute("type", "text");
  color_selected_5.setAttribute("class", "color-picker-wrapper");
  color_selected_5.setAttribute("name", "color_5");
  const color_picker_5 = document.querySelector("#color5");
  color = color_picker_5.dataset.currentColor;
  color_selected_5.style.backgroundColor = color;
  color_selected_5.setAttribute("name", `color_5:${color}`);
  div.append(color_selected_5);
  if (numberOfRainbows.value >= 6) {
    const color_selected_6 = document.createElement("input");
    color_selected_6.setAttribute("type", "text");
    color_selected_6.setAttribute("class", "color-picker-wrapper");
    color_selected_6.setAttribute("name", "color_6");
    const color_picker_6 = document.querySelector("#color6");
    color = color_picker_6.dataset.currentColor;
    color_selected_6.style.backgroundColor = color;
    color_selected_6.setAttribute("name", `color_6:${color}`);
    div.append(color_selected_6);
    if (numberOfRainbows.value == 7) {
      const color_selected_7 = document.createElement("input");
      color_selected_7.setAttribute("type", "text");
      color_selected_7.setAttribute("class", "color-picker-wrapper");
      color_selected_7.setAttribute("name", "color_7");
      const color_picker_7 = document.querySelector("#color7");
      color = color_picker_7.dataset.currentColor;
      color_selected_7.style.backgroundColor = color;
      color_selected_7.setAttribute("name", `color_7:${color}`);
      div.append(color_selected_7);
    }
  }
  form.append(div);
  //FORM ORDER INI

  //NOMBRE ARCOIRIS
  let label = document.createElement("span");
  label.setAttribute("for", "rainbowName");
  label.innerText = "Nombre en el arcoiris";
  form.append(label);
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "rainbowName");
  input.setAttribute("name", "nombre");
  input.setAttribute("placeholder", "ingrese nombre para el arcoiris");
  input.required = true;
  form.append(input);
  //NOMBRE CONTACTO
  label = document.createElement("span");
  label.setAttribute("for", "contactName");
  label.innerText = "Nombre contacto";
  form.append(label);
  input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "contactName");
  input.setAttribute("name", "contacto");
  input.setAttribute("placeholder", "ingrese su nombre");
  input.required = true;
  form.append(input);
  //CELULAR
  label = document.createElement("span");
  label.setAttribute("for", "contactPhone");
  label.innerText = "Celular contacto";
  form.append(label);
  input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("id", "contactPhone");
  input.setAttribute("name", "celular");
  input.setAttribute("placeholder", "ingrese su celular");
  input.required = true;
  form.append(input);
  //EMAIL
  label = document.createElement("span");
  label.setAttribute("for", "contactEmail");
  label.innerText = "Correo contacto";
  form.append(label);
  input = document.createElement("input");
  input.setAttribute("type", "email");
  input.setAttribute("id", "contactEmail");
  input.setAttribute("name", "email");
  input.setAttribute("placeholder", "ingrese su correo");
  input.required = true;
  form.append(input);

  //FORM ORDER FIN

  label = document.createElement("span");
  form.append(label);
  p = document.createElement("p");
  p.setAttribute("name", "precio");
  p.setAttribute("id", "price");
  let price = calcRainbowPrice(numberOfRainbows.value);
  p.innerText = `$ ${price}`;
  form.append(p);

  const button = document.createElement("button");
  button.setAttribute("id", "modal-form-button");
  button.setAttribute("class", "btn");
  button.innerText = "Comprar";
  form.append(button);

  p = document.createElement("p");
  p.setAttribute("id", "order-form-status");
  form.append(p);
};

const calcRainbowPrice = (rainbowColors) => {
  const unitPrice = 950;
  if (rainbowColors == 6) return unitPrice + 200;
  if (rainbowColors == 7) return unitPrice + 500;
  return unitPrice;
};

let orderForm = document.getElementById("order-form");
async function handleOrderSubmit(event) {
  event.preventDefault();
  let status = document.getElementById("order-form-status");
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: orderForm.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Pedido confirmado!";
      orderForm.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! Encontramos un problema al enviar tu pedido.";
    });
}
orderForm.addEventListener("submit", handleOrderSubmit);

let modal = document.getElementById("Modal");
// Get the button that opens the modal
let btn = document.getElementById("order");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
  buildForm();
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
