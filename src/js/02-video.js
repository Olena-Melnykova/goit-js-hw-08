import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const options = {
  id: 236203659,
  width: 640,
};

const player = new Player("vimeo-player", options);

player.on("timeupdate", throttle(onPlay, 1000));

setCurrentTime();

function onPlay({ seconds }) {
  localStorage.setItem("videoplayer-current-time", seconds);
}

function setCurrentTime() {
  const currentTime = localStorage.getItem('videoplayer-current-time');

  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}

