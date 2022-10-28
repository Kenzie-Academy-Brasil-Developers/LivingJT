export const observer = new IntersectionObserver(entries => {
    entries.some((entry)=> entry.isIntersecting === true)
    
})

