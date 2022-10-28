import { getPostsPerPage } from "../../requisition.js";

export async function renderNewPosts() {
    const dados = await getPostsPerPage()
    
    const ul = document.querySelector('.ul')
    ul.innerHTML = ''

     const data = dados.news
     
     data.forEach((element)=>{
        
        ul.insertAdjacentHTML('afterbegin', `
        <li>
        <figure>
            <img src="${element.image}" alt="">
        </figure>
        <h3>${element.title}</h3>
        <p>${element.description}</p>
        <a id="${element.id}">Acessar conteúdo</a>
        </li>
        `)
            const acessBtn = document.getElementById(`${element.id}`)
                acessBtn.addEventListener('click', async (evt)=> {
                    evt.preventDefault()           
                    localStorage.setItem('pageInfo', JSON.stringify(element)|| [])    
                    window.location.replace('/pages/post/post.html')                
                })        
    })
}
renderNewPosts()