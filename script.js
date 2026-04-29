document.addEventListener("DOMContentLoaded", function() {

    // Header Injection
    const header = document.getElementById("main-header");
    if (header) {
        header.innerHTML = `
        <div class="nav-container">

            <!-- LOGO + NAME -->
            <div class="logo-container">
                <img src="image/LOGO.jpeg" alt="School Logo" class="logo-img">
                <div class="logo-text">
                    St.Xavier School<span>.Brahmagiri</span>
                </div>
            </div>

            <!-- NAV LINKS -->
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about-us.html">AboutUs</a></li>
                <li><a href="facility.html">Facility</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="mandatory.html">MandatoryDisclosure</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>

        </div>`;
    }

    // Footer Injection
    const footer = document.getElementById("main-footer");
    if (footer) {
        footer.innerHTML = `
        <div class="footer-content">

            <!-- FOOTER LOGO -->
            <div>
                <div class="footer-logo">
                    <img src="image/LOGO.jpeg" alt="School Logo" class="footer-logo-img">
                    <h3>St Xavier School</h3>
                </div>

                <p style="opacity: 0.8; margin-top: 15px;">
                    Setting a new standard in modern education. 
                    We believe in the curiosity of every child.
                </p>
            </div>

            <div>
                <h4>Explore</h4>
                <ul style="list-style: none; margin-top: 15px; line-height: 2;">
                     <li><a href="index.html">Home</a></li>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="facility.html">Facility</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="mandatory.html">Mandatory Disclosure</a></li>
                <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>

            <div>
                <h4>Contact Us</h4>
                <p style="margin-top: 15px;">📍 Brahmagiri Puri</p>
                <p>📞 +91 7978162362</p>
                <p>✉️ xavier.brahmagiri202@gmail.com</p>
            </div>

        </div>

        <div class="footer-bottom">
            &copy; 2026 St.Xavier School.
        </div>`;
    }

    // Active Link Highlight
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

});
