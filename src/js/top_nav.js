export const top_nav  = () => {
    const navbar = document.querySelector('.top_navbar')
    window.addEventListener('scroll' , () => {
            if(window.scrollY >= document.body.scrollHeight * 0.1 && !document.querySelector(".menu_overlay").classList.contains('active') & 
            !document.querySelector(".search_overlay").classList.contains('active')) {
                navbar.classList.add('active')

            } else {
                navbar.classList.remove('active')
            }
    })
}