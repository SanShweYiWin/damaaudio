//UI
const openbtn = document.getElementById('open');

const modal = document.getElementById('modal');
const  closebtn = document.getElementById('close');

const musiccontainer = document.getElementById('music-container');

const title = document.getElementById('title'),
    progresscontainer = document.getElementById('progress-container'),
    progress = document.getElementById('progress');

const audio = document.getElementById('audio');

const cover = document.getElementById('cover');

const prevbtn = document.getElementById('prev'),
    playbtn = document.getElementById('play'),
    nextbtn = document.getElementById('next');

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//Show Modal
openbtn.addEventListener('click' , ()=>{
    modal.classList.add('showmodal');
});

//Close Modal
closebtn.addEventListener('click' , ()=>{
    modal.classList.remove('showmodal');
});

window.addEventListener('click',(e)=>e.target === modal ? modal.classList.remove('showmodal') : false);

//Even Listener for play/pause
playbtn.addEventListener('click' , ()=>{
    //console.log('hay');
    const isplaying = musiccontainer.classList.contains('play');

    if(isplaying){
        pausesong();
    }else{
        playsong();
    }
});

//Play Song
function playsong() {
    musiccontainer.classList.add('play');

    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}


// Pause Song
function pausesong() {
    musiccontainer.classList.remove('play');

    playbtn.querySelector('i.fas').classList.add('fa-play');
    playbtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}