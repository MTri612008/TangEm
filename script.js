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
function eatHeart() {
  const lighter = document.createElement('div')
  lighter.className = 'lighter'
  document.body.appendChild(lighter)
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
    let isCatDragging = false
    let catOffsetX = 0; 
    let catOffsetY = 0;
    
   const catdance = document.querySelector('.DancingCat')
    catdance.addEventListener('mousedown', (e) => {
      const speech1 = document.querySelector('.Speech1')
      const speech2 = document.querySelector('.Speech2')
      try {
         speech1.remove()
      speech2.remove()
      }catch{}
     
      console.log(catOffsetX)
     isCatDragging = true;
    catOffsetX = e.clientX - catdance.offsetLeft
    catOffsetY = e.clientY - catdance.offsetTop;
      
    })


    document.addEventListener("mousemove", (e) => {
      if (!isCatDragging) return;
      catdance.style.left = e.clientX - catOffsetX + "px";
      catdance.style.top = e.clientY - catOffsetY + "px";
    });

document.addEventListener("mouseup", () => {
      if (!isCatDragging) return;
      isCatDragging = false;
      
  
});
    
    //mobile
    catdance.addEventListener("touchstart", (e) => { 
       const speech1 = document.querySelector('.Speech1')
      const speech2 = document.querySelector('.Speech2')
      try {
         speech1.remove()
      speech2.remove()
      }catch{}
      const touch = e.touches[0];
      isCatDragging = true;
      catOffsetX = touch.clientX - catdance.offsetLeft;
      catOffsetY = touch.clientY - catdance.offsetTop;
      catdance.style.transition = "none";

    })
     document.addEventListener("touchmove", (e) => {
      if (!isCatDragging) return;
      const touch = e.touches[0];
      catdance.style.left = touch.clientX - catOffsetX + "px";
      catdance.style.top = touch.clientY - catOffsetY + "px";
    });

    document.addEventListener("touchend", () => {
      if (!isCatDragging) return;
      isCatDragging = false;
      catdance.style.transition = "top 0.3s ease, left 0.3s ease";
      resetToCenter();
      setTimeout(() => {
      document.querySelector('.randomPics').remove()
    }, 200);
    });


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
function createRandomPics() {
  let count=0
  const img = [
    'src/dth.PNG',
    'src/chidep1.jpg',
    'src/chidep2.jpg',
    'src/chidep3.jpg',
    'src/chidep4.jpg',
    'src/chidep5.jpg',
    'src/chidep6.jpg',
    'src/chidep7.jpg',
    'src/chidep8.jpg',
    'src/chidep9.jpg',
    'src/chidep10.jpg',
    'src/chidep11.jpg',
    'src/chidep12.jpg',
    'src/chidep13.jpg',
    'src/chi3.jpg',
    'src/embe.jpg',
    'src/dudauz.jpg',
    'src/vc.jpg'
  ]
  const cats = [
    'src/cat.gif',
    'src/cat-cute.gif',
    'src/meoo.gif',
    'src/fun.gif'
  ]
  const randomIndex = Math.floor(Math.random() * img.length);
  const randomcat = Math.floor(Math.random() * cats.length);
  const Pics = document.createElement('div')
  const cat = document.createElement('div')
  const bordercat = document.createElement('div')
  bordercat.className='borderCat'
  cat.style.backgroundImage=`url(${cats[randomcat]})`;
  cat.className='cat'
  Pics.className = 'randomPics'
  Pics.style.backgroundImage = `url(${img[randomIndex]})`;
  Pics.appendChild(cat)
   Pics.appendChild(bordercat)
  document.body.appendChild(Pics)
  
  Pics.addEventListener("click", () => {
    count++
    const randomIndex = Math.floor(Math.random() * img.length);
    const randomcat = Math.floor(Math.random() * cats.length);
    cat.style.backgroundImage=`url(${cats[randomcat]})`;
    Pics.style.backgroundImage = `url(${img[randomIndex]})`;
  createHeartPics()
  Pics.style.width = '150px'
  Pics.style.height = '150px'
  document.querySelector('.PicsHeart').appendChild(Pics)
  Pics.style.position="absolute"
    Pics.style.left = '35%'
    if (count >=2) {
     
      let ranPics = document.querySelectorAll('.picsSize')
for (let pics of ranPics) {
  pics.remove()
      }
      createHeartPics()
    }
  })

}
  
function createHeartPics() {
  const heart = document.querySelector(".PicsHeart");
  const img = [
    'src/dth.PNG',
    'src/chidep1.jpg',
    'src/chidep2.jpg',
    'src/chidep3.jpg',
    'src/chidep4.jpg',
    'src/chidep5.jpg',
    'src/chidep6.jpg',
    'src/chidep7.jpg',
    'src/chidep8.jpg',
    'src/chidep9.jpg',
    'src/chidep10.jpg',
    'src/chidep11.jpg',
    'src/chidep12.jpg',
    'src/chidep13.jpg',
    'src/chi3.jpg',
    'src/embe.jpg',
    'src/dudauz.jpg',
    'src/vc.jpg'
  ]
  
  // Số lượng ảnh muốn xếp trên viền trái tim
  const N = 20;

  for (let i = 0; i < N; i++) {
    const t = Math.PI - (2 * Math.PI * i) / (N); // trải đều quanh tim

    // Công thức trái tim
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

    // scale + dịch tâm vào giữa khung
    const scale = 20;
    const centerX = 250; // nửa width .heart
    const centerY = 225; // nửa height .heart
    const posX = centerX + x  ;
    const posY = centerY - y; // đảo trục Y
    const div = document.createElement("div");
    div.className = "randomPics picsSize";
     div.style.transition = "all 1s ease";
    div.style.left = posX + "px";
    div.style.top = posY + "px";

    // gán ảnh ngẫu nhiên
    const randomImg = img[Math.floor(Math.random() * img.length)];
    div.style.backgroundImage = `url(${randomImg})`;

    heart.appendChild(div);
    setTimeout(() => {
       div.style.left = (centerX + x *scale) + "px";
    div.style.top = (centerX - y  *scale )+ "px";
    }, 100);
  }
}
const BigHeartBt = document.querySelector('.bigHeart')


const heart = document.querySelector(".PicsHeart");
  function resetToCenter() {
      const centerX = (window.innerWidth - BigHeartBt.offsetWidth) / 2;
      const centerY = (window.innerHeight - BigHeartBt.offsetHeight) / 2;
      BigHeartBt.style.left = centerX + "px";
      BigHeartBt.style.top = centerY + "px";
}
function CenterPicsHeart() {
       const centerX = (window.innerWidth - heart.offsetWidth) / 2;
      const centerY = (window.innerHeight - heart.offsetHeight) /2;
      heart.style.left = centerX + "px";
      heart.style.top = centerY + "px";
    }
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
    eatHeart()
   // createHeartPics()
    CenterPicsHeart()
    setInterval(createHeart, 400);
  setInterval(createLoveImg, 400); 
  setInterval(createMyLovelyImg, 5400);
  setInterval(createSECMyLovelyImg, 5400);
    setInterval(CreateCat, 10000)
   
    
  },{ once: true })
