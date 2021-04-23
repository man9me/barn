const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    // делаем цифру из стринга или + ил  NUmber илил parseInt
    const target = +counter.getAttribute("data-target");

    const c = +counter.innerText;
    const increment = target / 500;
    if (c < target) {
      //окрухление прибавочки
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
