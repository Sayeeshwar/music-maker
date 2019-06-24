window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#d63333",
    "#11c229",
    "#0099ff",
    "#d5fa31",
    "#5f5f5f",
    "#db247a"
  ];

  //Create bubbles on click
  const createBubbles = index => {
    const bubble = document.createElement("div");
    visual.append(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", () => {
      visual.removeChild(bubble);
    });
  };

  //Create sound on click
  pads.forEach((pad, index) => {
    pad.addEventListener("click", () => {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubbles(index);
    });
  });
});
