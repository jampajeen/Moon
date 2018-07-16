const clock = document.querySelector('.clock').children[0];
function pad(n) { return (`0${n}`).slice(-2); }
function set() {
  const t = new Date();
  clock.innerHTML = `☾ ${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`;
}
set();
setInterval(() => {
  set();
}, 1000);
