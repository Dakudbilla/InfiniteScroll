const container = document.querySelector(".container");
const apiKey = "f0G5nGf375N3TGwBNMxFuJciNL7tE_dstg7ghcaR1Mw";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${10}`;
//Get a batch of images and append to container div

const loadImages = () => {
  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      data.map((img) => {
        const image = document.createElement("img");
        image.src = `${img.urls.small}`;
        container.appendChild(image);
      });
    });
};

loadImages();

//Listen for scroll event

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadImages();
  }
});
