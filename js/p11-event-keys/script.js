const insert = document.getElementById('insert');

console.log("s");

window.addEventListener('keydown', (e) => {
  console.log(e);

  insert.innerHTML = `
    <div class="key">
    ${e.key === " " ? "Space" : e.key}
    <small>even.key</small>
  </div>
  <div class="key">
  ${e.keyCode}
    <small> event.keyCode </small>
  </div>
  <div class="key">
  ${e.code}
    <small> event.ode </small>
  </div>
  `;
});
