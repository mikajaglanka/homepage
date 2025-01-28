const init = () => {
  console.log("Moja strona szkielet!");

  const deletePicture = document.querySelector(".deletePicture");
  const photoThree = document.querySelector(".photo--secondary");

   deletePicture.addEventListener("click", () => {
    photoThree.remove();
    deletePicture.remove();
  });

  const button = document.querySelector(".title__button");
  const body = document.querySelector(".body");
  const themeName = document.querySelector(".js-themeName");

  button.addEventListener("click", () => {
    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains("dark") ? "zmień" : "tło";
  });
};

init();
