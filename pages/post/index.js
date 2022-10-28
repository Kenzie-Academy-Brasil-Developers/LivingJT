const infoFromPageJson = localStorage.getItem('pageInfo')

const infoFromPage = JSON.parse(infoFromPageJson)

console.log(infoFromPage.title);

const div = document.querySelector('.section__h1__div')

div.insertAdjacentHTML('beforeend',
    `
    <h1 class="ft1">${infoFromPage.title}</h1>
            <p>${infoFromPage.description}</p>
    `)

const sectionContainerImg = document.querySelector('.section__img__container')

sectionContainerImg.insertAdjacentHTML('beforeend',
    `
    <img class="imgMain" src="${infoFromPage.image}" alt="">
    <p>${infoFromPage.content}</p>
`)

const btnHome = document.querySelector('.btnHome')

btnHome.addEventListener('click', ()=>{

    window.location.assign('/index.html')
})