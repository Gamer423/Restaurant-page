export function pageload() {

const header = document.createElement("div");
header.style.width = "100vw";
header.style.height = "10vh";
header.style.backgroundColor = "red";

const headertext = document.createTextNode("EPIC RESTAURANT");

header.appendChild(headertext);

const imgdiv = document.createElement("div");
const img = document.createElement("img");
img.src = "https://t.pimg.jp/061/630/271/1/61630271.jpg"
imgdiv.appendChild(img);

const contact = document.createElement("div");
const contantext = document.createTextNode("Contact us now and order!");
contact.appendChild(contantext);

document.getElementById("content").appendChild(header);
document.getElementById("content").appendChild(imgdiv);
document.getElementById("content").appendChild(contact);

}
