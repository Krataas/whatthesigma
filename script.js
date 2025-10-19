const playlist=['song1.mp3','song2.mp3','song3.mp3'];
let songIndex=0;
const audio=document.getElementById('audioPlayer');
const src=document.getElementById('audioSource');
function initAudio(){
  src.src=playlist[songIndex]; audio.load();
  document.addEventListener('click', function once(){
    audio.play().catch(()=>{}); document.removeEventListener('click', once);
  },{once:true});
}
audio.addEventListener('ended', ()=>{
  songIndex=(songIndex+1)%playlist.length;
  src.src=playlist[songIndex]; audio.load(); audio.play();
});

const full="Chúc các bạn nữ DD10A luôn xinh đẹp, tràn đầy năng lượng và thành công trong mọi lĩnh vực! Ngày 20/10 vui vẻ nhé!";
const textEl=document.getElementById('typedText');
const mistakes=[{at:16,wrong:'D',correct:'C'},{at:17,wrong:'D',correct:'T'},{at:28,wrong:'nis',correct:'inh'},{at:42,wrong:'dadsy',correct:'đầy'},{at:110,wrong:'ehs',correct:'hé'},{at:113,wrong:'toi dep chai',correct:''}];
let ti=0,mi=0;
function typeWriter(){
  if(mi<mistakes.length && ti===mistakes[mi].at){
    typeError(mistakes[mi++]);return;
  }
  if(ti<full.length){
    textEl.textContent+=full.charAt(ti++);
    setTimeout(typeWriter,40+Math.random()*40);
  }else setTimeout(()=>document.querySelector('.cursor')?.remove(),500);
}
function typeError({wrong,correct}){
  let w=0;
  (function tw(){
    if(w<wrong.length) textEl.textContent+=wrong[w++],setTimeout(tw,80);
    else setTimeout(te,450);
  })();
  function te(){
    if(w>0) textEl.textContent=textEl.textContent.slice(0,-1),w--,setTimeout(te,50);
    else setTimeout(tc,300);
  }
  let c=0;
  function tc(){
    if(c<correct.length) textEl.textContent+=correct[c++],ti++,setTimeout(tc,80);
    else setTimeout(typeWriter,100);
  }
}

function makeSakura(){
  const cont = document.querySelector('.sakura-container');
  for(let i=0;i<60;i++){ 
    const e = document.createElement('div');
    e.className = 'sakura';
    e.style.left = (Math.random()*100)+'vw';
    e.style.top = '-30px';
    e.style.fontSize = (25 + Math.random()*25) + 'px'; 
    e.style.opacity = (0.5 + Math.random()*0.5).toString();
    e.style.animationDuration = (1.6+Math.random()*2)+'s';
    e.style.animationDelay = (Math.random()*1.8)+'s';
    e.innerHTML = '&#127800;'; 
    cont.appendChild(e);
  }
  setTimeout(()=>{
    cont.style.transition='opacity 0.6s';
    cont.style.opacity=0;
    setTimeout(()=>{
      cont.remove();
      document.getElementById('mainContent').classList.remove('hidden');
      document.getElementById('mainContent').classList.add('show');
      typeWriter();
    },600);
  },3000);
}
function startHeartParticles() {
  let cont = document.querySelector('.heart-container');
  if(!cont) { 
    cont = document.createElement('div');
    cont.className = 'heart-container';
    document.body.appendChild(cont);
  }
  setInterval(()=>{
    const e = document.createElement('div');
    e.className = 'heart';
    e.innerHTML = '❤️';
    e.style.left = (8 + Math.random()*84) + 'vw';
    e.style.bottom = '-28px';
    e.style.fontSize = (13 + Math.random()*7) + 'px';
    e.style.opacity = (0.7 + Math.random()*0.3).toString();
    e.style.animationDuration = (1.7 + Math.random()*1.6) + 's';
    cont.appendChild(e);
    setTimeout(()=>{ if(e.parentNode) e.parentNode.removeChild(e); }, 2500);
  }, 160 + Math.random()*180);
}

window.addEventListener('DOMContentLoaded', ()=>{
  initAudio();
  makeSakura();
  startHeartParticles();
  document.body.addEventListener('touchstart',()=>{
    const v=document.getElementById('bgVideo');
    if(v.paused)v.play();
  },{once:true});
});