var time = 25 * 60;
var timerInterval;
var selectedTime = time;
var isRunning = false;
var buzzer = new Audio('buzzer.mp3'); 

function updateTimerDisplay() {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;
  if (time <= 0) {
    clearInterval(timerInterval);
    document.getElementById('timer').textContent = `00:00`;
    var audio = new Audio('buzzer.mp3');
    audio.loop = true;
    audio.play();
    return; 
  } else {
    document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}
  

document.getElementById('reset-btn').addEventListener('click', function() {
  clearInterval(timerInterval);
  time = selectedTime;
  updateTimerDisplay();
  document.getElementById('buzzer').pause();
  document.getElementById('buzzer').currentTime = 0;
});


document.getElementById('start-btn').addEventListener('click', function() {
  if (isRunning) {
    clearInterval(timerInterval);
    this.textContent = 'Start';
    buzzer.pause(); 
    buzzer.currentTime = 0; 
  } else {
    timerInterval = setInterval(updateTimer, 1000);
    this.textContent = 'Pause';
  }
  isRunning = !isRunning;
});




document.getElementById('btn-25').addEventListener('click', function() {
  selectedTime = 25 * 60;
  time = selectedTime;
  updateTimerDisplay();
});

document.getElementById('btn-45').addEventListener('click', function() {
  selectedTime = 45 * 60;
  time = selectedTime;
  updateTimerDisplay();
});

document.getElementById('btn-60').addEventListener('click', function() {
  selectedTime = 60 * 60;
  time = selectedTime;
  updateTimerDisplay();
});

function updateTimer() {
  time--;
  if (time < 0) {
    clearInterval(timerInterval);
  } else {
    updateTimerDisplay();
  }
}





