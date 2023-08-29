function doFirst(){
    // 先跟 HTML 畫面產生關聯
    myMovie = document.getElementById('myMovie');
    playButton = document.getElementById('playButton');
    defaultBar = document.getElementById('defaultBar');
    progress = document.getElementById('progress');

    barsize = parseInt(window.getComputedStyle(defaultBar).width)
    // alert(barsize)

    // 再建事件聆聽的功能
    playButton.addEventListener('click', playOrPause);
    myMovie.addEventListener('click', playOrPause);
    defaultBar.addEventListener('click', clicked);

    // 全螢幕
    // fullButton.addEventListener('click', function(){
    //     myMovie.webkitEnterFullScreen();
    // });

}
function playOrPause(){
    if(!myMovie.paused && !myMovie.ended){  // 影片正在播放中
        myMovie.pause()
        playButton.innerText = 'Play';
    }else{
        myMovie.play()
        playButton.innerText = 'pause';
        setInterval(update, 300);
    }
}
function update(){
    if(!myMovie.ended){
        let size = barsize / myMovie.duration * myMovie.currentTime
        progress.style.width = `${size}px`
    }else{
        progress.style.width = `0px`
        playButton.innerText = 'Play'
        myMovie.currentTime = 0
    }
}
function clicked(e){
    let mouserX = e.pageX - defaultBar.offsetLeft
    progress.style.width = `${mouserX}px`

    let newTime = mouserX / (barsize / myMovie.duration)
    myMovie.currentTime = newTime
}
window.addEventListener('load',doFirst)

// 635px / 92sec ==> 6.9px/sec * 假設跑到第 10sec ==> 69px