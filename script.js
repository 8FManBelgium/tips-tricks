const video = document.getElementById('introVideo');
const startButton = document.getElementById('startButton');
let firstPlaybackFinished = false;

const playWithSound = async () => {
    if (!video) return;
    video.muted = false;
    try {
        await video.play();
        if (startButton) {
            startButton.classList.add('hidden');
        }
    } catch (err) {
        console.warn('Autoplay blocked; showing start button.', err);
        video.muted = true;
        if (startButton) {
            startButton.classList.remove('hidden');
        }
    }
};

if (startButton) {
    startButton.addEventListener('click', async () => {
        startButton.classList.add('hidden');
        video.muted = false;
        try {
            await video.play();
        } catch (err) {
            console.warn('Play with sound failed:', err);
        }
    });
}

video.addEventListener('loadedmetadata', () => {
    playWithSound();
});

video.addEventListener('ended', () => {
    if (!firstPlaybackFinished) {
        firstPlaybackFinished = true;
        video.muted = true;
    }
    video.currentTime = 0;
    video.play().catch(() => {});
});