let isDragging = false;
let offsetX = 0, offsetY = 0;
let startX = BigHeartBt.offsetLeft, startY = BigHeartBt.offsetTop;
let eventCount = 0



BigHeartBt.addEventListener("mousedown", (e) => {
  
  console.log(BigHeartBt.offsetLeft+" "+BigHeartBt.offsetTop)
  isDragging = true;
  offsetX = e.clientX - BigHeartBt.offsetLeft
  offsetY = e.clientY - BigHeartBt.offsetTop;
  BigHeartBt.style.transition = "none"; // tắt animation khi đang kéo
  
     createRandomPics()

 
})
   document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      BigHeartBt.style.left = e.clientX - offsetX + "px";
      BigHeartBt.style.top = e.clientY - offsetY + "px";
    });

document.addEventListener("mouseup", () => {
      eventCount++
      if (!isDragging) return;
      isDragging = false;
      // khi thả ra, quay về vị trí cũ
      BigHeartBt.style.transition = "top 0.3s ease, left 0.3s ease";
  resetToCenter(); // về giữa khi thả
   setTimeout(() => {
      document.querySelector('.randomPics').remove()
   }, 200);
  if (eventCount >= 15) {
    BigHeartBt.style.pointerEvents = "none";
    BigHeartBt.style.transition = "all 3s ease";
    createRandomPics()
    setTimeout(() => {
       BigHeartBt.style.animation = "blow 3s ease-in-out"
    
    BigHeartBt.classList.add('heartFade')
    
    }, 5000);
  }
  
});
    

// ==== Mobile (cảm ứng) ====
    BigHeartBt.addEventListener("touchstart", (e) => {
      const touch = e.touches[0];
      isDragging = true;
      offsetX = touch.clientX - BigHeartBt.offsetLeft;
      offsetY = touch.clientY - BigHeartBt.offsetTop;
      BigHeartBt.style.transition = "none";
      createRandomPics()
      BigHeartBt.classList.remove("clicked");
    void BigHeartBt.offsetWidth;
    BigHeartBt.classList.add("clicked")
    const audio = document.getElementById('audioCute')
    audio.play()
     addDacingCat()
     addSpeech1()
     addSpeech2()
    eatHeart()
   // createHeartPics()
    CenterPicsHeart()
    setInterval(createHeart, 400);
  setInterval(createLoveImg, 400); 
  setInterval(createMyLovelyImg, 5400);
  setInterval(createSECMyLovelyImg, 5400);
    setInterval(CreateCat, 10000)
    });

    document.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      BigHeartBt.style.left = touch.clientX - offsetX + "px";
      BigHeartBt.style.top = touch.clientY - offsetY + "px";
    });

    document.addEventListener("touchend", () => {
      if (!isDragging) return;
      isDragging = false;
      BigHeartBt.style.transition = "top 0.3s ease, left 0.3s ease";
      resetToCenter();
      setTimeout(() => {
      document.querySelector('.randomPics').remove()
    }, 200);
    });

window.addEventListener("resize", resetToCenter);
  window.addEventListener("resize", CenterPicsHeart);