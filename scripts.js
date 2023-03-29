//declared notification 
const notifContainer = document.querySelector(".notif-container");
const closeBtn = document.querySelector(".notif-container .close-img");
let notifText = document.getElementById("notif-text");

//declared form and button
const form = document.querySelector(".input-container");
const tyContainer = document.querySelector(".ty-container");
const submitBtn = document.getElementById("btn-submit");
let inputs = document.querySelectorAll("input");

//declared card holder name
let nameCH = document.querySelector(".name-ch");
let frontName = document.querySelector(".front-name");

//declared card number display
let ccNum = document.querySelector(".card-number");
let frontNumber = document.querySelector(".front-number");

//declared exp date
let expMM = document.querySelector(".mm-number");
let expYY = document.querySelector(".yy-number");
let frontExp = document.querySelector(".front-exp");

//declared cvc number
let cvc = document.querySelector(".cvc-number");
let backCvc = document.querySelector(".back-number");

//assign .hidden to tyContainer
tyContainer.classList.add("hidden");

//notification display function
notifText.textContent = "Hi, name's Eneyee. Could you help me fill these? I have no idea what the correct answer is."

setTimeout(() => {
    notifContainer.classList.add("active");
}, 1000);

const stopDisplayingNotif = () => {
    notifContainer.classList.remove("active");
    notifText.textContent = ":("
}

closeBtn.addEventListener("click", stopDisplayingNotif);

//name display function 
nameCH.addEventListener("keyup", (e) =>{
    if (!e.target.value) {
        frontName.innerHTML = "JANE APPLESEED";
    } else {
        frontName.innerHTML = e.target.value.toUpperCase();
    }
})

//card number display function
ccNum.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        frontNumber.innerText = "0000 0000 0000 0000";
    } else {
        const valuesOfInput = e.target.value.replaceAll(" ", "");

        if (e.target.value.length > 14) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
            frontNumber.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
        } else if (e.target.value.length > 9) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
            frontNumber.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
        } else if (e.target.value.length > 4) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
            frontNumber.innerHTML = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
        } else {
            frontNumber.innerHTML = valuesOfInput
        }
    }
})

//exp date display function
function checkExp(){
    if (!expMM.value && !expYY.value) {
        frontExp.innerHTML = "00/00";
    }
}

expMM.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        frontExp.innerHTML = "00" + "/"+ expYY.value;
    } else if(!expYY.value) {
        frontExp.innerHTML = e.target.value + "/" + "00";
    } else {
        frontExp.innerHTML = e.target.value + "/" + expYY.value;
    }
    checkExp();
})

expYY.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        frontExp.innerHTML = expMM.value + "/" +"00";
    } else if(expMM.value) {
        frontExp.innerHTML = expMM.value + "/" + e.target.value;
    } else {
        frontExp.innerHTML = "00" + "/" + e.target.value;
    }
    checkExp();
})

//cvc display function
cvc.addEventListener("keyup", (e) => {
    if(!e.target.value) {
        backCvc.innerHTML = "000";
    } else {
        backCvc.innerHTML = e.target.value;
    }
})



// I don't understand how to check for errors here. 
// I've done a similar excersise where i used this code to check for text in each input, and then submitting


// form.addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	inputs.forEach((input) => {
// 		if (!input.value) {
// 			input.parentElement.classList.add('input-error');
// 		} else {
// 			input.parentElement.classList.remove('error');
// 			if (input.type == 'email') {
// 				if (validateEmail(input.value)) {
// 					input.parentElement.classList.remove('error');
// 				} else {
// 					input.parentElement.classList.add('error');
// 				}
// 			}
// 		}
// 	});
// });

// But it doesn't seem to work here
// Also instead of adding a class ("input-error"), I want for it to add .textContent inside errorText like:

// const errorText = document.querySelectorAll("error-text");
// ...
// errorText.textContent = "Can't be blank";

//But it only works with one of the .error-text, when it even works


// Here is a place holder, it checks for any input in any input-field 
// If none, displays notification text. If it finds at least one symbol in any field it lets you in
// Still not sure why is it satisfied with one input, while the code above won't let you in, unless you fill all of the fields
// And I haven't even started yet writing a code for checking for correct inputs like numbers/text only 

form.addEventListener("submit", (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
		if (!input.value) {
            notifText.textContent = "Oh-oh, it seems like you haven't done it right. Give it another try."
        } else {
            notifText.textContent = "Yay! You made it! I can't believe it worked! Thank you very much for your help."
            form.classList.add("hidden");
            tyContainer.classList.remove("hidden");
        }
})
});

// Whoever reads this, I hope I explained my problem correctly :)
