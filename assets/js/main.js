let result = document.querySelector("#result");
let output1 = document.querySelector("#output1");
let output2 = document.querySelector("#output2");
let output3 = document.querySelector("#output3");

document.body.addEventListener("keydown", (parametr) => {
  let x = parametr.code;
  output3.innerHTML = x;
  result.innerHTML = x;
});

document.body.addEventListener("keydown", (parametr) => {
  let x = parametr.which;
  output2.innerHTML = x;
  result.innerHTML = x;
});

document.body.addEventListener("keydown", (parametr) => {
  let x = parametr.key;
  output1.innerHTML = x;
  result.innerHTML = x;
});
