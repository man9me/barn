const sounds = ['Aria']


// Reference the File collection of the Text directory
 var FileCollection = Folder.Files;

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound


    btn.addEventListener('click',()=>{
        stopSongs()
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)


})

function stopSongs () {
    sounds.forEach(sound=>
        {
            const song = document.getElementById(sound)
            song.pause()
            song.currentTime = 0;
        })
}

function files(){

    var files = fs.readdirSync('sound/');
    files.forEach((file)=> { console.log(file)})

}