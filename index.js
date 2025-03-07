document.addEventListener(`DOMContentLoaded`,()=>{
    // FAQs

    const pages = document.querySelectorAll(`.page-toggle p`);
    const icons = document.querySelectorAll(`.visible-title i `)
    console.log(pages, icons);
    icons.forEach(icon => {
        icon.addEventListener(`click`,function() {
         console.log(this.class);
            
        
        });

    });
    








})