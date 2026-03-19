🌸 Blossom Lane Florist – Demo Website
A responsive florist landing page demo showcasing elegant bouquets, services, testimonials, and a contact form. Built with HTML, CSS, and JavaScript to demonstrate modern web design practices.

📖 Table of Contents
Overview

Features

Tech Stack

Setup

Usage

Form Handling

Folder Structure

Customization

License

🌟 Overview
This project is a demo florist website designed to:

Showcase responsive layouts (hero, gallery, services, testimonials, contact).

Provide a clean, modern design with pastel accents.

Demonstrate interactive elements like smooth scrolling, hover effects, and a lightbox gallery.

✨ Features
Responsive hero section with overlay.

Gallery grid with hover zoom and optional lightbox.

Services section with cards and CTA.

Testimonials section with styled customer feedback.

Contact form with validation and W3Forms integration.

Footer with SVG social icons (Instagram, Facebook, Email, WhatsApp).

🛠 Tech Stack
HTML5 – semantic structure

CSS3 – responsive design, grid/flexbox, hover effects

JavaScript (Vanilla) – smooth scrolling, form validation, lightbox

W3Forms – form submission handling

⚙️ Setup
Clone the repository:

bash
git clone https://github.com/yourusername/florist-demo.git
Navigate into the project folder:

bash
cd florist-demo
Open index.html in your browser.

🚀 Usage
Update images in /images/ with your own florist photos.

Edit text content in index.html to match your brand.

Customize colors and styles in style.css.

📩 Form Handling
The contact form uses W3Forms for submissions:

html

<form action="https://www.w3forms.com/submit" method="POST">
  <input type="hidden" name="recipient" value="info@blossomlaneflorist.com" />
</form>
Replace info@blossomlaneflorist.com with your email.

Optionally add a redirect hidden field for a thank‑you page.

📂 Folder Structure
Code
florist-demo/
│── index.html
│── style.css
│── script.js
│── /images
│ ├── bouquet1.jpg
│ ├── bouquet2.jpg
│ └── ...
🎨 Customization
Colors: Update pastel theme in style.css.

Icons: Replace inline SVGs in the footer with your preferred set.

Sections: Add/remove sections (gallery, testimonials) as needed.

📜 License
This project is for demo and educational purposes.
Feel free to adapt and use it for your own florist or creative portfolio.
