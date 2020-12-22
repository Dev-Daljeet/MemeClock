// Show the current time
var showCurrentTime = function()
{
    var clock = document.getElementById('clock');

    var date = new Date();

   //h-hours, m-minutes, s-seconds
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    clock.innerText = time;
    setTimeout(showCurrentTime, 1000);

};

// Set the text and images according to the current time
var updateClock = function()
{
  var time = new Date().getHours();
  var messageText;
  var image = "images/normal.png";

  var timeEventJS = document.getElementById("timeEvent");
  var pepeImageJS = document.getElementById("pepeImage");

  if (time >= 5 && time < 12)
  {
    image = "images/normal.png";
    messageText = "Good Morning!";
  }
  else if (time >= 12 && time < 17)
  {
    image = "images/normal.png";
    messageText = "Good Afternoon!";
  }
  else if (time >=17 && time < 21)
  {
    image = "images/normal.png";
    messageText = "Good Evening!";
  }
  else
  {
    image = "images/night.png";
    messageText = "Good Night!";
  }

  timeEventJS.innerText = messageText;
  pepeImageJS.src = image;

  showCurrentTime();
};
updateClock();

var partyTimeButton = document.getElementById("partyTimeButton");

var codeTimeButton = document.getElementById("codeTimeButton");

var gameTimeButton = document.getElementById("gameTimeButton");

// Event for partTimeButton
var partyEvent = function()
{
  partyTimeButton.innerText = "Party Time!";
  partyTimeButton.style.backgroundColor = "#0A8DAB";
  codeTimeButton.style.backgroundColor = "#222";
  gameTimeButton.style.backgroundColor = "#222";
  document.getElementById("pepeImage").src = "images/party.gif";
  document.getElementById("timeEvent").innerText = "Party Time!";
};

partyTimeButton.addEventListener("click", partyEvent);

// Event for codeTimeButton
var codeEvent = function()
{
  codeTimeButton.innerText = "Coding Time!";
  codeTimeButton.style.backgroundColor = "#0A8DAB";
  partyTimeButton.style.backgroundColor = "#222";
  gameTimeButton.style.backgroundColor = "#222";
  document.getElementById("pepeImage").src = "images/code.gif";
  document.getElementById("timeEvent").innerText = "Coding Time!";
};

codeTimeButton.addEventListener("click", codeEvent);

// Event for gameTimeButton
var gameEvent = function()
{
  gameTimeButton.innerText = "Gaming Time!";
  gameTimeButton.style.backgroundColor = "#0A8DAB";
  partyTimeButton.style.backgroundColor = "#222";
  codeTimeButton.style.backgroundColor = "#222";
  document.getElementById("pepeImage").src = "images/game.gif";
  document.getElementById("timeEvent").innerText = "Gaming Time!";
};

gameTimeButton.addEventListener("click", gameEvent);