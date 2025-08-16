// const show = () =>{
//     document.getElementById('1').style.top ='10%'
//     document.getElementById('2').style.top ='10%'
//     document.getElementById('3').style.top ='10%'
//     document.getElementById('4').style.top ='10%'
//     document.getElementById('5').style.top ='10%'
// }

let v = 0;

const show = () => {
  if (v == 0) {
    v = 1;
    document.getElementById("img").src = "./images/close.png";
    document.getElementById("home-button").style.backgroundColor = "#76002b";
    document.getElementById("3").style.top = "33%";
    document.getElementById("1").style.top = "36.2%";
    document.getElementById("1").style.left = "44%";
    document.getElementById("2").style.top = "36.2%";
    document.getElementById("2").style.right = "44%";
    document.getElementById("4").style.top = "44.8%";
    document.getElementById("4").style.right = "42%"; 
    document.getElementById("5").style.top = "44.8%";
    document.getElementById("5").style.left = "42%";
  } else {
    v = 0;
    document.getElementById("img").src = "./images/dots-menu.png";
    document.getElementById("home-button").style.backgroundColor = "#003442";
    document.getElementById("3").style.top = "50%";
    document.getElementById("1").style.top = "48%";
    document.getElementById("1").style.left = "50%";
    document.getElementById("2").style.top = "48%";
    document.getElementById("2").style.right = "50%";
    document.getElementById("4").style.top = "48%";
    document.getElementById("4").style.right = "50%";
    document.getElementById("5").style.top = "48%";
    document.getElementById("5").style.left = "50%";
  }
};
