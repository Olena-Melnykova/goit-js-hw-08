import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");
const player = new Vimeo.Player(iframe);

player.on("timeupdate", throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem("videoplayer-current-time", seconds);
}

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
