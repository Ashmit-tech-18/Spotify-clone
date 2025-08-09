document.addEventListener('DOMContentLoaded', function() {
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = document.getElementById('playIcon');
    const progressBar = document.getElementById('progressBar');
    const currentTimeElem = document.getElementById('currentTime');
    const durationElem = document.getElementById('duration');
    const volumeControl = document.getElementById('volumeControl');

    // For demonstration, we'll create a dummy audio element.
    // In a real application, you would load actual song files.
    const audio = new Audio();
    audio.src = 'assets/song1.mp3';

    let isPlaying = false;

    function togglePlayPause() {
        if (isPlaying) {
            audio.pause();
            playIcon.classList.remove('bi-pause-fill');
            playIcon.classList.add('bi-play-fill');
        } else {
            audio.play();
            playIcon.classList.remove('bi-play-fill');
            playIcon.classList.add('bi-pause-fill');
        }
        isPlaying = !isPlaying;
    }

    function updateProgress() {
        const { duration, currentTime } = audio;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.value = progressPercent;

        // Update time display
        currentTimeElem.textContent = formatTime(currentTime);
        if (duration) {
            durationElem.textContent = formatTime(duration);
        }
    }

    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;

        audio.currentTime = (clickX / width) * duration;
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function setVolume() {
        audio.volume = volumeControl.value / 100;
    }

    // Event Listeners
    playPauseBtn.addEventListener('click', togglePlayPause);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateProgress);
    progressBar.addEventListener('click', setProgress);
    volumeControl.addEventListener('input', setVolume);

    // Sidebar hover effect for content margin
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('main');

    sidebar.addEventListener('mouseenter', () => {
        if (window.innerWidth > 768) {
            mainContent.style.marginLeft = '280px';
        }
    });

    sidebar.addEventListener('mouseleave', () => {
        if (window.innerWidth > 768) {
            mainContent.style.marginLeft = ''; // Reverts to CSS default
        }
    });
});