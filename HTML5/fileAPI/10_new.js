function doFirst(){
    // 先跟 HTML 畫面產生關聯，再建事件聆聽的功能
    document.getElementById('theFile').onchange = fileChange;
}
function fileChange(){ 
    let file = document.getElementById('theFile').files[0]

    let readFile = new FileReader()
    readFile.readAsDataURL(file)
    readFile.addEventListener('load', function(){
        let image = new Image()
        image.src = readFile.result
        image.style.width = '100%'
        image.style.height = '100%'

        let skin = document.getElementById('skin')
        skin.innerHTML = ''
        skin.appendChild(image)
    })
}
window.addEventListener('load',doFirst)