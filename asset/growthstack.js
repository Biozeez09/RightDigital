// let surname = "Azeez";
// let name = "Ibrahim";

// console.log(`My surname is ${surname} while my main name is ${name}`);


let image = document.querySelector("#nextaction");
let image2 = document.querySelector("#previousaction");

let imglinks = ["asset/growthstack.js","asset/images/Re 3.png","asset/images/Re 4.png","asset/images/Re 5.png","asset/images/Re 1.png"];
let imglinks2 = ["asset/growthstack.js","asset/images/Re 6.png","asset/images/Re 7.png","asset/images/Re 5.png","asset/images/Re 2.png"];


let index = 0;

function actionN() {
  index = (index + 1) % imglinks.length;
  image.setAttribute("src", imglinks[index]);
  image2.setAttribute("src", imglinks2[index]);

}

function actionPr() {
    index = (index - 1 + imglinks.length) % imglinks.length;
    image.setAttribute("src", imglinks[index]);
    image2.setAttribute("src", imglinks2[index]);
}



const hambuger = document.getElementById("M-meun");
const dropmeun = document.querySelector(".M-drop-down");

hambuger.addEventListener("click",()=>{
  dropmeun.classList.toggle("show-meun");
});