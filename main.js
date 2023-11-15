// Example JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    // Your code here
});
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav ul li");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        navLi.forEach(li => {
            li.classList.remove("active");
            if (li.querySelector("a").getAttribute("href") === "#" + current) {
                li.classList.add("active");
            }
        });
    });
});
