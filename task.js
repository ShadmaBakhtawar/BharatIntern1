const tasksList = document.getElementById('tasks');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const chatMessages = document.getElementById('chat');
const messageInput = document.getElementById('message-input');
const sendMessageButton = document.getElementById('send-message');

// Add a new task
addTaskButton.addEventListener('click', () => {
    const taskText = newTaskInput.value;
    if (taskText.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        tasksList.appendChild(taskItem);
        newTaskInput.value = '';
    }
});

// Send a message
sendMessageButton.addEventListener('click', () => {
    const messageText = messageInput.value;
    if (messageText.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.textContent = messageText;
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
    }
});
const postFeed = document.getElementById('post-feed');
const postContent = document.getElementById('post-content');
const postButton = document.getElementById('post-button');

postButton.addEventListener('click', () => {
    const content = postContent.value;
    if (content.trim() !== '') {
        const timestamp = new Date().toLocaleString();
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <p class="post-content">${content}</p>
            <p class="post-timestamp">${timestamp}</p>
        `;
        postFeed.prepend(postElement);
        postContent.value = '';
    }
});
