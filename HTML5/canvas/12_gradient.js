function doFirst(){
    // 先跟 HTML 畫面產生關聯，再建事件聆聽的功能
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')

    // 格線
    if(canvas.width > canvas.height){
        range = canvas.width / 50
    }else{
        range = canvas.height / 50
    }
    context.beginPath();
    for(let i = 0; i <= range; i++){
        let interval = i * 50;

        // 水平線
        context.moveTo(           0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);        

        // 垂直線
        context.moveTo(interval,             0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 10);  
    }
    context.strokeStyle='rgba(0,0,0,0.3)';    
    context.stroke()
    // =====
    // 左邊矩形
    // let linear = context.createLinearGradient(50, 50, 450, 350);  // 斜對角漸層
    let linear = context.createLinearGradient(50, 200, 450, 200);  // 水平漸層
    linear.addColorStop(0, 'red');
    linear.addColorStop(1, 'blue');
    linear.addColorStop(0.5, 'yellow');

    context.fillStyle = linear;    
    context.fillRect(50, 50, 400, 300);

    // 右邊矩形
    let radial = context.createRadialGradient(750, 200, 70, 700, 200, 150);
    radial.addColorStop(0, 'red');
    radial.addColorStop(1, 'blue');

    context.fillStyle = radial;    
    context.fillRect(550, 50, 400, 300);

    // 左下角
    context.translate(250, 600);
    context.beginPath();

    let radius = 180
    context.lineWidth=20;
    
    // let circle = context.createRadialGradient(0, 0, radius - 7.5, 0, 0, radius + 7.5);
    let circle = context.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    circle.addColorStop(  0, '#666')
    circle.addColorStop(0.5, '#fff')
    circle.addColorStop(  1, '#666')

    context.arc(0, 0, radius, 0, 2 * Math.PI);
    context.strokeStyle=circle   
    context.stroke();
    
}
window.addEventListener('load', doFirst)
