const centimeter = document.querySelector("#cm"),
inch = document.querySelector("#in");

window.addEventListener("load", () => centimeter.focus());

centimeter.addEventListener("input", ()=>{
    inch.value = (centimeter.value * 0.3937).toFixed(4);
    if(!centimeter.value) inch.value = "";
});

inch.addEventListener("input", ()=>{
    centimeter.value = (inch.value * 2.54).toFixed(2);
    if(!inch.value) centimeter.value = "";
});

const po = document.querySelector("#po"),
ks = document.querySelector("#ks");

window.addEventListener("load", () => ps.focus());

po.addEventListener("input", ()=>{
    ks.value = (po.value * 38.46).toFixed(2);
    if(!po.value) ks.value = "";
});

ks.addEventListener("input", ()=>{
    po.value = (ks.value * 0.026).toFixed(2);
    if(!ks.value) po.value = "";
});