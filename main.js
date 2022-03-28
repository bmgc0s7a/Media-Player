const audios = [
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

let index = 0;
const songName = document.querySelector("#song-name");
const artistName = document.querySelector("#artist-name");
const linkAudio = document.querySelector("#link-audio");
selectSong();

function selectSong(){
    songName.textContent = audios[index].name;
    artistName.textContent = audios[index].artist;
    linkAudio.src = audios[index].uri;
    linkAudio.load();
}

function play(){
	linkAudio.play();
}
function back(){
	if(index > 0){ index--; }
    selectSong();
    play();
}
function forward(){
	if(index < audios.length-1){ index++; }
    selectSong();
    play();
}