const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const shoes1 = document.querySelector('.shoes1')
const shoes2 = document.querySelector('.shoes2')
const container = document.querySelector('.container')

shoes1.addEventListener('click', () => {
    img2.classList.remove('show')
    container.classList.remove('item2')
    img1.classList.add('show')
    container.classList.add('item1')
})
shoes2.addEventListener('click', () => {
    img1.classList.remove('show')
    container.classList.remove('item1')
    img2.classList.add('show')
    container.classList.add('item2')
})