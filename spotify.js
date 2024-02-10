console.log("welcome to spotify");
let songIndex = 0;
let audioElement = new Audio("song1.mp3");
let masterplay = document.getElementById('masterplay')
let myprogressBar = document.getElementById('myprogressBar')
let gif = document.getElementById('gif')
let songs = [
    {songname: "",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songname: "",filePath: "song/2.mp3",coverPath: "covers/2.jpg"},
    {songname: "",filePath: "song/3.mp3",coverPath: "covers/3.jpg"},
    {songname: "",filePath: "song/4.mp3",coverPath: "covers/4.jpg"},
    {songname: "",filePath: "song/5.mp3",coverPath: "covers/5.jpg"},
    {songname: "",filePath: "song/6.mp3",coverPath: "covers/6.jpg"},
    {songname: "",filePath: "song/7.mp3",coverPath: "covers/7.jpg"},
    {songname: "",filePath: "song/10.mp3",coverPath: "covers/10.jpg"},
    
]
masterplay.addEventListener('click',()=>{
    console.log("working");
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause(); 
        masterplay.classList.remove('fa-pause-circle')
        masterplay.classList.add('fa-play-circle')
        gif.style.opacity = 0;

    }
})
audioElement.addEventListener('timeupdate',() => {
    console.log('timeupdate') 
    Progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myprogressBar.value = Progress
})
myprogressBar.addEventListener('change', ()=>
{
    audioElement.currentTime = myprogressBar.value*audioElement.duration/100
})
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click',(e) => {
        makeAllPlays();
        songindex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = songs/$(songindex+1).mp3
        audioElement.currentTime = 0;
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
        
     })   
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
