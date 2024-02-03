
let arra = [
    {
      img: "./tour-1.jpeg",
      tag:"$2,695",
      topic:"Best Of Paris In 7 Days Tour",
      para:"Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days",

  
    },
    {
      img: "./tour-2.jpeg",
      tag:"$1,695",
      topic:"Best Of Ireland In 14 Days Tour",
      para:"Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
   
  
    },
    {
      img: "./tour-3.jpeg",
      tag:"$2,695",
      topic:"Best Of Salzburg & Vienna In 8 Days Tour",
      para:"Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days.",
 
    },
    {
      img: "./tour-4.jpeg",
      tag:"$2,695",
      topic:"Best Of Rome In 7 Days Tour",
      para:"Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days",
   
  
    },
    {
      img: "./tour-5.jpeg",
      tag:"$2,695",
      topic:"Best Of Poland In 10 Days Tour",
      para:"Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
     
    },
    {
      img: "./tour-5.jpeg",
      tag:"$2,695",
      topic:"Best Of Poland In 10 Days Tour",
      para:"Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
     
    },

   
  ];const cont = document.getElementById("container");
  let cardsContainer = document.getElementById("main");
  
  for (let i = 0; i < arra.length; i++) {
    const truncatedPara = truncateText(arra[i].para, 150); // Truncate the text to 100 characters
  
    cardsContainer.innerHTML += `
      <div class="card" onclick="redirectToPage('http://127.0.0.1:5500/card%20design/index2.html')">
        <div class="outer">
          <img class="pic" src="${arra[i].img}" alt="image">
          <div id="small">${arra[i].tag}</div>
        </div>
  
        <h2 class="topic">${arra[i].topic}</h2>
  
        <div id="para-container-${i}" class="para-container">
          <p id="para-${i}" class="truncated-para">${truncatedPara}</p>
          <button class="see-more-btn" data-index="${i}" onclick="toggleText(${i})">See More</button>
        </div>
        <button class="btn">Not interested</button>
      </div>`;
  }
  
  let btns = document.querySelectorAll('.btn');
  let h1 = document.getElementById("h1");
  let tours = document.getElementById("tours");
  
  function truncateText(text, limit) {
    return text.length > limit ? `${text.substring(0, limit)}...` : text;
  }
  
  function toggleText(index) {
    const paraContainer = document.getElementById(`para-container-${index}`);
    const paraElement = document.getElementById(`para-${index}`);
    const seeMoreBtn = document.querySelector(`.see-more-btn[data-index="${index}"]`);
  
    if (paraElement.classList.contains('truncated-para')) {
      paraElement.innerHTML = arra[index].para;
      paraElement.classList.remove('truncated-para');
      seeMoreBtn.textContent = 'See Less';
    } else {
      paraElement.innerHTML = truncateText(arra[index].para, 150);
      paraElement.classList.add('truncated-para');
      seeMoreBtn.textContent = 'See More';
    }
  }
  
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
      let tro = btns[i].closest('.card');
      if (tro) {
        tro.remove();
      }
  
      if (cardsContainer.children.length === 0) {
        tours.style.display = "none";
        h1.style.display = "none";
        cardsContainer.style.display = "flex";
        cardsContainer.style.gap = "1rem";
        cardsContainer.innerHTML = `
          <div id="new">
            <h1>No Tours Available</h1>
            <button id="refresh">Refresh</button>
          </div>`;
  
        document.getElementById("refresh").addEventListener("click", () => {
          showLoadingAnimation();
  
          setTimeout(() => {
            refreshPage();
          }, 2000);
        });
      }
    });
  }
  
  function showLoadingAnimation() {
    h1.textContent = "Loading...";
 cardsContainer.style.display="flex";
 cardsContainer.style.flexDirection = "column";
      cardsContainer.innerHTML +=`
      <img id="gif" src="./giphy.gif" alt="img">
   
      `
    };
   

  function refreshPage() {
    location.reload();
  }
  





















// let ref=document.createElement("refresh").addEventListener("click",()=>{
// location.reload();
// })

// ref.addEventListener("click",()=>{
//   location.reload();
//   console.log("hey");
// })










// href="http://127.0.0.1:5500/card%20design/"





