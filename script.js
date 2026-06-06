// Mouse glow effect
const glow = document.createElement('div');
glow.classList.add('cursor-glow');
document.body.appendChild(glow);

document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// Dynamic browser title
const titles = [
  'Data Engineer Aspirant',
  'Data Analyst',
  'Gemini Student Ambassador',
  'AI/ML Enthusiast',
  'Brain-to-Code Innovator'
];

let titleIndex = 0;
setInterval(() => {
  document.title = titles[titleIndex] + ' | Tarun Portfolio';
  titleIndex = (titleIndex + 1) % titles.length;
}, 2000);

// Dashboard tab switching
function switchTab(tabId, clickedButton) {
  const sections = document.querySelectorAll('.tab-content');
  sections.forEach(section => section.classList.remove('active'));

  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  const targetSection = document.getElementById(tabId);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  clickedButton.classList.add('active');
}
