// document.addEventListener("DOMContentLoaded", () => {
  // const container = document.getElementById("diagram-container");

  // // Przykładowy diagram przetwarzania (SVG)
  // const svg = `
    // <svg viewBox="0 0 600 300" width="100%" height="auto">
      // <style>
        // .stage {
          // fill: #00aaff;
          // cursor: pointer;
          // transition: transform 0.3s;
        // }
        // .stage:hover {
          // transform: scale(1.05);
        // }
        // .label {
          // font-family: sans-serif;
          // fill: white;
          // font-size: 14px;
          // text-anchor: middle;
          // dominant-baseline: middle;
        // }
      // </style>

      // <!-- Input -->
      // <rect class="stage" x="30" y="100" width="120" height="60" rx="10" />
      // <text class="label" x="90" y="130">Raw Message</text>

      // <!-- Arrow -->
      // <polygon points="160,130 180,120 180,140" fill="#333" />

      // <!-- NLP -->
      // <rect class="stage" x="180" y="100" width="120" height="60" rx="10" />
      // <text class="label" x="240" y="130">NLP Engine</text>

      // <polygon points="310,130 330,120 330,140" fill="#333" />

      // <!-- AI Modules -->
      // <rect class="stage" x="330" y="40" width="120" height="40" rx="10" />
      // <text class="label" x="390" y="60">Intent</text>

      // <rect class="stage" x="330" y="100" width="120" height="40" rx="10" />
      // <text class="label" x="390" y="120">Tone</text>

      // <rect class="stage" x="330" y="160" width="120" height="40" rx="10" />
      // <text class="label" x="390" y="180">Tags + TL;DR</text>

      // <!-- Output -->
      // <polygon points="460,130 480,120 480,140" fill="#333" />
      // <rect class="stage" x="480" y="100" width="120" height="60" rx="10" />
      // <text class="label" x="540" y="130">Structured Output</text>
    // </svg>
  // `;

  // container.innerHTML = svg;

  // // Możliwość interakcji – klik na etap
  // container.addEventListener("click", (e) => {
    // if (e.target.classList.contains("stage")) {
      // alert("You clicked: " + e.target.nextElementSibling.textContent.trim());
    // }
  // });
// });


// Animacja scrollowa – Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".fade-in, .slide-up").forEach(el => observer.observe(el));
