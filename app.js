// 1-p Хэсэг
// тоглогчийн ээлжийг хадгалах хувьсагч эхний тоглогчийг 0 Хоёр дахь тоглогчийг 1 гэе
var activePlayer = 0;

//тоглогчийн оноог цуглуулах хувьсагч
var scores = [0, 0];

// тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScores = 0;

//Шоо аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгыг санамсаргүйгээр үүсгэж өгнө
// var diceNumber = Math.floor(Math.random() * 6) + 1;

// <div class="player-score" id="score-0">43</div>

// 2-р хэсэг Эвэнт DОМ
ment.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
