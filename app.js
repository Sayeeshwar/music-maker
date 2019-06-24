window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const header = document.querySelector(".heading");
  const app = document.querySelector(".app");
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
    header.style.color = colors[index];
    const bubble = document.createElement("div");
    visual.append(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", () => {
      visual.removeChild(bubble);
      header.style.color = null;
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

// function to toggle instrument
function changeInstrument(){
  const instruments = [".pads",".keys"];
  var i,j;
  //checks which tab is displayed currently
  if(document.querySelector(instruments[0]).style.display==="none")
  {
    j=0;
  }
  else
  {
    j=1;
  }
  //Hide all tabs by default
  for(i=0;i<instruments.length;i++)
  {
    document.querySelector(instruments[i]).style.display="none";
  }
  //display toggled instrument
  document.querySelector(instruments[j]).style.display="flex";
}

