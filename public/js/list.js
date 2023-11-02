const menu = [
    {
      id: 1,
      title: "Harry Potter Wizarding War",
      category: "Game",
      price: "Game",
      img: "/img/hp.png",
      desc: `Harry Potter & Lord Voldemort Battle - Dymension Edition!
      Order of the Phoenix on one side, Death Eaters on the other! We will decide who wins.`,
      link: "https://hp-dym.vercel.app/"
    },
    {
      id: 2,
      title: "Lord of The Rings",
      category: "Game",
      price: "Game",
      img: "/img/lotr.png",
      desc: `Lord of The Rings has come to Dymension!
      Join us on this adventure and let's go to Middle-Earth together to destroy Sauron.`,
      link: "https://lotr-dymension.vercel.app/"
    },
    {
      id: 3,
      title: "F*ck Gensler",
      category: "Game",
      price: "Game",
      img: "/img/gensler.png",
      desc: `We created a wonderful game for ecosystem to relax. If you are tired of bear market; you can kick Gensler's ass in our dapp.`,
      link: "https://dymensionguardians.vercel.app/"
    },
    {
      id: 4,
      title: "Buy a Drink",
      category: "Social",
      price: "Social",
      img: "/img/drinks.png",
      desc: `A social club where you can buy each other drinks. Coming very soon..`,
      link: "#"
  }
  ];
  
  
  
  
  // HTML öğelerini seçer
  const btnContainer = document.querySelector(".btn-container");
  const listMenu = document.querySelector(".section-center");
  
  // Menü öğeleri için bir dizi oluşturur
  let listItems = "";
  
  // Dizideki her öğe için HTML kodu oluşturur
  menu.forEach((element) => {
    listItems += `
      <div class="menu-items col-lg-6 col-sm-12">
        <img src="${element.img}" class="photo">
        <div class="menu-info">
          <div class="menu-title">
            <h4>${element.title}</h4>
            <h5 class="price">${element.price}</h5>
          </div>
          <div class="menu-text">${element.desc}</div>
          <div>
          <a href="${element.link}" style="text-decoration: none;" target="_blank" class="text-dark"><button class="btn btn-primary btn-lg"><strong>  GO  </strong></button></a>
          </div>
        </div>
      </div>`;
  });
  
  // Menü öğelerini sayfaya ekler
  listMenu.innerHTML = listItems;
  
  // Düğmeler için bir dizi oluşturur
  const buttons = [
    { id: "All", text: "All" },
    { id: "Game", text: "Game" },
    { id: "Social", text: "Social" },
    { id: "DeFi", text: "DeFi" }
  ];
  
  
  // Düğmeler için HTML kodu oluşturur
  const buttonItems = buttons
    .map((button) => `<button id="${button.id}">${button.text}</button>`)
    .join("");
  
  
  
  // Düğmeleri sayfaya ekler
  btnContainer.innerHTML = buttonItems;
  
  
  // Düğmelere tıklanınca menü öğelerini filtreler
  btnContainer.addEventListener("click", (e) => 
  {
    if (e.target.tagName === "BUTTON") 
    {
      const id = e.target.id;
      const filteredItems = menu.filter((item) => item.category === id || id === "All");
      const filteredItemsHTML = filteredItems
        .map((item) => 
        `
          <div class="menu-items col-lg-6 col-sm-12">
            <img src="${item.img}" class="photo">
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h5 class="price">${item.price}</h5>
              </div>
              <div class="menu-text">${item.desc}</div>
              <div>
              <a href="${item.link}" style="text-decoration: none;" target="_blank" class="text-dark"><button class="btn btn-primary btn-lg"><strong>  GO  </strong></button></a>
              </div>
            </div>
          </div>
        `
        )
        .join("");
      listMenu.innerHTML = filteredItemsHTML;
    }
  });