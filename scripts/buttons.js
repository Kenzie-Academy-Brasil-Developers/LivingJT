
export function homeButton() {
    const homeButton = document.querySelector(".btnHome")
  
    homeButton.addEventListener("click", () => {
      localStorage.removeItem("categoryNow")
      window.location.replace("/index.html")
    })
  }
  
  export function createButtons(e) {
   
    const button = document.createElement("button")
    button.innerText = e
    button.classList.add("btn_category")
  
    button.addEventListener("click", () => {
  
      localStorage.setItem("categoryNow", e)    
      
      window.location.replace("/index.html")
    })
  
    return button  
  }
  
  export function renderButtonsHome(className) {
    const categories = ["Todos", ...JSON.parse(localStorage.getItem("categories"))]
    
    const btnsWrapper = document.querySelector('nav')
   
    btnsWrapper.innerHTML = ""
    categories.forEach(e => {
      btnsWrapper.appendChild(createButtons(e))
    })
  }
  
  export function btnClicked() {
    const btnsCategory = [...document.querySelectorAll(".btn-category")]
  
    btnsCategory.forEach((e) => {
      e.classList.remove("btn-clicked")
  
      if (localStorage.getItem("categoryNow") == e.innerText){
        e.classList.add("btn-clicked")
      }
    })
  }
  