(()=>{
 const audio=document.querySelector('#music'),button=document.querySelector('#soundButton');
 let playing=false,attempted=false;
 function syncButton(){
  playing=!audio.paused;
  button.setAttribute('aria-label',playing?'Pause music':'Play music');
  button.innerHTML=playing?'♫ <span>Playing</span>':'♫ <span>Music</span>';
 }
 async function startMusic(){
  if(attempted&&playing)return;
  attempted=true;
  try{await audio.play();syncButton();}
  catch{button.title='Your browser blocked autoplay. Tap to start the music.';}
 }
 // Try immediately. If the browser requires a gesture, resume on the visitor's first interaction.
 startMusic();
 const resume=(event)=>{if(button.contains(event.target))return;if(audio.paused)startMusic()};
 document.addEventListener('pointerdown',resume,{once:true});
 document.addEventListener('keydown',resume,{once:true});
 button.addEventListener('click',async()=>{
  if(!audio.paused){audio.pause();syncButton();return}
  attempted=false;await startMusic();
 });
 audio.addEventListener('play',syncButton);audio.addEventListener('pause',syncButton);
})();
