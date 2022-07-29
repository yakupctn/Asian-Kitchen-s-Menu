const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

window.onload = (event) => {
  const btns = document.querySelector('.btn-container')
  let choice = ['All', 'Korea', 'Japan', 'China']
  choice.forEach(item => {
    btns.innerHTML += `<button class="btn btn-outline-dark btn-item" value="${item}"> ${item} </button>`
  })

  menu.forEach(item =>{
    createDiv(item.img, item.title, item.price, item.desc)
  })
}

const row = document.querySelector('.row')
const btns = document.querySelector('.btn-container')

function createDiv(src,title,price,desc){
  const div1 = document.createElement('div')
  div1.className = 'menu-items col-lg-6 col-sm-12'
  row.appendChild(div1)

  const img = document.createElement('img')
  img.setAttribute('src',src)
  img.setAttribute('alt',title)
  img.className = 'photo' 
  div1.appendChild(img)

  const divInfo = document.createElement('div')
  divInfo.className = 'menu-info'
  div1.appendChild(divInfo)

  const divTitle = document.createElement('div')
  divTitle.className = 'menu-title'
  divInfo.appendChild(divTitle)

  const h4One = document.createElement('h4')
  h4One.appendChild(document.createTextNode(title))
  divTitle.appendChild(h4One)

  const h4Two = document.createElement('h4')
  h4Two.className = 'price'
  h4Two.appendChild(document.createTextNode(price))
  divTitle.appendChild(h4Two)

  const divText = document.createElement('div')
  divText.className = 'menu-text'
  divText.appendChild(document.createTextNode(desc))
  divInfo.appendChild(divText)
}

btns.addEventListener('click',function(event){
  if(event.target.value === 'All'){
    row.innerHTML = ''
    menu.forEach(item =>{
      createDiv(item.img, item.title, item.price, item.desc)
  })
  }

  if(event.target.value === 'Korea'){
    row.innerHTML = ''
    let foodKorea = menu.filter(item => item.category === 'Korea')
    foodKorea.forEach(item => {
      createDiv(item.img, item.title, item.price, item.desc)
    })
    console.log(foodKorea)
  }

  if(event.target.value === 'Japan'){
    row.innerHTML = ''
    let foodJapan = menu.filter(item => item.category === 'Japan')
    foodJapan.forEach(item => {
      createDiv(item.img, item.title, item.price, item.desc)
    })
    console.log(foodJapan)
  }

  if(event.target.value === 'China'){
    row.innerHTML = ''
    let foodChina = menu.filter(item => item.category === 'China')
    foodChina.forEach(item => {
      createDiv(item.img, item.title, item.price, item.desc)
    })
    console.log(foodChina)
  }
})





