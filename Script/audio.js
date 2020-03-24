//import GreenAudioPlayer from "./green-audio-player";
var Green, lastPath = "Sample song";

var Times = {};

function init(widget){Green = widget;}

function playAudio(element, path){
    // Green.player.volume = 0;
    if(document.getElementById("Active")) document.getElementById("Active").id = "";
    element.id = "Active";
    // console.log(Times);
    // console.log(Green);
    document.getElementsByClassName("green-audio-player")[0].style.opacity = "1";
    document.getElementsByClassName("green-audio-player")[0].style.pointerEvents = "all";
    document.getElementsByClassName("progress__pin")[0].style.pointerEvents = "all";

    // console.log("Green:",Green); // The whole green audio player class
    // console.log(path);

    // If changed the song
    if(path != lastPath){
        Times[lastPath] = Green.player.currentTime; // Saving last songs time
        lastPath = path;
        Green.player.children[0].src = path;    // Putting a new song
        Green.player.load();    // Loading a new song onto player
        if(Times[path] > 0){
            Green.player.currentTime = Times[path];
        }
    }
    // console.log(Green.player.duration)
    // Green.__proto__.constructor.playPlayer(Green.player); Another way to play (by calling the function)

    Times[path] = Green.player.currentTime;
    // console.log(Times[path]);
    Green.playPauseBtn.click();
}