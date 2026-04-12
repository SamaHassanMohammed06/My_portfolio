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
        if (entry.isIntersecting) {   entry.target.classList.add('active');}
        else { entry.target.classList.remove('active'); }
    });
}, 
{  threshold: 0.2 });
document.querySelectorAll('.skills').forEach(skill => {
    skillsObserver.observe(skill);
});