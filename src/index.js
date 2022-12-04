// write your code here
document.addEventListener('DOMContentLoaded', (e) => {
const div = document.getElementById('ramen-menu')

function createImage(noodles) {
    let div2 = document.createElement('div')
    let img = document.createElement('img')
    img.setAttribute('src', noodles.image)
    img.setAttribute('onclick', 'expandImg()')
    div2.appendChild(img)
    div.appendChild(div2)
    
}

function appendImage(arr) {
    let div2 = document.createElement('div')
    let img = document.createElement('img')
    img.setAttribute('src', arr.image)
    img.setAttribute('onclick', 'expandImg()')
    div2.appendChild(img)
    div.appendChild(div2)

}

function getImages() {
    return fetch('http://localhost:3000/ramens')
    .then((response) => response.json())
    .then((data) => {
        return data
    })
}
function displayData() {
    getImages().then((images) => {
        images.forEach((image) => {
            createImage(image)
        });
    })
}


displayData()

//Submit Method 
let form = document.getElementById('new-ramen')
const img = document.querySelector('.detail-image')
let p = document.getElementById('comment-display')
let rating = document.getElementById('rating-display')
let h2 = document.querySelector('h2')
let h3 = document.querySelector('.restaurant')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let arr = getFormData()
    p.innerHTML = arr.comment
    rating.innerHTML = arr.rating
    h2.innerHTML = arr.name
    h3.innerHTML = arr.restaurant
    
    img.setAttribute('src', arr.image1)
    appendImage(arr)
})

function expandImg() {
    getImages().then((noodles)=> {
        noodles.forEach((noodle) => {
            img.setAttribute('src', noodles.image)
            p.innerHTML= noodles.comment
            rating.innerHTML = noodles.rating
            h2.innerHTML = noodles.name
            h3.innerHTML = noodles.restaurant
            
        })
    })
}


function getFormData() {
    let name = form.name.value
    let restaurant = form.restaurant.value
    let image1 = form.image.value
    let rating = form.rating.value
    let comment = form.paragraph.value
    return {name, restaurant, image1, rating, comment}

}

    
    




})
