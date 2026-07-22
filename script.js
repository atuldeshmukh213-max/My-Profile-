// ===============================
// ATUL DESHMUKH BACHCHAN PORTFOLIO
// script.js
// ===============================

// Welcome Message
window.onload = function () {
    alert("🙏 Welcome to Atul Deshmukh Bachchan's Portfolio");
};

// Smooth Fade Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease";
    observer.observe(section);
});

// Typing Effect
const text = "BCA Student | Frontend Web Developer | GitHub Learner";
const typing = document.querySelector(".hero h3");

let i = 0;

typing.innerHTML = "";

function typeWriter() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}

typeWriter();

// Profile Image Animation
const profile = document.querySelector(".profile");

profile.addEventListener("mouseover", () => {
    profile.style.transform = "scale(1.1) rotate(10deg)";
});

profile.addEventListener("mouseout", () => {
    profile.style.transform = "scale(1) rotate(0deg)";
});

// Skill Hover Sound (Optional)
const skills = document.querySelectorAll(".skill");

skills.forEach((skill) => {
    skill.addEventListener("mouseenter", () => {
        skill.style.background = "linear-gradient(45deg,#00ff99,#00ccff)";
    });

    skill.addEventListener("mouseleave", () => {
        skill.style.background = "";
    });
});

// Live
