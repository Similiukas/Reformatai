//import GreenAudioPlayer from "./green-audio-player";
var Green, lastPath = "Sample song";
var Songs = [];
var Times = {};

function init(widget){
    Green = widget;
    var div = document.getElementsByClassName("Progress");
    // li.click();
    for(i = 0; i < div.length; i++){
        let name = "../Songs/Reformatai -" + div[i].children[0].innerText + ".mp3";
        Songs[i] = name;
        Times[name] = 0;
    }
}

function playAudio(element, path){
    // Green.player.volume = 0;
    if(document.getElementById("Active")) document.getElementById("Active").id = "";
    element.id = "Active";
    document.getElementsByClassName("green-audio-player")[0].style.opacity = "1";
    document.getElementsByClassName("green-audio-player")[0].style.pointerEvents = "all";
    document.getElementsByClassName("progress__pin")[0].style.pointerEvents = "all";

    // console.log("Green:",Green); // The whole green audio player class

    // If changed the song
    if(path != lastPath){
        Times[lastPath] = Green.player.currentTime; // Saving last songs time
        lastPath = path;
        Green.player.children[0].src = path;    // Putting a new song
        Green.player.children[0].SongName = path;    // Setting source attribute to the song name for switching songs
        Green.player.load();    // Loading a new song onto player
        if(Times[path] > 0){
            Green.player.currentTime = Times[path];
        }
    }
    // console.log(Green.player.duration)
    // Green.__proto__.constructor.playPlayer(Green.player); Another way to play (by calling the function)

    Times[path] = Green.player.currentTime;
    Green.playPauseBtn.click();
}

function changeSong(){
    var SongName = Green.player.children[0].SongName;   // The name of a finished song
    var index = Songs.indexOf(SongName);    // Index of that song from ordered list
    if(index + 1 < Songs.length){
        var div = document.getElementsByClassName("Progress")[index + 1]; 
    
        // Resetting values for the finished song
        Green.player.pause();
        Green.player.currentTime = 0;
        // document.getElementById("Active").style.width = 0;
    
        // Simulating the div click by playing next song
        playAudio(div, Songs[index + 1]);
    }
}