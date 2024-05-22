/* -------------- Loader ----------------------- */
window.addEventListener("load", () => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".page-loader").style.display = "none";
    }, 600);
});
/* -------------- Toggle Navbar ----------------------- */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});

function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active");
}
/* -------------- Active Section ----------------------- */
document.addEventListener("DOMContentLoaded", function () {
    const tabItems = document.querySelectorAll(".tab-item");
    const tabContents = document.querySelectorAll(".tab-content");

    tabItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(item.dataset.target);

            tabItems.forEach(tab => tab.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            item.classList.add("active");
            target.classList.add("active");

            // If the clicked tab is for the #course section, handle it separately
            if (item.getAttribute("href") === "#course") {
                // Here you can add any specific behavior for the #course section
                console.log("Course Certificate tab clicked!");
            }
        });
    });
});
/* -------------- About Tabs ----------------------- */
const tabsContainer = document.querySelector(".about-tabs"),
    aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
    // Prevent the default anchor tag behavior
    e.preventDefault();

    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        // Remove active class from all tabs
        tabsContainer.querySelectorAll(".tab-item").forEach(tab => {
            tab.classList.remove("active");
        });

        // Add active class to the clicked tab
        e.target.classList.add("active");

        // Get the target content ID
        const target = e.target.getAttribute("href").substring(1);

        // Remove active class from all tab contents
        aboutSection.querySelectorAll(".tab-content").forEach(content => {
            content.classList.remove("active");
        });

        // Add active class to the corresponding tab content
        document.getElementById(target).classList.add("active");
    }
});

/* -------------- Portfolio Item Popup ----------------------- */
document.addEventListener('DOMContentLoaded', function () {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const portfolioPopup = document.querySelector('.portfolio-popup');
    const portfolioPopupCloseBtn = document.querySelector('.pp-close');

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            // Get the details of the clicked portfolio item
            const title = item.querySelector('.portfolio-item-title').textContent;
            const description = item.querySelector('.description').textContent;
            const created = item.querySelector('.general-info li:nth-child(1) span').textContent;
            const technology = item.querySelector('.general-info li:nth-child(2) span').textContent;
            const role = item.querySelector('.general-info li:nth-child(3) span').textContent;

            // Set the details in the popup
            portfolioPopup.querySelector('h3').textContent = title;
            portfolioPopup.querySelector('.description').textContent = description;
            portfolioPopup.querySelector('.created').textContent = created;
            portfolioPopup.querySelector('.technology').textContent = technology;
            portfolioPopup.querySelector('.role').textContent = role;

            // Show the popup
            portfolioPopup.classList.add('open');
        });
    });

    // Close popup when close button is clicked
    portfolioPopupCloseBtn.addEventListener('click', () => {
        portfolioPopup.classList.remove('open');
    });
});
