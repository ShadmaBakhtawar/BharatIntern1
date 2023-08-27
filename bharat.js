
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
        // Add user's own video to the page
        const userVideo = document.createElement('video');
        userVideo.srcObject = stream;
        userVideo.autoplay = true;
        document.getElementById('video-grid').appendChild(userVideo);

        // Toggle audio
        const toggleAudioButton = document.getElementById('toggle-audio');
        toggleAudioButton.addEventListener('click', () => {
            stream.getAudioTracks().forEach(track => {
                track.enabled = !track.enabled;
            });
        });

        // Toggle video
        const toggleVideoButton = document.getElementById('toggle-video');
        toggleVideoButton.addEventListener('click', () => {
            stream.getVideoTracks().forEach(track => {
                track.enabled = !track.enabled;
            });
        });
    })
    .catch(error => {
        console.error('Error accessing user media:', error);
    });


const participantList = document.getElementById('participant-list');

// Function to add a participant to the list
function addUserVideoStream(stream) {
    const userVideo = document.createElement('video');
    userVideo.srcObject = stream;
    userVideo.autoplay = true;
    const videoContainer = document.createElement('div');
    videoContainer.appendChild(userVideo);
    videoGrid.appendChild(videoContainer);
}

function addParticipant(username) {
    const participantItem = document.createElement('li');
    participantItem.innerHTML = `
        <div class="participant-avatar">${username.charAt(0)}</div>
        <div class="participant-name">${username}</div>
    `;
    participantList.appendChild(participantItem);
}
// Simulate participants joining and leaving


setTimeout(() => {
    addParticipant('Zain Joined');
}, 4000);
setTimeout(() => {
    addParticipant('Umair Joined');
}, 4000);
setTimeout(() => {
    addParticipant('Salma Joined');
}, 4000);
setTimeout(() => {
    addParticipant('Hammad Joined');
}, 4000);
setTimeout(() => {
    addParticipant('Khadija Joined');
}, 4000);
setTimeout(() => {
    addParticipant('Uzma Joined');
}, 4000);
setTimeout(() => {
    addParticipant('Ilma Joined');
}, 4000);
