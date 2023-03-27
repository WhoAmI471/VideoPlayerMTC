document.querySelector('#play').onclick = play;
document.querySelector('#pause').onclick = pause;
document.querySelector('#fullScreen').onclick = fullScreen;
document.querySelector('#volumeRange').oninput = videoVolume;


const root = document.querySelector(':root');


var video = document.getElementById('myVideo');
var video2 = document.getElementById('myVideo_flow2');
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');

// содержат в себе время, в секундах первого потока и второго
var progress1 = 0; // первый
var progress2 = 0; // второй

// флаг для проверки, Был запущен плеер с начала или нет
var isPlay = false;

progress = document.querySelector('#progress');

video.ontimeupdate = progressUpdate;
video2.ontimeupdate = progressUpdate2;
progress.onclick = videoRewind;

// флаг, чтобы функция не срабатывала много раз за секунду
let flashHandled = false; 


let count1 = 0;
let count2 = 0;

// проверяет второй поток, и накладывает фильтр на первый, 
// если значение яркости превысило допустимое.
video2.addEventListener('timeupdate', function() {
  context.drawImage(video2, 0, 0, canvas.width, canvas.height);

  var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  var brightness = calculateBrightness(imageData);

  if (brightness > 150 && !flashHandled) {
    flashHandled = true;
    count1 += 2;
    handleFlash();
  } else if (brightness < 150 && flashHandled) {
    if (count1 == count2) {
      DelitBlur();
      flashHandled = false
    } else{
      count2++;
    }
  }
});


function play() {
  // если плеер был запущен с самого начала, то первый поток запускаем с задержкой в с.
  if (!isPlay) {
    // video.play();
    video2.play();
    video2.volume = 0;
    
    setTimeout(function() {
      video.play()
      }, 
      500
    );
    isPlay = true;
  } else { // иначе, запускаем два потока одновременно
    video.play()
    video2.play();
  }

  root.style.setProperty("--pl", `${0}px`);
  root.style.setProperty("--pa", `${30}px`);
}


function pause() {
  video.pause();
  video2.pause();

  root.style.setProperty("--pa", `${0}px`);
  root.style.setProperty("--pl", `${30}px`);

}

function fullScreen() {
}

function videoVolume() {
  let v = this.value;
  video.volume = v / 100;
}

function progressUpdate(){ // для первого потока
  let dur = video.duration;
  let cur = video.currentTime;

  progress.value = (100 * cur) / dur;
  
  progress1 = progress.value;

  console.log("1: " + progress1);

  var hours = Math.floor(progress1 / 60 / 60);
  var minutes = Math.floor(progress1 / 60) - (hours * 60);
  var seconds = Math.round(progress1 % 60);
  
  
  var formatted = hours + ':' + minutes + ':' + seconds;

  document.querySelector('#timeout').innerHTML = `${formatted}`;
}

function progressUpdate2(){ // для второго потока
  progress2 = (100 * video2.currentTime) / video2.duration;
  
  console.log("2: " + progress2);
  
  var hours2 = Math.floor(progress2 / 60 / 60);
  var minutes2 = Math.floor(progress2 / 60) - (hours2 * 60);
  var seconds2 = Math.round(progress2 % 60);
  
  var formatted2 = hours2 + ':' + minutes2 + ':' + seconds2;

  document.querySelector('#timeout2').innerHTML = `${formatted2}`;
}

function videoRewind() {
  let w = this.offsetWidth;
  let o = event.offsetX;
    
  this.value = 100 * o / w;

  // video.pause();
  video.currentTime = video.duration * (o/w);
  video2.currentTime = video.duration * (o/w) + 0.5;
  // video2.play();
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
  
  if(!flashHandled){
    return;
  }
    console.log("ОПАСНО")
    var videoWrapper = document.querySelector('.video');
    videoWrapper.classList.add('contrast');
}

function DelitBlur() {
  var videoWrapper = document.querySelector('.video');
  videoWrapper.classList.remove('contrast');
}

