
var pomodoro = 25;
var shortBreak = 5;
var longBreak = 30;

var clock = pomodoro;

function updateClock(time) {

  document.getElementById('timerclock').innerHTML = time;
}

function myClock(time) {

  updateClock(time);
  clock = time;

  document.querySelector('.btn-outline-success').classList.remove('active');
  document.querySelector('.btn-outline-success').classList.replace('btn-outline-success',
  'btn-outline-secondary');

  if (time === shortBreak) {
    document.getElementById('btShort').classList.add('active');
    document.getElementById('btShort').classList.replace('btn-outline-secondary',
    'btn-outline-success');
  }

  if (time === longBreak) {
    document.getElementById('btLong').classList.add('active');
    document.getElementById('btLong').classList.replace('btn-outline-secondary',
    'btn-outline-success');
  }

  if (time === pomodoro) {
    document.getElementById('btPomodoro').classList.add('active');
    document.getElementById('btPomodoro').classList.replace('btn-outline-secondary',
    'btn-outline-success');
  }
}

function ticTac() {

  document.getElementById('btPlay').classList.replace('status_off', 'status_on');
  setTimeout(function () {

    if (clock === 0) {
      updateClock(clock);
    } else {
      clock = clock - 1;
      updateClock(clock);
      ticTac();
    }
  }, 1000);

}
