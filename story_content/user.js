window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();

// Prevent multiple intervals
if (!window.storylineTimerStarted) {
  window.storylineTimerStarted = true;

  setInterval(function () {

    // 🔴 CHECK TIMER FLAG
    if (!player.GetVar("TimerOn")) {
      return; // do nothing if timer is off
    }

    // Get current elapsed seconds
    var seconds = player.GetVar("ElapsedSeconds");
    seconds++;
    player.SetVar("ElapsedSeconds", seconds);

    // Calculate minutes and seconds
    var minutes = Math.floor(seconds / 60);
    var secs = seconds % 60;

    // Pad with leading zeros
    var displayMinutes = minutes < 10 ? "0" + minutes : "" + minutes;
    var displaySeconds = secs < 10 ? "0" + secs : "" + secs;

    // Set variables for Storyline
    player.SetVar("Minutes", displayMinutes);
    player.SetVar("Seconds", displaySeconds);

  }, 1000);
}

}

window.Script2 = function()
{
  var player = GetPlayer();

// Prevent multiple intervals
if (!window.storylineTimerStarted) {
  window.storylineTimerStarted = true;

  setInterval(function () {

    // 🔴 CHECK TIMER FLAG
    if (!player.GetVar("TimerOn")) {
      return; // do nothing if timer is off
    }

    // Get current elapsed seconds
    var seconds = player.GetVar("ElapsedSeconds");
    seconds++;
    player.SetVar("ElapsedSeconds", seconds);

    // Calculate minutes and seconds
    var minutes = Math.floor(seconds / 60);
    var secs = seconds % 60;

    // Pad with leading zeros
    var displayMinutes = minutes < 10 ? "0" + minutes : "" + minutes;
    var displaySeconds = secs < 10 ? "0" + secs : "" + secs;

    // Set variables for Storyline
    player.SetVar("Minutes", displayMinutes);
    player.SetVar("Seconds", displaySeconds);

  }, 1000);
}

}

window.Script3 = function()
{
  const timestamp = new Date().toLocaleString();

var player = GetPlayer();

// Storyline Variables
var score = player.GetVar("Score1");
var userName = "1";

// بيانات إضافية (اختياري)
// var activityName = "Module 1 - Quiz";

// Google Script URL
var url = "https://script.google.com/macros/s/AKfycbz9qbqZIUvO3PN8s_DYn_Yzy-FJYWw5q_7BW8ZoStUV92dywFBcQfMxcUHK80RgbiEjKQ/exec";

var data = {
  team: userName,
  score: score,
  total: 30,
  timestamp: timestamp
  // activityName: activityName
};

fetch(url, {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
});
}

window.Script4 = function()
{
  const timestamp = new Date().toLocaleString();

var player = GetPlayer();

// Storyline Variables
var score = player.GetVar("Score2");
var userName = "2";

// بيانات إضافية (اختياري)
// var activityName = "Module 1 - Quiz";

// Google Script URL
var url = "https://script.google.com/macros/s/AKfycbz9qbqZIUvO3PN8s_DYn_Yzy-FJYWw5q_7BW8ZoStUV92dywFBcQfMxcUHK80RgbiEjKQ/exec";

var data = {
  team: userName,
  score: score,
  total: 30,
  timestamp: timestamp
  // activityName: activityName
};

fetch(url, {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
});
}

window.Script5 = function()
{
  var player = GetPlayer();

// Prevent multiple intervals
if (!window.storylineTimerStarted) {
  window.storylineTimerStarted = true;

  setInterval(function () {

    // 🔴 CHECK TIMER FLAG
    if (!player.GetVar("TimerOn")) {
      return; // do nothing if timer is off
    }

    // Get current elapsed seconds
    var seconds = player.GetVar("ElapsedSeconds");
    seconds++;
    player.SetVar("ElapsedSeconds", seconds);

    // Calculate minutes and seconds
    var minutes = Math.floor(seconds / 60);
    var secs = seconds % 60;

    // Pad with leading zeros
    var displayMinutes = minutes < 10 ? "0" + minutes : "" + minutes;
    var displaySeconds = secs < 10 ? "0" + secs : "" + secs;

    // Set variables for Storyline
    player.SetVar("Minutes", displayMinutes);
    player.SetVar("Seconds", displaySeconds);

  }, 1000);
}

}

window.Script6 = function()
{
  const timestamp = new Date().toLocaleString();

var player = GetPlayer();

// Storyline Variables
var score = player.GetVar("Score3");
var userName = "3";

// بيانات إضافية (اختياري)
// var activityName = "Module 1 - Quiz";

// Google Script URL
var url = "https://script.google.com/macros/s/AKfycbz9qbqZIUvO3PN8s_DYn_Yzy-FJYWw5q_7BW8ZoStUV92dywFBcQfMxcUHK80RgbiEjKQ/exec";

var data = {
  team: userName,
  score: score,
  total: 30,
  timestamp: timestamp
  // activityName: activityName
};

fetch(url, {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
});
}

window.Script7 = function()
{
  const timestamp = new Date().toLocaleString();

var player = GetPlayer();

// Storyline Variables
var score = player.GetVar("Score4");
var userName = "4";

// بيانات إضافية (اختياري)
// var activityName = "Module 1 - Quiz";

// Google Script URL
var url = "https://script.google.com/macros/s/AKfycbz9qbqZIUvO3PN8s_DYn_Yzy-FJYWw5q_7BW8ZoStUV92dywFBcQfMxcUHK80RgbiEjKQ/exec";

var data = {
  team: userName,
  score: score,
  total: 30,
  timestamp: timestamp
  // activityName: activityName
};

fetch(url, {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
});
}

window.Script8 = function()
{
  var player = GetPlayer();

// Prevent multiple intervals
if (!window.storylineTimerStarted) {
  window.storylineTimerStarted = true;

  setInterval(function () {

    // 🔴 CHECK TIMER FLAG
    if (!player.GetVar("TimerOn")) {
      return; // do nothing if timer is off
    }

    // Get current elapsed seconds
    var seconds = player.GetVar("ElapsedSeconds");
    seconds++;
    player.SetVar("ElapsedSeconds", seconds);

    // Calculate minutes and seconds
    var minutes = Math.floor(seconds / 60);
    var secs = seconds % 60;

    // Pad with leading zeros
    var displayMinutes = minutes < 10 ? "0" + minutes : "" + minutes;
    var displaySeconds = secs < 10 ? "0" + secs : "" + secs;

    // Set variables for Storyline
    player.SetVar("Minutes", displayMinutes);
    player.SetVar("Seconds", displaySeconds);

  }, 1000);
}

}

};
