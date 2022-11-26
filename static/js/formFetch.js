
const needHelpForm = document.getElementById("needForm");
const wantHelpForm = document.getElementById("wantHelpForm");
const urlNeedHelp = "https://script.google.com/macros/s/AKfycbzsMXuEk_iMVTFtYawvet9jXefDlOKENdN1KK-LgSdNxCAEr9bEEc5dITZaD7epJHEFQQ/exec";
const urlWantHelp = "https://script.google.com/macros/s/AKfycbyO7pypHaAfoXok3voAbBatPjNX_nwu7V3BLxnxpJuk-Z3yy9YWOlPOukuhMwzwZdwq8g/exec";

if(wantHelpForm){
wantHelpForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("fname");
  const emailInput = document.getElementById("email");
  const text = document.getElementById("text");
  const sendingMess = document.getElementById("sending-mess");

  const validation =
    nameInput.value.length > 0 &&
    emailInput.value.length > 0 &&
    text.value.length > 0;

  if (!validation) {
    const inputs = wantHelpForm.querySelectorAll(".inp");
    for (let input of inputs) {
      if (input.value === "") {
        input.classList.add("bg-red-50");
      }
    }
    sendingMess.innerHTML = "Please, enter valid data!";
    sendingMess.classList.remove("hidden");
    sendingMess.classList.add("border-red-500");
    sendingMess.classList.add("bg-red-50");
  } else {
    fetch(urlWantHelp, {
      method: "POST",
      body: new FormData(wantHelpForm),
    })
      .then((response) => {
        sendingMess.innerHTML = "Successfully sent!";
        sendingMess.classList.remove("hidden");
        sendingMess.classList.add("border-green-500");
        sendingMess.classList.add("bg-green-50");
      })
      .catch((error) => alert("Something went wrong!", error.message));
  }
});
}

if(needHelpForm) {
  needHelpForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("fname");
  const emailInput = document.getElementById("email");
  const text = document.getElementById("text");
  const sendingMess = document.getElementById("sending-mess");

  const validation =
    nameInput.value.length > 0 &&
    emailInput.value.length > 0 &&
    text.value.length > 0;

  if (!validation) {
    const inputs = needHelpForm.querySelectorAll(".inp");
    for (let input of inputs) {
      if (input.value === "") {
        input.classList.add("bg-red-50");
      }
    }
    sendingMess.innerHTML = "Please, enter valid data!";
    sendingMess.classList.remove("hidden");
    sendingMess.classList.add("border-red-500");
    sendingMess.classList.add("bg-red-50");
  } else {
    fetch(urlNeedHelp, {
      method: "POST",
      body: new FormData(needHelpForm),
    })
      .then((response) => {
        sendingMess.innerHTML = "Successfully sent!";
        sendingMess.classList.remove("hidden");
        sendingMess.classList.add("border-green-500");
        sendingMess.classList.add("bg-green-50");
      })
      .catch((error) => console.error("error", error.message));
  }
})
};
