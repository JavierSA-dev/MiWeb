window.onload = function() {
    function resize(){
        console.log("hola")
        const rootWidth = window.innerWidth
        const startContainer = document.getElementsByClassName("startContainer")[0]
        const navBar = document.getElementsByClassName("navBarContainer")[0]


        if (rootWidth >= 750) {
            startContainer.classList.add("containerDesktop")
            navBar.replaceChildren()
            navBar.style.setProperty("grid-template-columns", "repeat(4, 1fr)")
            navBar.style.setProperty("font-size", "15px")
            navBar.insertAdjacentHTML('afterbegin', '<a href="#contacto"><div>Contacto</div></a>');
            navBar.insertAdjacentHTML('afterbegin', '<a href="#Proyectos"><div>Conocimiento</div></a>');
            navBar.insertAdjacentHTML('afterbegin', '<a href="#proyectos"><div>Proyectos</div></a>');
            navBar.insertAdjacentHTML('afterbegin', '<a href="#inicio"><div>Inicio</div></a>');

        }
        else{
            startContainer.classList.remove("containerDesktop")
            navBar.replaceChildren()
            navBar.style.setProperty("grid-template-columns", "repeat(2, 1fr)")
            navBar.style.setProperty("align-items", "center")
            navBar.style.setProperty("font-size", "5vh")
            navBar.insertAdjacentHTML('afterbegin', '<div class="separator">≡</div>');
            navBar.insertAdjacentHTML('afterbegin', '<a href="#inicio"><img width="40%" height="40%" src="img/logo.png"/></a> ');
            const separator = document.getElementsByClassName('separator')[0]
            const navBarMobile = document.getElementsByClassName('navBarMobile')[0]
            const cross = document.getElementById('cross')

        
            function showMenu(){
                navBarMobile.style.setProperty('right', 0)
            }
            function hideMenu(){
                navBarMobile.style.setProperty('right', '-100%')
            }
        

            separator.addEventListener('click', showMenu)
            cross.addEventListener('click', hideMenu)


        }
    }
    resize()



    window.addEventListener('resize', resize);
}

