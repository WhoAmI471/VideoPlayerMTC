document.querySelector('#play').onclick = play;
document.querySelector('#pause').onclick = pause;
document.querySelector('#fullScreen').onclick = fullScreen;
document.querySelector('#volumeRange').oninput = videoVolume;


const root = document.querySelector(':root');


var video = document.getElementById('myVideo');
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
var timebar = document.getElementById('timebar');

// video = document.querySelector('#video');
// progress = document.querySelector('#progress');

video.ontimeupdate = progressUpdate;
progress.onclick = videoRewind;


video.addEventListener('timeupdate', function() {
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  var brightness = calculateBrightness(imageData);

  if (brightness > 150) {
    handleFlash();
  } else {
    setTimeout(DelitBlur,15000)
  }
});


function play() {
  video.play();

  root.style.setProperty("--pl", `${0}px`);
  root.style.setProperty("--pa", `${30}px`);
}


function pause() {
  video.pause();
  root.style.setProperty("--pa", `${0}px`);
  root.style.setProperty("--pl", `${30}px`);

}

function fullScreen() {
}

function videoVolume() {
  let v = this.value;
  video.volume = v / 100;
}

function progressUpdate(){
  let dur = video.duration;
  let cur = video.currentTime;

  progress.value = (100 * cur) / dur;
}

function videoRewind() {
  let w = this.offsetWidth;
  let o = event.offsetX;
    
  this.value = 100 * o / w;

  // video.pause();
  video.currentTime = video.duration * (o/w);
  // video.play();
}

function calculateBrightness(imageData) {
  var pixels = imageData.data;
  var brightness = 0;

  for (var i = 0; i < pixels.length; i += 4) {
    brightness += (pixels[i] + pixels[i+1] + pixels[i+2]) / 3;
  }

  return brightness / (imageData.width * imageData.height);
}

function handleFlash() {
  // Действия при обнаружении яркой вспышки света
  console.log("ОПАСНО")
  
  var videoWrapper = document.querySelector('.video');
  videoWrapper.classList.add('contrast');
}

function DelitBlur() {
  var videoWrapper = document.querySelector('.video');
  videoWrapper.classList.remove('contrast');
}

