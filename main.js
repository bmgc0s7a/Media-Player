const audios = [ //array with songs' data
    {
        name: "Cat Vibing",
        artist: "Ievan Polkka",
        duration: 22,
        uri: "audio/cat_vibing.mp3"
    },
    {
        name: "Creative Minds",
        artist: "Benjamin Tissot",
        duration: 147,
        uri: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3"
    },
    {
        name: "A New Beginning",
        artist: "Bensound",
        duration: 154,
        uri: "https://www.bensound.com/bensound-music/bensound-anewbeginning.mp3"
    }
];
//global variable declaration here
let index = 0, isAudioActive = false, isReplayActive = false;
const songName = document.querySelector("#song-name");
const artistName = document.querySelector("#artist-name");
const linkAudio = document.querySelector("#link-audio");
const btnPause = document.querySelector("#btnPause");
const btnPlay = document.querySelector("#btnPlay");
const btnReplay = document.querySelector("#btnReplay");
const btnMute = document.querySelector("#btnMute");
const btnSoundOn = document.querySelector("#btnSoundOn");
const progressBar = document.querySelector("#progressBar");
//calling methods at start
selectSong();
loop();
//background methods
function loop(){
    const width = document.getElementById("progressBarBack").offsetWidth;
    const fracSongTime = linkAudio.currentTime / audios[index].duration;
    progressBar.setAttribute("style", `width: ${width*fracSongTime}px`);
    if(width*fracSongTime >= width){ forward(); }
    setTimeout(loop, 250);
}
function selectSong(){
    songName.textContent = audios[index].name;
    artistName.textContent = audios[index].artist;
    linkAudio.src = audios[index].uri;
    linkAudio.load();
}
    //functions to show / hide buttons
function btnReplayShowing(){
    btnPlay.classList.add("hidden"); 
    btnPause.classList.add("hidden"); 
    btnReplay.classList.remove("hidden");
}
function btnPlayShowing(){
    btnPlay.classList.remove("hidden"); 
    btnPause.classList.add("hidden"); 
    btnReplay.classList.add("hidden");
}
function btnPauseShowing(){
    btnPlay.classList.add("hidden"); 
    btnPause.classList.remove("hidden"); 
    btnReplay.classList.add("hidden");
}
function btnMuteShowing(){
    btnMute.classList.remove("hidden");
    btnSoundOn.classList.add("hidden");
}
function btnSoundOnShowing(){
    btnMute.classList.add("hidden");
    btnSoundOn.classList.remove("hidden");
}
//methods triggered by buttons
function play(){
    if(!isAudioActive) {
        linkAudio.play(); 
        isAudioActive = true; 
        btnPauseShowing();
    }
	else {linkAudio.pause(); 
        isAudioActive = false; 
        btnPlayShowing();
    }
}
function back(){
    if(isReplayActive){
        btnPlayShowing();
        isReplayActive = false;
    }
    if(index > 0){ 
        index--; 
        if(isAudioActive){
            linkAudio.play();
        }
    }
    selectSong();
}
function forward(){
	if(index < audios.length-1){ 
        index++; 
        selectSong(); 
        if(isAudioActive){
            linkAudio.play();
        }
    }
    else{
        linkAudio.pause();
        linkAudio.currentTime = 0;
        isAudioActive = false; 
        isReplayActive = true;
        btnReplayShowing();
    }
}
function mute() {
    linkAudio.muted = true;
    btnMuteShowing();
}
function soundOn() {
    linkAudio.muted = false;
    btnSoundOnShowing()
}
function replay(){
    index = 0; 
    selectSong(); 
    linkAudio.play(); 
    isAudioActive = true;
    isReplayActive = false;
    btnPauseShowing();
}