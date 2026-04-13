window.onscroll = function () {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 35) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('active'); }
        else { entry.target.classList.remove('active'); }
    });
},
    { threshold: 0.2 });
document.querySelectorAll('.skills').forEach(skill => {
    skillsObserver.observe(skill);
});

const mode_btn = document.getElementById("mode-btn");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}
mode_btn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});