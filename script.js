// 1. Mouse Glow Effect (Your original liked feature)
const glow = document.createElement('div');
glow.classList.add('cursor-glow');
document.body.appendChild(glow);

document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// 2. Dynamic Typing Document Title (Your original liked feature)
const titles = [
  'Frontend Developer',
  'AI Enthusiast',
  'Problem Solver',
  'Future Innovator'
];
let titleIndex = 0;
setInterval(() => {
  document.title = titles[titleIndex] + ' | Tarun Portfolio';
  titleIndex = (titleIndex + 1) % titles.length;
}, 2000);

// 3. Reliable Dashboard Tab Switching Function
function switchTab(tabId, clickedButton) {
  // Hide all sections
  const sections = document.querySelectorAll('.tab-content');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Remove active class from all buttons
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active');
  });

  // Show the selected section
  const targetSection = document.getElementById(tabId);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  // Highlight the clicked button
  clickedButton.classList.add('active');
}