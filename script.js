const arrowLeft = document.getElementById('arrowLeft')
const arrowRight = document.getElementById('arrowRight')
const activePhoto = document.getElementById('activePhoto')
const photo1 = document.getElementById('photo1')
const photo2 = document.getElementById('photo2')
const photo3 = document.getElementById('photo3')
const photo4 = document.getElementById('photo4')
const photo5 = document.getElementById('photo5')
const tab1 = document.getElementById('tab1')
const tab2 = document.getElementById('tab2')
const tab3 = document.getElementById('tab3')
const tabInfo = document.getElementById('tabInfo')
const nightCount = document.getElementById('nightCount')
const priceText = document.getElementById('priceText')
const priceNumber = document.getElementById('priceNumber')
const offerContainer = document.getElementById('offerContainer')
const buyBtn = document.getElementById('buyBtn')


const getPhoto = num => `url(./pics/alps${num}.jpg)`

const showPhoto = num => activePhoto.style.backgroundImage = getPhoto(num)

arrowRight.addEventListener('click', photoRight)
arrowLeft.addEventListener('click', photoLeft)
photo1.addEventListener('click', () => showPhoto(1))
photo2.addEventListener('click', () => showPhoto(2))
photo3.addEventListener('click', () => showPhoto(3))
photo4.addEventListener('click', () => showPhoto(4))
photo5.addEventListener('click', () => showPhoto(5))
tab1.addEventListener('click', showTab1Info)
tab2.addEventListener('click', showTab2Info)
tab3.addEventListener('click', showTab3Info)
buyBtn.addEventListener('click', fetchData)


let num = 1



let offers = [
    { id: 0, text: "1 nakvynė su pusryčiais ir slidinėjimo bilietas 1 dienai", price: 69, nights: "1 nakvynė" },
    { id: 1, text: "2 nakvynės su pusryčiais ir slidinėjimo bilietas 2 dienoms", price: 169, nights: "2 nakvynės" },
    { id: 2, text: "3 nakvynės su pusryčiais ir slidinėjimo bilietas 3 dienoms", price: 269, nights: "3 nakvynės" },
    { id: 3, text: "4 nakvynės su pusryčiais ir slidinėjimo bilietas 4 dienoms", price: 369, nights: "4 nakvynės" }
]

let myId

showOffers()

function showOffers() {

    offers.map(item => {
        let card = document.createElement('div')
        card.classList.add('d-flex')
        card.classList.add('offerWithPrice')
        card.id = item.id
        card.addEventListener('click', updateCard)

        let cardText = document.createElement('div')
        cardText.innerText = item.text

        let offerPrice = document.createElement('div')
        offerPrice.id = `priceToPay${item.id}`
        offerPrice.innerText = `${item.price}€`

        card.appendChild(cardText)
        card.appendChild(offerPrice)

        offerContainer.appendChild(card)

    })

}

function updateCard(event) {
    console.log(event.path[1].id);
    nightCount.innerHTML = `<i class="far fa-clock"></i> ${offers[event.path[1].id].nights}`
    priceText.innerText = `Kaina`
    priceNumber.innerText = `${offers[event.path[1].id].price}€`
    myId = event.path[1].id
    let cards = document.querySelectorAll('.offerWithPrice')
    cards.forEach(item => {
        item.classList.remove('activeOffer')
    })
    event.path[1].classList.add('activeOffer')
}



function photoRight() {
    num = num + 1
    if (num > 6) {
        num = 1
    }

    activePhoto.style.backgroundImage = showPhoto(num)
}

function photoLeft() {
    num = num - 1
    if (num < 1) {
        num = 6
    }

    activePhoto.style.backgroundImage = showPhoto(num)
}

function showTab1Info() {
    tab1.classList.add('actve')
    tab2.classList.remove('actve')
    tab3.classList.remove('actve')
    tabInfo.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere velit nulla iure quas ab sapiente voluptatem explicabo. Vitae voluptate pariatur aliquam? Sequi omnis, saepe nesciunt soluta quisquam vero aperiam officia eligendi tempore non velit hic blanditiis. Enim ratione quibusdam eveniet.`
}

function showTab2Info() {
    tab2.classList.add('actve')
    tab1.classList.remove('actve')
    tab3.classList.remove('actve')
    tabInfo.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium corrupti inventore in. Quisquam, saepe sequi? Assumenda eligendi asperiores corporis molestiae, aperiam, voluptatibus debitis enim ratione quo, sunt possimus ipsum.`
}

function showTab3Info() {
    tab3.classList.add('actve')
    tab1.classList.remove('actve')
    tab2.classList.remove('actve')
    tabInfo.innerText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos consectetur id vero nostrum deleniti tenetur molestias eos! Explicabo, quidem eaque.`
}

function fetchData() {

    let myOptions = {
        id: myId
    }
    fetch('http://betamedia.lt/fakeAPI/krepselis', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(myOptions)
    }).then(response => response.json())
        .then(data => window.location.href = 'krepselis.html')
    window.location.href = 'krepselis.html'

}