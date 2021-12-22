// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
{
  name: "Also Sprach Zarathustra - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox, MUSIC Engine",
  image: "images/concert_undertale.jpg",
  path: "songs/Also Sprach Zarathustra - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "UNDERTALE OST - Home",
  artist: "Toby Fox",
  image: "images/undertale.jpg",
  path: "songs/HomeUndertaleOST-TobyFox-4459719.flac",
},
{
  name: "Ukiyo - Friday Night Funkin': vs. Cassette Girl OST",
  artist: "Saruky",
  image: "images/cass.png",
  path: "songs/ukiyo-vscass.wav"
},
{
  name: "Genshin Impact OST - Main Theme",
  artist: "HOYO-MiX",
  image: "images/genshin-travelers.jpg",
  path: "songs/genshin-main-theme.mp3",
},
{
  name: "Doki Doki Takeover! OST - High School Conflict",
  artist: "CelShader",
  image: "images/monika_fnf.jpg",
  path: "songs/ddto-ost/High School Conflict.flac"
},
{
  name: "Doki Doki Takeover! OST - Bara No Yume",
  artist: "Kallionic",
  image: "images/monika_fnf.jpg",
  path: "songs/ddto-ost/monika bara no yume.flac"
},
{
  name: "Doki Doki Takeover! OST - Your Demise",
  artist: "CelShader",
  image: "images/monika_fnf.jpg",
  path: "songs/ddto-ost/your demise ddto.flac"
},
{
  name: "Deltarune Chapter 2 OST - A CYBER'S WORLD?",
  artist: "Toby Fox",
  image: "images/deltarune_chapter2.jpg",
  path: "songs/cyber.flac"
},
{
  name: "Friday Night Funkin': Starlight Mayhem OST - Inverted Ascension",
  artist: "TheMaskedChris",
  image: "images/starlight-mayhem.jpg",
  path: "songs/Inverted-Ascension-cj.mp3"
},
{
  name: "Friday Night Funkin': Starlight Mayhem OST - Echoes",
  artist: "TheMaskedChris",
  image: "images/starlight-mayhem.jpg",
  path: "songs/echoes-ruby.mp3"
},
{
  name: "Friday Night Funkin': Starlight Mayhem OST - Artificial Lust",
  artist: "TheMaskedChris",
  image: "images/starlight-mayhem.jpg",
  path: "songs/artificial lust.mp3"
},
{
  name: "Anticipation + Enemy Approaching - UNDERTALE 5th Anniversary",
  artist: "Toby Fox, MUSIC Engine",
  image: "images/concert_undertale.jpg",
  path: "songs/anticipation + enemy approaching.mp3"
},
{
  name: "1st Intermisson - Jingle Bell (Not Really)",
  artist: "I don't....... actually know.",
  image: "songs/the jingle bell.png",
  path: "songs/jingle bell.mp3"
},
{
  name: "Doki Doki Takeover! OST - Rain Clouds",
  artist: "Stardust Tunes",
  image: "images/ddto_after.jpg",
  path: "songs/ddto-ost/Rain Clouds.mp3"
},
{
  name: "Doki Doki Takeover! OST - My Confession",
  artist: "ClemO",
  image: "images/ddto_after.jpg",
  path: "songs/ddto-ost/My Confession.mp3"
},
{
  name: "Doki Doki Takeover! OST - My Sweets",
  artist: "ClemO",
  image: "images/ddto_after.jpg",
  path: "songs/ddto-ost/My Sweets.mp3"
},
{
  name: "Doki Doki Takeover! OST - Baka!",
  artist: "StarrieBlu",
  image: "images/ddto_after.jpg",
  path: "songs/ddto-ost/Baka!.mp3"
},
{
  name: "Doki Doki Takeover! OST - Deep Breaths",
  artist: "Saruky",
  image: "images/ddto_after.jpg",
  path: "songs/ddto-ost/Deep Breaths.mp3"
},
{
  name: "Doki Doki Takeover! OST - Obsession",
  artist: "Matt$",
  image: "images/ddto_after.jpg",
  path: "songs/ddto-ost/Obsession.mp3"
},
{
  name: "Doki Doki Takeover! OST - Reconciliation",
  artist: "HighPoweredKeyz",
  image: "images/ddto_after.jpg",
  path: "songs/ddto-ost/Reconciliation.mp3"
},
{
  name: "Phao - 2 Phut Hon (KAIZ Remix)",
  artist: "Phao, KAIZ",
  image: "images/2.png",
  path: "songs/2 phut hon.mp3"
},
{
  name: "(2nd Intermisson) UNDERTALE - Song That Might Play When You Fight Sans",
  artist: "Toby Fox",
  image: "images/undertale.jpg",
  path: "songs/song-that-might-play-when-you-fight-sans-128-72.mp3"
},
{
  name: "(Minecraft - Volume Alpha) - Beginning",
  artist: "C418",
  image: "images/minecraft.jpg",
  path: "songs/minecraft-volume-alpha/beginning-128-22.mp3"
},
{
  name: "(Minecraft - Volume Alpha) - Minecraft",
  artist: "C418",
  image: "images/minecraft.jpg",
  path: "songs/minecraft-volume-alpha/minecraft-128-8.mp3"
},
{
  name: "(Minecraft - Volume Alpha) - Sweden",
  artist: "C418",
  image: "images/minecraft.jpg",
  path: "songs/minecraft-volume-alpha/sweden-128-18.mp3"
},
{
  name: "Among Us Drip Theme Song Original",
  artist: "Among Us",
  image: "images/amogus.png",
  path: "songs/amogus.mp3"
},
{
  name: "Deltarune Chapter 2 OST - Until Next Time",
  artist: "Toby Fox",
  image: "images/deltarune_chapter2.jpg",
  path: "songs/Deltarune Chapter 2 OST! 45 - Until Next Time.flac"
}
];

