// main.js

document.addEventListener("DOMContentLoaded", function () {
    console.log("Career Connect Website Loaded");
  
    // Smooth scrolling for links
    document.querySelectorAll(".navbar-links a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
  
    // Hover effect for feature cards
    document.querySelectorAll(".feature-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });

    // Community chat link
    const chatLink = document.createElement("a");
    chatLink.href = "https://chat.communitylink.com";
    chatLink.target = "_blank";
    chatLink.innerText = "Join Community Chat";
    chatLink.className = "neo-button community-link";
    document.body.appendChild(chatLink);

    // Mentorship section
    const mentorSection = document.createElement("section");
    mentorSection.className = "mentorship-section";
    mentorSection.innerHTML = `
        <h2>Meet Our Mentors</h2>
        <ul>
            <li>Sunita Sharma - AI/ML Expert</li>
            <li>Himanshi Verma - Full Stack Developer</li>
            <li>Prince Kumar Jha - Community Leader & DevOps Specialist</li>
        </ul>
    `;
    document.body.appendChild(mentorSection);
});
