(document.addEventListener("DOMContentLoaded",() =>{
    
    let btn_span = document.querySelector(".navbar_btn");
    let navbar = document.querySelector(".navbar_ul");
   

    
    btn_span.addEventListener('click',()=>{
     
        navbar.classList.toggle("invisible");
      
    })

}));