// Get user ID from URL (e.g., ?user=f1)
const params = new URLSearchParams(window.location.search);
const userId = params.get('user') || 'Anonymous';

// Display user ID
document.getElementById('user-id').textContent = `You are logged in as: ${userId}`;

// Chat box
const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');

// Mock chat messages (local simulation)
const messages = [];

// Function to render chat
function renderChat() {
  chatBox.innerHTML = '';
  messages.forEach(msg => {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.innerHTML = `<span class="user">${msg.user}:</span> ${msg.text}`;
    chatBox.appendChild(messageDiv);
  });
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
}

// Send message event
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const messageText = messageInput.value.trim();
  if (messageText) {
    messages.push({ user: userId, text: messageText });
    messageInput.value = '';
    renderChat();
  }
});
