{   
    let menu_products = document.querySelector('.prodcts')
    let menu_main = document.querySelector('.home')
    let menu_price = document.querySelector('.prc')
    let menu_about = document.querySelector('.about')

   
    
    menu_main.addEventListener('click',()=>{
       document.querySelectorAll('dots').removeAttribute('data-active')
       document.querySelector('.one').setAttribute('data-active','')
    })
    
    menu_products.addEventListener('click',()=>{
        document.querySelector('.dots').removeAttribute('data-active')
        document.querySelector('.two').setAttribute('data-active','')
    })

    menu_price.addEventListener('click',()=>{
        document.querySelector('.dots').removeAttribute('data-active')
        document.querySelector('.three').setAttribute('data-active','')
    })

    menu_about.addEventListener('click',()=>{
        document.querySelector('.dots').removeAttribute('data-active')
        document.querySelector('.fhour').setAttribute('data-active','')
    })
    
    
}