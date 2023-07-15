const $ = document;
const body = $.body;
const range = $.querySelector(".range");

range.addEventListener('change',()=>{
  rangeValue = range.value;
  body.style = `backdrop-filter: brightness(${rangeValue}%);`;
})