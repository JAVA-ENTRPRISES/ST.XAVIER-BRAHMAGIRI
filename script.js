document.addEventListener("DOMContentLoaded", function() {
    // Header Injection
    const header = document.getElementById("main-header");
    if (header) {
        header.innerHTML = `
        <div class="nav-container">
            <div class="logo">sainthood<span>.school</span></div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="facility.html">Facility</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="mandatory.html">Disclosure</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>`;
    }

    // Footer Injection
    const footer = document.getElementById("main-footer");
    if (footer) {
        footer.innerHTML = `
        <div class="footer-content">
            <div>
                <h3>sainthood.school</h3>
                <p style="opacity: 0.8; margin-top: 15px;">Setting a new standard in modern education. We believe in the curiosity of every child.</p>
            </div>
            <div>
                <h4>Explore</h4>
                <ul style="list-style: none; margin-top: 15px; line-height: 2;">
                    <li><a href="facility.html" style="color:white; text-decoration:none;">Campus Life</a></li>
                    <li><a href="mandatory.html" style="color:white; text-decoration:none;">CBSE Disclosure</a></li>
                    <li><a href="contact.html" style="color:white; text-decoration:none;">Admissions</a></li>
                </ul>
            </div>
            <div>
                <h4>Contact Us</h4>
                <p style="margin-top: 15px;">📍 Plot 12, Education Hub, Bhubaneswar</p>
                <p>📞 +91 911 222 3333</p>
                <p>✉️ hello@sainthood.school</p>
            </div>
        </div>
        <div class="footer-bottom">&copy; 2026 Sainthood International School.</div>`;
    }

    // Auto-active link highlight
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});