function loadTrack(track_index) {
// Clear the previous seek timer
clearInterval(updateTimer);
resetValues();

// Load a new track
curr_track.src = track_list[track_index].path;
curr_track.load();

// Update details of the track
track_art.style.backgroundImage =
  "url(" + track_list[track_index].image + ")";
track_name.textContent = track_list[track_index].name;
track_artist.textContent = track_list[track_index].artist;
now_playing.textContent =
  "Playing " + (track_index + 1) + " Of " + track_list.length;

// Set an interval of 1000 milliseconds
// for updating the seek slider
updateTimer = setInterval(seekUpdate, 1000);

// Move to the next track if the current finishes playing
// using the 'ended' event
curr_track.addEventListener("ended", nextTrack);

// Apply a random background color
random_bg_color();
}

function random_bg_color() {
// Get a random number between 64 to 256
// (for getting lighter colors)
let red = Math.floor(Math.random() * 256) + 64;
let green = Math.floor(Math.random() * 256) + 64;
let blue = Math.floor(Math.random() * 256) + 64;

// Construct a color withe the given values
let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";

// Set the background to the new color
document.body.style.background = bgColor;
}

// Function to reset all values to their default
function resetValues() {
curr_time.textContent = "00:00";
total_duration.textContent = "00:00";
seek_slider.value = 0;
}

function playpauseTrack() {
// Switch between playing and pausing
// depending on the current state
if (!isPlaying) playTrack();
else pauseTrack();
}

function playTrack() {
// Play the loaded track
curr_track.play();
isPlaying = true;

// Replace icon with the pause icon
playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
// Pause the loaded track
curr_track.pause();
isPlaying = false;

// Replace icon with the play icon
playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
// Go back to the first track if the
// current one is the last in the track list
if (track_index < track_list.length - 1)
  track_index += 1;
else track_index = 0;

// Load and play the new track
loadTrack(track_index);
playTrack();
}

function prevTrack() {
// Go back to the last track if the
// current one is the first in the track list
if (track_index > 0)
  track_index -= 1;
else track_index = track_list.length - 1;
  
// Load and play the new track
loadTrack(track_index);
playTrack();
}

function seekTo() {
// Calculate the seek position by the
// percentage of the seek slider
// and get the relative duration to the track
seekto = curr_track.duration * (seek_slider.value / 100);

// Set the current track position to the calculated seek position
curr_track.currentTime = seekto;
}

function setVolume() {
// Set the volume according to the
// percentage of the volume slider set
curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
let seekPosition = 0;

// Check if the current track duration is a legible number
if (!isNaN(curr_track.duration)) {
  seekPosition = curr_track.currentTime * (100 / curr_track.duration);
  seek_slider.value = seekPosition;

  // Calculate the time left and the total duration
  let currentMinutes = Math.floor(curr_track.currentTime / 60);
  let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
  let durationMinutes = Math.floor(curr_track.duration / 60);
  let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

  // Add a zero to the single digit time values
  if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
  if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
  if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
  if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

  // Display the updated duration
  curr_time.textContent = currentMinutes + ":" + currentSeconds;
  total_duration.textContent = durationMinutes + ":" + durationSeconds;
}
}

// Load the first track in the tracklist
loadTrack(track_index);
