const notifContainer = document.querySelector(".notif-container");
const closeBtn = document.querySelector(".notif-container .close-img");
let notifText = document.getElementById("notif-text");
let ccNum = document.getElementById("card-number");
let frontNumber = document.getElementById("front-number");

notifText.textContent = "Hi, name's Eneyee. Could you help me fill these? I have no idea what the correct answer is."

setTimeout(() => {
    notifContainer.classList.add("active");
}, 1000);

const stopDisplayingNotif = () => {
    notifContainer.classList.remove("active");
    notifText.textContent = ":("
}

closeBtn.addEventListener("click", stopDisplayingNotif);


// frontNumber.addEventListener("blur", innerNumber);

// function innerNumber() {
//     if (ccNum != 0) {
//         frontNumber.textContent = ccNum.textContent;
//     } else {
//         frontNumber.textContent = "0000 0000 0000 0000"
//     }
// }


// ccNum.addEventListener(cardNumberValidation);

// function cardNumberValidation() {
//     var ccNum = document.getElementById("card-number").value;
//     var ccNumRegEx = /(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/g;
//     var isValid = false;
//     let errorCCNum = document.getElementById("error-ccnum");

//     if (ccNumRegEx.test(ccNum)){
//         isValid = true
//     } else {
//         errorText.textContent = "Please provide correct credit card number"
//     }
// }