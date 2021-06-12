// тоглоом дуусгах
var isNewGame;
// тоглогч
var activePlayer;

// хоёр тоглогчийн цуглуулсан оноо
var scores;

//ээлжийн оноо
var roundScore;

// шооны зураг үзүүлэх элементийн DOM-оос хайж олоод энд хадгал
var diceDom = document.querySelector(".dice");

// Тоглоом эхлэх функц
initGame();

//
function initGame() {
  //Тоглоом эхлэх гэдэг төлөв оруулна
  isNewGame = true;
  // тоглогчийн ээлжийг хадгалах хувьсагч эхний тоглогчийг 0 Хоёр дахь тоглогчийг 1 гэе
  activePlayer = 0;

  // Тоглогчийн оноог цуглуулах
  scores = [0, 0];

  // тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
  roundScore = 0;

  // Эвент
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  //Тоглогчдийн нэрийг буцааж гаргах
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

//тоглох дээр дарах эвент
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame === true) {
    //1-6 шоог санамсаргүй буулгах
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // Шооны зургийг дэлгэцэнд харуулах
    diceDom.style.display = "block";

    //Шооны зургийг ID
    diceDom.src = "dice-" + diceNumber + ".png";

    // Буусан тоо нь 1 - ээс ялгаатай бол нэмэгдүүлнэ
    if (diceNumber !== 1) {
      //Ээлжийн оноог Цуглуулж байгаа оноо руу хийх
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      // хэрвээ 1-тэй тэнцэж байвал доод талын функцийг ажиллуулна
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна New Game товчийг дарж дахин эхлэнэ үү");
  }
});

//  Hold Button event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame === true) {
    // нийт оноог хадаглах массив дотор ээлжийн оноог нэмэж байгаа
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // дэлэгцэн дээрх оноог өөрчилнөө
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    // хэрвээ цуглуулсан оноо нь 100-аас их болчихвол ялна
    if (scores[activePlayer] >= 100) {
      //Тоглоомыг дууссан төлөвт оруулна
      isNewGame = false;
      // HMTL кодноос ID-г аван Player нэдэг үгийг WINNER Болгон өөрчилж  байна
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      // 100 хүрээгүй бол доод талын функцийг ажиллуулж байна
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна New Game товчийг дарж дахин эхлэнэ үү");
  }
});

// тоглогч хооронд шилжилт хйих
function switchToNextPlayer() {
  //тоглогчийн ээлжинд цугласан оноог 0 толгоно.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  //  Тоглогчын ээлжийг нөгөө тоглогч руу шилжүүлнэ
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Улаан цэгийг хөдөлгөх
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // шоог хоослох
  diceDom.style.display = "none";
}

// new game гэсэн товчин дээр дар юм бол шинээр эхлэх
document.querySelector(".btn-new").addEventListener("click", initGame);
