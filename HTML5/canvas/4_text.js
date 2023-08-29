function doFirst(){
    // 先跟 HTML 畫面產生關聯，再建事件聆聽的功能
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')

    context.font='bold 50px Tahoma';

    // 第一個字
    // context.textBaseline='top | hanging | middle | alphabetic(by default) | ideographic | bottom';
    context.textBaseline='alphabetic';    
    
    // context.fillText('google', 100, 100);
    context.strokeText('google', 100, 100);
    
        // 輔助線
        context.strokeStyle = 'red';
        context.moveTo(100, 100);
        context.lineTo(300, 100);
        context.stroke();

        context.arc(100, 100, 8, 0, 2 * Math.PI);
        context.stroke();
    
    // 第二個字: 加上陰影
    context.shadowColor='red';
    context.shadowOffsetX=3;
    context.shadowOffsetY=3;
    context.shadowBlur=5;

    context.fillText('google', 100, 250);

    // 第三個字: 四邊都有陰影
    context.shadowOffsetX=0;
    context.shadowOffsetY=0;
    context.shadowBlur=15;

    context.fillStyle='#fff';    
    context.fillText('google', 100, 400);

    // 第四個字: 多重陰影
    context.shadowBlur=10;
    context.shadowColor='blue';
    context.fillText('google', 100, 550);  
      
    context.shadowColor='red';
    context.fillText('google', 100, 550);

}
window.addEventListener('load', doFirst)
