function _createModal(options){
    
   
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin',`
    
    <div class="setupMenu">

    <div class="subtitles">
        <h2>Безопасный режим <br> просмотра</h2>
    <button id="onBtn" onclick="OnBtn()">Включить</button>
    <button id="offBtn" onclick="OffBtn()">Выключить</button>
    </div>

    <!-- настроить изначальное положение ползунков, счиывать их и переносить значения в класс(сделать несколько классов с определенными настройками), настроить кнопки масштаба, перенести все на новую версию плеера(в гит лежит) -->
    <div class="color_correction">
        <h2>Цветокорекция</h2>
        <div class="slidecontainer">
            <span>яркость</span>
            <input  type="range" min="0" max="100" value="100"  class="brightness" id="brightness" oninput="change_bri()">
            <output type="range" id="brightnes_value">100%</output>
        </div>
        <div class="slidecontainer">
            <span>контраст</span>
            <input  type="range" step="10" min="0" max="100" value="50"  class="contrast_" id="contrast" oninput="contrast_value(value)">
            <output type="range" id="contrast_value">50%</output>
        </div>
        <div class="slidecontainer">
            <span>насыщенность</span>
            <input  type="range" min="1" max="100" value="50"  class="saturation" id="saturation" oninput="saturation_value(value)">
            <output type="range" id="saturation_value">50%</output>
        </div>
        <div class="slidecontainer">
            <span>резкость изображения</span>
            <input  type="range" min="1" max="100" value="50"  class="image_sharpness" id="sharpness" oninput="sharpness_value(value)">
            <output type="range" id="sharpness_value">50%</output>
        </div>
    </div>

    <div class="font_size">
        <h2>Размер интерфейса</h2>
        <div class="block-myrange">
        <input  type="range" min="1" max="100" value="50" class="slider" id="myRange">
        </div>
    </div>

    <div class="color_blindness">
        <h2>Дальтонизм</h2>
        <button onclick="normal()">По умолчанию</button>
        <button id="mon" class="mon" onclick="mon()">Монохромазия</button>
        <button id="dix" class="dix" onclick="dix()">Дихромазия</button>
        <button id="trip" class="trip" onclick="trip()">Тританопия</button>
        <button id="deit" class="deit" onclick="deit()">Дейтеранопия</button>
        <button id="prat" class="prat" onclick="prat()">Протанопия</button>
    </div>
</div>

 `)
 document.getElementById('control').appendChild(modal)
  return modal
}

$.modal = function(options){
    const $modal = _createModal(options)
    
 var prof = false
    return{
        
        open(){
            if(prof == false)
            {
                $modal.classList.add('open')
                prof = true    
                
            }else{
                $modal.classList.remove('open')
                prof = false;
            }
        },
        close(){
           
                $modal.classList.remove('open')
                prof = false;   
                    
        },
    }
}