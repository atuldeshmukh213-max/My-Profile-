// ===============================
// Atul Deshmukh Bachchan Portfolio
// script.js
// ===============================

// Welcome Message
window.addEventListener("load", () => {
    console.log("Welcome to Atul Deshmukh Bachchan Portfolio");
});

// Typing Effect
const typingText = [
    "BCA Student",
    "Frontend Web Developer",
    "HTML | CSS | JavaScript",
    "Git & GitHub Learner"
];

let textIndex = 0;
let charIndex = 0;

const heading = document.querySelector(".hero h2");

function typeEffect() {

    if (!heading) return;

    if (charIndex < typingText[textIndex].length) {

        heading.innerHTML += typingText[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    } else {

        setTimeout(eraseEffect,1500);

    }

}

function eraseEffect(){

    if(charIndex>0){

        heading.innerHTML=typingText[textIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }else{

        textIndex++;

        if(textIndex>=typingText.length){

            textIndex=0;

        }

        setTimeout(typeEffect,300);

    }

}

heading.innerHTML="";
typeEffect();


// Scroll Animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach((el)=>{

observer.observe(el);

});


// Profile Hover Animation

const profile=document.querySelector(".profile");

if(profile){

profile.addEventListener("mouseover",()=>{

profile.style.transform="scale(1.08) rotate(5deg)";

});

profile.addEventListener("mouseout",()=>{

profile.style.transform="scale(1)";

});

}


// Skill Click Effect

const skills=document.querySelectorAll(".skill");

skills.forEach(skill=>{

skill.addEventListener("click",()=>{

alert("Skill : "+skill.innerText);

});

});


// Live Time

const footer=document.querySelector("footer");

const clock=document.createElement("p");

footer.appendChild(clock);

setInterval(()=>{

const now=new Date();

clock.innerHTML="🕒 "+now.toLocaleTimeString();

},1000);


// Smooth Button

const btn=document.querySelector(".btn");

if(btn){

btn.addEventListener("click",(e)=>{

e.preventDefault();

document.querySelector("#about").scrollIntoView({

behavior:"smooth"

});

});

}

console.log("Portfolio Loaded Successfully");
