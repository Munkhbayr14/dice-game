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
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
// шоог шидэх Эвент листэнэр
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 хүртэл санамсргүй тоо гргаж авна
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //Шооны зургийг Эвент дээр гаргаж ирнэ
  diceDom.style.display = "block";
  //Буусан санамсаргүй тооны зургийг вэб дээр гаргаж ирнэ
  diceDom.src = "dice-" + diceNumber + ".png";
  //   Буусан тоо нь 1 - ээс ялгаатай бол нэмэгдүүлнэ
  if (diceNumber !== 1) {
    roundScores = roundScores + diceNumber;
    document.getElementById("current-" + activePlayer).textContent =
      roundScores;
  } else {
    roundScores = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    if (activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
    // Улаан цэгийг хөдөлгөх
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceDom.style.display = "none";
  }
});
