// тоглогчийн ээлжийг хадгалах хувьсагч эхний тоглогчийг 0 Хоёр дахь тоглогчийг 1 гэе
var activePlayer = 0;

//тоглогчийн оноог цуглуулах хувьсагч
var scores = [0, 0];

// тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScores = 0;

//Шоо аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгыг санамсаргүйгээр үүсгэж өгнө
var dice = Math.floor(Math.random() * 6) + 1;

// <div class="player-score" id="score-0">43</div>

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice");

console("dice: " + dice);
