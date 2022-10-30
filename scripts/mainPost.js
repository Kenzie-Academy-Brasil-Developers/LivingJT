import { getCurrentNews } from "./requests.js";

export async function mainPost(id) {
  const post = await getCurrentNews(id)

  const sectionPost = document.querySelector(".section__h1__div")
  const imgContainer = document.querySelector(".section__img__container")
  sectionPost.innerHTML = `
  <h1>${post.title}</h1>
    <p>${post.description}</p>
  `
  imgContainer.innerHTML = `
  <img src="${post.image}">  
   <p>${post.content}</p>
  `
}