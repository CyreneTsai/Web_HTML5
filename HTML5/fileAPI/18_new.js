function doFirst(){
    // 先跟 HTML 畫面產生關聯，再建事件聆聽的功能
    document.getElementById('dropzone').ondragover = dragOver;
    document.getElementById('dropzone').ondrop = dropped;
}
function dragOver(e){
    e.preventDefault()
}
function dropped(e){
    e.preventDefault()
    
    let files = e.dataTransfer.files

    let readFile = new FileReader()

    for(let i = 0; i < files.length; i++){
        readFile.readAsDataURL(files[i])
        readFile.addEventListener('load', function(){
            // 動態新增圖片<img>
            let image = document.createElement('img')
            image.src = readFile.result

            let dropzone = document.getElementById('dropzone')
            // dropzone.appendChild(image)
            dropzone.insertBefore(image, dropzone.firstChild)
        })
    }

}
window.addEventListener('load',doFirst)