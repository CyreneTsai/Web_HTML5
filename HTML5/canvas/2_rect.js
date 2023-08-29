function doFirst(){
    // 先跟 HTML 畫面產生關聯，再建事件聆聽的功能
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')
    // console.log(context);

    context.fillStyle='red';
    context.strokeStyle='blue';
    

    context.fillRect(100, 100, 300, 200)
    // context.strokeRect(100, 100, 300, 200)
    context.clearRect(150, 150, 50, 50);    

    context.rect(700, 500, 300, 300);
    // context.fill();    
    context.stroke();    

    // 橡皮擦
    // context.clearRect(0, 0, canvas.width, canvas.height);
}
window.addEventListener('load', doFirst)

// 事件聆聽功能
// (包含一個物件 + 一個事件 + 一個函數)
// 1 .html <button onclick="action()">click</button>
// 2 .js 傳統的寫法
//     theButton.onclick = action;
// 3 .js W3C的推薦寫法
//     theButton.addEventListener('click', action);
