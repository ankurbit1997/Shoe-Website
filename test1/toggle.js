


    window.onload=function(){
        const toggleButton = document.getElementsByClassName('toggle-button')[0];
        const navbarLinks = document.getElementsByClassName('navbar-links')[0];
        const hideBanner = document.getElementsByClassName('banner-img')[0];
        const hideBannerTxt = document.getElementsByClassName('banner-txt')[0];
        const hideProduct = document.getElementsByClassName('product')[0];
        const hideLinks = document.getElementsByClassName('right')[0];
        
        
         
        toggleButton.addEventListener('click', () =>{
            navbarLinks.classList.toggle('active')
            hideBanner.classList.toggle('active')
            hideBannerTxt.classList.toggle('active')
            hideProduct.classList.toggle('active')
            hideLinks.classList.toggle('active')
        })
      }