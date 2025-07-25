function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    const randomMath = (Math.random() * 40 + 20) + 'px';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.width = randomMath
    heart.style.height = randomMath
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000); // Xóa trái tim sau 5 giây
  }
  function createLoveImg(){
    const randomMath = (Math.random() * 30 + 10) + 'px';
    const Img = document.createElement('div');
    Img.className = 'MyLove';
    Img.style.left = Math.random() * 100 + 'vw';
    Img.style.width = randomMath
    Img.style.height = randomMath
    Img.style.animationDuration = (Math.random() * 3 + 2) + 's';

    document.body.appendChild(Img);

    setTimeout(() => {
        Img.remove();
    }, 7000); 
  }
  function addDacingCat(){
    const Sleepycat = document.querySelector('.SleepyCat')
    const Speech = document.querySelector('.Speech')
    Sleepycat.remove();
    Speech.remove()
    const DancingCat = document.createElement('div')
    DancingCat.className = 'DancingCat'
     document.body.appendChild(DancingCat);
  }
  function addSpeech1(){
    const Speech1 = document.createElement('div')
    Speech1.className = 'Speech1'
    document.body.appendChild(Speech1);
    setTimeout(() => {
        Speech1.remove();
    }, 15000); 
  }
function addSpeech2(){
    const Speech2 = document.createElement('div')
    Speech2.className = 'Speech1 Speech2'
    document.body.appendChild(Speech2);
   
  }
  function addSpeech3(){
    const Speech3 = document.createElement('div')
    const para = document.createElement('p')
    Speech3.className = 'Speech3'
    para.className="ReadyOrNot"
    para.textContent="BÂY GIỜ THÌ...BREAK MY HEART"
    Speech3.appendChild(para)
    document.body.appendChild(Speech3);
  }
  function CreateCat(){
    const randomMath = (Math.random() * 80 + 60) + 'px';
    const Img = document.createElement('div');
    Img.className = 'flyingCat';
    Img.style.top = Math.random() * 100 + 'vw';
    Img.style.width = randomMath
    Img.style.height = randomMath
    Img.style.animationDuration = (Math.random() * 4 + 3) + 's';

    document.body.appendChild(Img);

    setTimeout(() => {
        Img.remove();
    }, 20000); 
  }


  function createMyLovelyImg(){
    const randomMath = (Math.random() * 70 + 50) + 'px';
    const Img = document.createElement('div');
    Img.className = 'MyLovely';
    Img.style.left = Math.random() * 100 + 'vw';
    Img.style.width = randomMath
    Img.style.height = randomMath
    Img.style.animationDuration = (Math.random() * 3 + 2) + 's';

    document.body.appendChild(Img);

    setTimeout(() => {
        Img.remove();
    }, 7000); 
  }

  function createSECMyLovelyImg(){
    const randomMath = (Math.random() * 70 + 50) + 'px';
    const Img = document.createElement('div');
    Img.className = 'MyLovely2';
    Img.style.left = Math.random() * 100 + 'vw';
    Img.style.width = randomMath
    Img.style.height = randomMath
    Img.style.animationDuration = (Math.random() * 3 + 2) + 's';

    document.body.appendChild(Img);

    setTimeout(() => {
        Img.remove();
    }, 7000); 
  }
  const BigHeartBt = document.querySelector('.bigHeart')
  //heart click event
  BigHeartBt.addEventListener('click',()=>{
    BigHeartBt.classList.remove("clicked");
    void BigHeartBt.offsetWidth;
    BigHeartBt.classList.add("clicked")
    const audio = document.getElementById('audioCute')
    audio.play()
     addDacingCat()
     addSpeech1()
     addSpeech2()
     
    setInterval(createHeart, 400);
  setInterval(createLoveImg, 400); 
  setInterval(createMyLovelyImg, 5400);
  setInterval(createSECMyLovelyImg, 5400);
  setInterval(CreateCat,10000)

  },{ once: true })

  

  