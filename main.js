const audios = [
    {
        name: "Cat Vibing",
        artist: "Ievan Polkka",
        duration: 22,
        img: "https://i.ytimg.com/vi/NUYvbT6vTPs/maxresdefault.jpg",
        uri: "audio/cat_vibing.mp3"
    },
    {
        name: "Creative Minds",
        artist: "Benjamin Tissot",
        duration: 147,
        img: "https://www.bensound.com/bensound-img/creativeminds.jpg",
        uri: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3"
    },
    {
        name: "A New Beginning",
        artist: "Bensound",
        duration: 154,
        img: "https://i1.sndcdn.com/artworks-000577426286-6p1jsj-t500x500.jpg",
        uri: "https://www.bensound.com/bensound-music/bensound-anewbeginning.mp3"
    }
];

let index = 0, isActive = false;
const songName = document.querySelector("#song-name");
const artistName = document.querySelector("#artist-name");
const linkAudio = document.querySelector("#link-audio");
const btnPause = document.querySelector("#btnPause");
const btnPlay = document.querySelector("#btnPlay");
const btnMute = document.querySelector("#btnMute");
const btnSoundOn = document.querySelector("#btnSoundOn");
const progressBar = document.querySelector("#progressBar");
const diskimg = document.querySelector('#discImg');
selectSong();
loop();

function loop(){
    if(isActive){
        const audio = document.getElementById("link-audio");
        const width = document.getElementById("progressBarBack").offsetWidth;
        diskimg.classList.add("animation-rotate");
        console.log(width);
        const fracSongTime = linkAudio.currentTime / audios[index].duration;
        const progBarWidth = "width:" + width*fracSongTime + "px";
        progressBar.setAttribute("style", progBarWidth);
        console.log(audio.currentTime); console.log(fracSongTime);
        if(width*fracSongTime >= width){
            forward();
        }
    }
    setTimeout(loop, 500);
}

function selectSong(){
    songName.textContent = audios[index].name;
    artistName.textContent = audios[index].artist;
    linkAudio.src = audios[index].uri;
    if(audios[index].img) diskimg.style.backgroundImage = `url(${audios[index].img})`;
    linkAudio.load();
}

function play(){
    if(!isActive) {linkAudio.play(); isActive = true; btnPlay.classList.add("hidden"); btnPause.classList.remove("hidden");(diskimg.classList.contains('animation-rotate-pause')) ? diskimg.classList.remove('animation-rotate-pause') : ''}
	else {linkAudio.pause(); isActive = false; btnPlay.classList.remove("hidden"); btnPause.classList.add("hidden");diskimg.classList.add("animation-rotate-pause")}
}

function back(){
	if(index > 0){ index--; }
    selectSong();
    linkAudio.play();
}
function forward(){
	if(index < audios.length-1){ index++; }
    selectSong();
    linkAudio.play();
}

function mute() {
    linkAudio.muted = true;
    btnMute.classList.remove("hidden");
    btnSoundOn.classList.add("hidden");
}

function soundOn() {
    linkAudio.muted = false;
    btnMute.classList.add("hidden");
    btnSoundOn.classList.remove("hidden");
}