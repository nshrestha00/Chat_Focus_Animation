const container = document.getElementById('container');
const boxCount = 6;

for (let i = 0; i < boxCount; i++) {
  const chatBox = document.createElement('div');
  chatBox.className = 'chat-box';
  chatBox.innerHTML = `
    <div class="inner-box"></div>
    <div class="message">
      <div class="circle"></div>
      <div class="message-line"></div>
    </div>
  `;
  container.appendChild(chatBox);
}

function updateFocus() {
  const boxes = document.querySelectorAll('.chat-box');
  const windowHeight = window.innerHeight;
  const centerPoint = windowHeight / 2;
  
  boxes.forEach(box => {
    const rect = box.getBoundingClientRect();
    const boxCenter = rect.top + (rect.height / 2);
    const distanceFromCenter = Math.abs(centerPoint - boxCenter);
    
    // Tighter activation zone for more precise focus
    if (distanceFromCenter < 70) {
      box.classList.add('active');
    } else {
      box.classList.remove('active');
    }
  });
}

// Added smooth scrolling behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Enhanced scroll handling
let scrollTimeout;
window.addEventListener('scroll', () => {
  if (scrollTimeout) {
    window.cancelAnimationFrame(scrollTimeout);
  }
  scrollTimeout = window.requestAnimationFrame(updateFocus);
});

// Initial update
updateFocus();
