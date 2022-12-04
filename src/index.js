document.addEventListener('DOMContentLoaded', (e) => {
    const div = document.getElementById('ramen-menu')
    let form = document.getElementById('new-ramen')
    const img = document.querySelector('.detail-image')
    let p = document.getElementById('comment-display')
    let ratingDisplay = document.getElementById('rating-display')
    let h2 = document.querySelector('h2')
    let h3 = document.querySelector('.restaurant')
    
    function createImage(noodles) {
        let div2 = document.createElement('div')
        let img = document.createElement('img')
        img.setAttribute('src', noodles.image)
        img.addEventListener('click', (e) => {
            renderImage(noodles)
        })
        div2.appendChild(img)
        div.appendChild(div2)
        
    }
    function renderImage(noodles) {
        img.src = noodles.image
        h2.textContent = noodles.name
        h3.textContent = noodles.restaurant
        ratingDisplay.textContent = noodles.rating
        p.textContent = noodles.comment


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
    function appendImage(arr) {
        let div2 = document.createElement('div')
        let img = document.createElement('img')
        img.setAttribute('src', arr.image)
        div2.appendChild(img)
        div.appendChild(div2)
    
    }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const {name,restaurant, image1, rating, comment} = getFormData()
        p.innerHTML = comment
        ratingDisplay.innerHTML = rating
        h2.innerHTML = name
        h3.innerHTML = restaurant
        
        img.setAttribute('src', image1)
        addData(name, restaurant, image1, rating, comment)
    })   
    
    function getFormData() {
        let name = form.name.value
        let restaurant = form.restaurant.value
        let image1 = form.image.value
        let rating = form.rating.value
        let comment = form.paragraph.value
        return {name, restaurant, image1, rating, comment}
    
    }

    function addData(name,restaurant, image, rating, comment) {
        fetch('http://localhost:3000/ramens', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ name,restaurant, image, rating, comment})
        })
    }
    
        
        
    
    
    
    
    })