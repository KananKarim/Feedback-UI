const ratingEls = document.querySelectorAll('.rating')
const btn = document.querySelector('#btn')
const container = document.querySelector('#container')



let selectedRating = ""

ratingEls.forEach((ratingEl)=>{
    ratingEl.addEventListener('click',(e)=>{
        removeRatingEl()
        selectedRating = e.target.innerText || e.target.parentNode.innerText 
        e.target.classList.add('active')
        e.target.parentNode.classList.add('active')
    })
})


function removeRatingEl(){
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove('active')
    })
}

btn.addEventListener('click',()=>{
    if(selectedRating !== ""){
        container.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
        `
    }
})