// Load the first track in the tracklist
loadTrack(track_index);
const countdown = () => {
	const countDate = new Date("December 30, 2021 20:30:00").getTime();
	const now = new Date().getTime();
	const gap = countDate - now;

	const textDay = Math.floor(gap / (1000 * 60 * 60 * 24));
	const textHour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const textMinute = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
	const textSecond = Math.floor((gap % (1000 * 60)) / 1000);

	document.querySelector(".day").innerText = textDay;
	document.querySelector(".hour").innerText = textHour;
	document.querySelector(".minute").innerText = textMinute;
	document.querySelector(".second").innerText = textSecond;	
};

setInterval(countdown, 1000);
