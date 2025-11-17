// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('show');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Smooth scroll for same-page links
document.addEventListener('click', (e) => {
  const target = e.target;
  if (target instanceof HTMLElement && target.tagName === 'A') {
    const href = target.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
});

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Interactive Pegboard
class InteractivePegboard {
  constructor() {
    this.board = document.getElementById('pegboard');
    this.container = document.querySelector('.pegboard-container');
    this.clearBtn = document.getElementById('clearConnections');
    this.resetBtn = document.getElementById('resetImages');
    this.addPegBtn = document.getElementById('addRandomPeg');
    this.connectionCount = document.getElementById('connectionCount');
    this.currentTimeEl = document.getElementById('currentTime');
    
    this.pegs = [];
    this.connections = [];
    this.selectedPeg = null;
    this.isDrawing = false;
    this.isDragging = false;
    this.dragOffset = { x: 0, y: 0 };
    this.originalPositions = new Map();
    
    this.init();
  }
  
  init() {
    this.createPegs();
    this.setupMovableImages();
    this.bindEvents();
    this.updateConnectionCount();
    this.updateTime();
    this.applyTimeTheme();
    
    // Update time every minute
    setInterval(() => {
      this.updateTime();
      this.applyTimeTheme();
    }, 60000);
  }
  
  createPegs() {
    const gridSize = 100; // Bigger grid spacing
    const cols = 10; // Fixed 10 columns
    const rows = 10; // Fixed 10 rows
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const peg = this.createPeg(col * gridSize + gridSize/2, row * gridSize + gridSize/2);
        this.pegs.push(peg);
        this.board.appendChild(peg);
      }
    }
  }
  
  createPeg(x, y) {
    const peg = document.createElement('div');
    peg.className = 'peg';
    peg.style.left = x + 'px';
    peg.style.top = y + 'px';
    peg.dataset.x = x;
    peg.dataset.y = y;
    
    return peg;
  }
  
  setupMovableImages() {
    const images = this.board.querySelectorAll('.movable-image');
    
    // Set initial random positions
    images.forEach((img, index) => {
      const x = 50 + (index * 200) % (this.board.offsetWidth - 160);
      const y = 50 + (index * 120) % (this.board.offsetHeight - 160);
      
      img.style.left = x + 'px';
      img.style.top = y + 'px';
      
      // Store original position
      this.originalPositions.set(img, { x, y });
    });
  }
  
  bindEvents() {
    // Clear connections
    this.clearBtn.addEventListener('click', () => {
      this.clearConnections();
    });
    
    // Reset images
    this.resetBtn.addEventListener('click', () => {
      this.resetImages();
    });
    
    // Add random peg
    this.addPegBtn.addEventListener('click', () => {
      this.addRandomPeg();
    });
    
    // Double click to clear
    this.board.addEventListener('dblclick', () => {
      this.clearConnections();
    });
    
    // Mouse events for peg connections
    this.board.addEventListener('mousedown', (e) => {
      if (e.target.classList.contains('peg')) {
        this.startConnection(e.target);
      }
    });
    
    this.board.addEventListener('mousemove', (e) => {
      if (this.selectedPeg && this.isDrawing) {
        this.updatePreview(e);
      }
    });
    
    this.board.addEventListener('mouseup', (e) => {
      if (this.selectedPeg && e.target.classList.contains('peg') && e.target !== this.selectedPeg) {
        this.createConnection(this.selectedPeg, e.target);
      }
      this.endConnection();
    });
    
    // Touch events for mobile
    this.board.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const element = document.elementFromPoint(touch.clientX, touch.clientY);
      
      if (element && element.classList.contains('peg')) {
        this.startConnection(element);
      } else if (element && element.closest('.movable-image')) {
        this.startDrag(element.closest('.movable-image'), touch);
      }
    });
    
    this.board.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (this.isDragging && e.touches[0]) {
        this.updateDrag(e);
      }
    });
    
    this.board.addEventListener('touchend', (e) => {
      e.preventDefault();
      const touch = e.changedTouches[0];
      const element = document.elementFromPoint(touch.clientX, touch.clientY);
      
      if (this.selectedPeg && element && element.classList.contains('peg') && element !== this.selectedPeg) {
        this.createConnection(this.selectedPeg, element);
      }
      this.endConnection();
      this.endDrag();
    });
    
    // Mouse events for image dragging
    this.board.addEventListener('mousedown', (e) => {
      if (e.target.closest('.movable-image')) {
        this.startDrag(e.target.closest('.movable-image'), e);
      }
    });
    
    document.addEventListener('mousemove', (e) => {
      if (this.isDragging) {
        this.updateDrag(e);
      }
    });
    
    document.addEventListener('mouseup', () => {
      this.endDrag();
    });
  }
  
  startConnection(peg) {
    this.selectedPeg = peg;
    this.isDrawing = true;
    peg.classList.add('active');
  }
  
  endConnection() {
    if (this.selectedPeg) {
      this.selectedPeg.classList.remove('active');
      this.selectedPeg = null;
    }
    this.isDrawing = false;
    this.clearPreview();
  }
  
  updatePreview(e) {
    this.clearPreview();
    
    const rect = this.board.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const line = document.createElement('div');
    line.className = 'connection-line preview';
    
    const startX = parseFloat(this.selectedPeg.dataset.x) + 5; // Center of peg
    const startY = parseFloat(this.selectedPeg.dataset.y) + 5;
    
    const length = Math.sqrt((x - startX) ** 2 + (y - startY) ** 2);
    const angle = Math.atan2(y - startY, x - startX) * 180 / Math.PI;
    
    line.style.left = startX + 'px';
    line.style.top = startY + 'px';
    line.style.width = length + 'px';
    line.style.transform = `rotate(${angle}deg)`;
    line.style.opacity = '0.6';
    
    this.board.appendChild(line);
  }
  
  clearPreview() {
    const previews = this.board.querySelectorAll('.preview');
    previews.forEach(preview => preview.remove());
  }
  
  createConnection(peg1, peg2) {
    // Check if connection already exists
    const exists = this.connections.some(conn => 
      (conn.from === peg1 && conn.to === peg2) || 
      (conn.from === peg2 && conn.to === peg1)
    );
    
    if (exists) return;
    
    const line = document.createElement('div');
    line.className = 'connection-line';
    
    const x1 = parseFloat(peg1.dataset.x) + 5;
    const y1 = parseFloat(peg1.dataset.y) + 5;
    const x2 = parseFloat(peg2.dataset.x) + 5;
    const y2 = parseFloat(peg2.dataset.y) + 5;
    
    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    
    line.style.left = x1 + 'px';
    line.style.top = y1 + 'px';
    line.style.width = length + 'px';
    line.style.transform = `rotate(${angle}deg)`;
    
    this.board.appendChild(line);
    
    // Store connection
    this.connections.push({
      from: peg1,
      to: peg2,
      element: line
    });
    
    this.updateConnectionCount();
  }
  
  clearConnections() {
    this.connections.forEach(conn => {
      conn.element.remove();
    });
    this.connections = [];
    this.updateConnectionCount();
  }
  
  startDrag(element, event) {
    this.isDragging = true;
    this.draggedElement = element;
    
    const rect = this.board.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    
    // Handle both mouse and touch events
    const clientX = event.clientX || (event.touches && event.touches[0].clientX);
    const clientY = event.clientY || (event.touches && event.touches[0].clientY);
    
    this.dragOffset = {
      x: clientX - elementRect.left,
      y: clientY - elementRect.top
    };
    
    element.style.zIndex = '20';
    element.style.cursor = 'grabbing';
  }
  
  updateDrag(event) {
    if (!this.isDragging || !this.draggedElement) return;
    
    const rect = this.board.getBoundingClientRect();
    
    // Handle both mouse and touch events
    const clientX = event.clientX || (event.touches && event.touches[0].clientX);
    const clientY = event.clientY || (event.touches && event.touches[0].clientY);
    
    const x = clientX - rect.left - this.dragOffset.x;
    const y = clientY - rect.top - this.dragOffset.y;
    
    // Constrain to board boundaries
    const constrainedX = Math.max(0, Math.min(x, this.board.offsetWidth - this.draggedElement.offsetWidth));
    const constrainedY = Math.max(0, Math.min(y, this.board.offsetHeight - this.draggedElement.offsetHeight));
    
    this.draggedElement.style.left = constrainedX + 'px';
    this.draggedElement.style.top = constrainedY + 'px';
  }
  
  endDrag() {
    if (this.draggedElement) {
      this.draggedElement.style.zIndex = '15';
      this.draggedElement.style.cursor = 'grab';
      this.draggedElement = null;
    }
    this.isDragging = false;
  }
  
  resetImages() {
    const images = this.board.querySelectorAll('.movable-image');
    images.forEach(img => {
      const originalPos = this.originalPositions.get(img);
      img.style.left = originalPos.x + 'px';
      img.style.top = originalPos.y + 'px';
    });
  }
  
  addRandomPeg() {
    const x = Math.random() * (this.board.offsetWidth - 20);
    const y = Math.random() * (this.board.offsetHeight - 20);
    const peg = this.createPeg(x, y);
    this.pegs.push(peg);
    this.board.appendChild(peg);
  }
  
  updateConnectionCount() {
    this.connectionCount.textContent = this.connections.length;
  }
  
  updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
    this.currentTimeEl.textContent = timeString;
  }
  
  applyTimeTheme() {
    const hour = new Date().getHours();
    let theme = 'theme-night';
    
    if (hour >= 6 && hour < 12) {
      theme = 'theme-morning';
    } else if (hour >= 12 && hour < 18) {
      theme = 'theme-day';
    } else if (hour >= 18 && hour < 21) {
      theme = 'theme-evening';
    }
    
    // Remove existing theme classes
    this.container.classList.remove('theme-morning', 'theme-day', 'theme-evening', 'theme-night');
    // Add new theme class
    this.container.classList.add(theme);
  }
}

// Initialize pegboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new InteractivePegboard();
});





