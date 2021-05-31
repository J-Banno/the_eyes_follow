//Constante

const container = document.querySelector(".container");
const pupil = document.querySelectorAll(".pupil");

//Evènements

container.addEventListener("mousemove", (e) => {
  const x = `${(e.clientX * 100) / window.innerWidth}%`;
  const y = `${(e.clientY * 100) / window.innerHeight}%`;

  for (let i = 0; i < 2; i++) {
    pupil[i].style.left = x;
    pupil[i].style.top = y;
    pupil[i].style.transform = `translate(-${x},-${y})`;
  }
});
