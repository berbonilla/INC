let isRecording = false;

function toggleMic() {
    isRecording = !isRecording;
    if (isRecording) {

        console.log('Recording...');
        document.getElementById('micButton').textContent = '🔴'; 
    } else {

        console.log('Not Recording');
        document.getElementById('micButton').textContent = '⬛'; 
    }
}
