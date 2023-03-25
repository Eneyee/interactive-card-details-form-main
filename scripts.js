const notifContainer = document.querySelector(".notif-container");
const closeBtn = document.querySelector(".notif-container .close-img");
let notifText = document.getElementById("notif-text");

notifText.textContent = "Hi, name's Eneyee. Could you help me fill these? I have no idea what the correct answer is."

setTimeout(() => {
    notifContainer.classList.add("active");
}, 1000);

const stopDisplayingNotif = () => {
    notifContainer.classList.remove("active");
    notifText.textContent = ":("
}

closeBtn.addEventListener("click", stopDisplayingNotif);
