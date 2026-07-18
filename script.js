const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;
    const triggerPoint = window.innerHeight / 2;

    if (sectionTop <= triggerPoint && sectionTop + sectionHeight > triggerPoint) {
        current = section.getAttribute("id");
    }
});
    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

const shieldLogo = document.querySelector(".shield-logo");

document.addEventListener("mousemove", (e) => {
    if (!shieldLogo) return;

    const rect = shieldLogo.getBoundingClientRect();

    const logoX = rect.left + rect.width / 2;
    const logoY = rect.top + rect.height / 2;

    const distance = Math.hypot(e.clientX - logoX, e.clientY - logoY);

    const maxDistance = 260;
    const minDistance = 40;

    if (distance < maxDistance) {
        shieldLogo.classList.add("active-shield");

        const progress = Math.min(
            Math.max((maxDistance - distance) / (maxDistance - minDistance), 0),
            1
        );

        const shieldDistance = 28 - progress * 28;

        shieldLogo.style.setProperty("--shield-distance", `${shieldDistance}px`);
    } else {
        shieldLogo.classList.remove("active-shield");
        shieldLogo.style.setProperty("--shield-distance", "28px");
    }
});

const nameElement = document.getElementById("typed-name");

const fullName = "Arun Sailan";

let index = 0;

function typeName() {
    if (index < fullName.length) {
        nameElement.textContent += fullName.charAt(index);
        index++;
        setTimeout(typeName, 140);
    }
}

window.addEventListener("load", () => {
    typeName();
});

const heroImage = document.querySelector(".hero-image");

heroImage.addEventListener("mousemove", (e) => {

    const rect = heroImage.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x - rect.width / 2) / rect.width) * 10;
    const rotateX = -((y - rect.height / 2) / rect.height) * 10;

    heroImage.style.transform = `
        translateY(-8px)
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.02)
    `;

});

heroImage.addEventListener("mouseleave", () => {

    heroImage.style.transform = `
        translateY(0)
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
    `;

});
