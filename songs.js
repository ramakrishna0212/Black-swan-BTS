document.addEventListener("DOMContentLoaded", function() {
    var audioPlayer = new Audio();
    var playPauseButton = document.getElementById("play-pause-btn");
    var backButton = document.getElementById("back-btn");
    var forwardButton = document.getElementById("forward-btn");
    var currentSongIndex = 0;
    var skipMessage = document.getElementById("skip-message");

    function playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % songList.children.length;
        var nextSong = songList.children[currentSongIndex];
        var songSrc = nextSong.getAttribute("data-src");
        if (songSrc) {
            audioPlayer.src = songSrc;
            audioPlayer.play();
            playPauseButton.innerHTML = "&#9658;";
        }
    }

    function displaySkipMessage(message) {
        skipMessage.textContent = message;
        skipMessage.style.display = "block";
        setTimeout(function() {
            skipMessage.style.display = "none";
        }, 2000);
    }

    playPauseButton.addEventListener("click", function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audioPlayer.pause();
            playPauseButton.innerHTML = "&#9658;";
        }
    });

    backButton.addEventListener("click", function() {
        audioPlayer.currentTime -= 5;
        displaySkipMessage("Skipped back 5 seconds");
    });

    forwardButton.addEventListener("click", function() {
        audioPlayer.currentTime += 5;
        displaySkipMessage("Skipped forward 5 seconds");
    });

    var songLists = document.querySelectorAll(".audiosplayer ul");
    songLists.forEach(function(songList) {
        songList.addEventListener("click", function(event) {
            var target = event.target;
            if (target.classList.contains("play-button")) {
                var listItem = target.parentNode;
                currentSongIndex = Array.from(songList.children).indexOf(listItem);
                var songSrc = listItem.getAttribute("data-src");
                if (songSrc) {
                    audioPlayer.src = songSrc;
                    audioPlayer.play();
                    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
                }
            }
        });
    });

    audioPlayer.addEventListener("ended", function() {
        playNextSong();
    });

    audioPlayer.volume = 0.5;

    var volumeBar = document.getElementById("volume-bar");
    volumeBar.addEventListener("input", function() {
        audioPlayer.volume = volumeBar.value;
    });

    var storedSongIndex = sessionStorage.getItem("currentSongIndex");
    if (storedSongIndex !== null) {
        currentSongIndex = parseInt(storedSongIndex);
        var storedSongSrc = sessionStorage.getItem("currentSongSrc");
        if (storedSongSrc !== null) {
            audioPlayer.src = storedSongSrc;
            audioPlayer.currentTime = parseFloat(sessionStorage.getItem("currentTime"));
            if (!audioPlayer.paused) {
                playPauseButton.innerHTML = "&#9646;&#9646; Pause";
            }
        }
    }

    window.addEventListener("beforeunload", function() {
        sessionStorage.setItem("currentSongIndex", currentSongIndex);
        sessionStorage.setItem("currentSongSrc", audioPlayer.src);
        sessionStorage.setItem("currentTime", audioPlayer.currentTime);
    });

    if (audioPlayer.src) {
        audioPlayer.play();
    }
});
