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
const offer1 = document.getElementById('offer1')
const offer2 = document.getElementById('offer2')
const offer3 = document.getElementById('offer3')
const offer4 = document.getElementById('offer4')
const priceToPay1 = document.getElementById('priceToPay1')
const priceToPay2 = document.getElementById('priceToPay2')
const priceToPay3 = document.getElementById('priceToPay3')
const priceToPay4 = document.getElementById('priceToPay4')


arrowRight.addEventListener('click', photoRight)
arrowLeft.addEventListener('click', photoLeft)
photo1.addEventListener('click', showPhoto1)
photo2.addEventListener('click', showPhoto2)
photo3.addEventListener('click', showPhoto3)
photo4.addEventListener('click', showPhoto4)
photo5.addEventListener('click', showPhoto5)
tab1.addEventListener('click', showTab1Info)
tab2.addEventListener('click', showTab2Info)
tab3.addEventListener('click', showTab3Info)
offer1.addEventListener('click', updateCard1)
offer2.addEventListener('click', updateCard2)
offer3.addEventListener('click', updateCard3)
offer4.addEventListener('click', updateCard4)

let num = 0

let photoUrl = [
    "url(./pics/alps1.jpg)",
    "url(./pics/alps2.jpg)",
    "url(./pics/alps3.jpg)",
    "url(./pics/alps4.jpg)",
    "url(./pics/alps5.jpg)",
    "url(./pics/alps6.jpg)"
]


function photoRight() {
    num = num + 1
    if (num > 5) {
        num = 0
    }

    activePhoto.style.backgroundImage = photoUrl[num]
}

function photoLeft() {
    num = num - 1
    if (num < 0) {
        num = 5
    }

    activePhoto.style.backgroundImage = photoUrl[num]
}

function showPhoto1() {
    activePhoto.style.backgroundImage = photoUrl[1]
}

function showPhoto2() {
    activePhoto.style.backgroundImage = photoUrl[2]
}

function showPhoto3() {
    activePhoto.style.backgroundImage = photoUrl[3]
}

function showPhoto4() {
    activePhoto.style.backgroundImage = photoUrl[4]
}

function showPhoto5() {
    activePhoto.style.backgroundImage = photoUrl[5]
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

function updateCard1() {
    nightCount.innerHTML = `<i class="far fa-clock"></i> 1 nakvynė`
    priceText.innerText = `Kaina`
    priceNumber.innerText = priceToPay1.innerText
    offer1.classList.add('activeOffer')
    offer2.classList.remove('activeOffer')
    offer3.classList.remove('activeOffer')
    offer4.classList.remove('activeOffer')
}

function updateCard2() {
    nightCount.innerHTML = `<i class="far fa-clock"></i> 2 nakvynės`
    priceText.innerText = `Kaina`
    priceNumber.innerText = priceToPay2.innerText
    offer2.classList.add('activeOffer')
    offer1.classList.remove('activeOffer')
    offer3.classList.remove('activeOffer')
    offer4.classList.remove('activeOffer')
}

function updateCard3() {
    nightCount.innerHTML = `<i class="far fa-clock"></i> 3 nakvynės`
    priceText.innerText = `Kaina`
    priceNumber.innerText = priceToPay3.innerText
    offer3.classList.add('activeOffer')
    offer1.classList.remove('activeOffer')
    offer2.classList.remove('activeOffer')
    offer4.classList.remove('activeOffer')
}

function updateCard4() {
    nightCount.innerHTML = `<i class="far fa-clock"></i> 4 nakvynės`
    priceText.innerText = `Kaina`
    priceNumber.innerText = priceToPay4.innerText
    offer4.classList.add('activeOffer')
    offer1.classList.remove('activeOffer')
    offer3.classList.remove('activeOffer')
    offer2.classList.remove('activeOffer')
}