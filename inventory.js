let toast = ["Whole Wheat", "White", "Banana", "Whole Grain", "MultiGrain", "Rye", "Glutten Free"];
let muffin = ["Chocolate", "Chocolate Chip", "Blueberry", "Banana"];
let pie = ["Apple", "Cherry", "Key Lime", "Pecan", "Pumpkin", "Blueberry"];
let cookie = ["Chocolate Chip", "Sugar", "Snickerdoodle", "Oatmeal Raisin", "Penut Butter"];

document.getElementById("toastMenu").innerHTML += ": There are currently " + toast.length + " variations of toast available";
document.getElementById("muffinMenu").innerHTML += ": There are currently " + muffin.length + " variations of muffins available";
document.getElementById("pieMenu").innerHTML += ": There are currently " + pie.length + " variations of pies available";
document.getElementById("cookieMenu").innerHTML += ": There are currently " + cookie.length + " variations of cookies available";

document.getElementById("toastVariation1").innerHTML = toast[0];
document.getElementById("toastVariation2").innerHTML = toast[1];
document.getElementById("toastVariation3").innerHTML = toast[2];
document.getElementById("toastVariation4").innerHTML = toast[3];
document.getElementById("toastVariation5").innerHTML = toast[4];
document.getElementById("toastVariation6").innerHTML = toast[5];
document.getElementById("toastVariation7").innerHTML = toast[6];

document.getElementById("muffinVariation1").innerHTML = muffin[0];
document.getElementById("muffinVariation2").innerHTML = muffin[1];
document.getElementById("muffinVariation3").innerHTML = muffin[2];
document.getElementById("muffinVariation4").innerHTML = muffin[3];

document.getElementById("pieVariation1").innerHTML = pie[0];
document.getElementById("pieVariation2").innerHTML = pie[1];
document.getElementById("pieVariation3").innerHTML = pie[2];
document.getElementById("pieVariation4").innerHTML = pie[3];
document.getElementById("pieVariation5").innerHTML = pie[4];
document.getElementById("pieVariation6").innerHTML = pie[5];

document.getElementById("cookieVariation1").innerHTML = cookie[0];
document.getElementById("cookieVariation2").innerHTML = cookie[1];
document.getElementById("cookieVariation3").innerHTML = cookie[2];
document.getElementById("cookieVariation4").innerHTML = cookie[3];
document.getElementById("cookieVariation5").innerHTML = cookie[4];