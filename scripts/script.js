window.onload = function() {
    function resize(){
        console.log("hola")
        const rootWidth = window.innerWidth
        const startContainer = document.getElementsByClassName("startContainer")[0]
        const navBar = document.getElementsByClassName("navBarContainer")[0]
        const studyContainer = document.getElementsByClassName("studyContainer")[0]
        const arrayProyects = studyContainer.getElementsByTagName("div")
        const arrayLetters = document.getElementById("proyectos").children
        console.log(arrayLetters)

        async function test() {
            for (let i = 0; i < arrayLetters.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                arrayLetters[i].style.setProperty("display", "inline-block")
                arrayLetters[i].style.setProperty("border-right", ".15em solid orange")
                if(i != 0){
                    arrayLetters[i-1].style.setProperty("border-right", "none")
                }
            }
          }
            test();

        for (let i = 0; i < arrayProyects.length; i++) {
            arrayProyects[i].addEventListener("click", function(){
                switch (i) {
                    case 0:  window.open('../proyectos/nombreAleatorio/index.html', '_blank').focus();
                        break;
                    case 1:  window.open('../proyectos/tresEnRaya/index.html', '_blank').focus();
                        break;
                    case 2:  window.open('../proyectos/ahorcado/index.html', '_blank').focus();
                        break;
                    case 3:  window.open('../proyectos/concursoPreguntas/index.html', '_blank').focus();
                        break;
                }
            })
        }

        if (rootWidth >= 750) {
            startContainer.classList.add("containerDesktop")
            navBar.replaceChildren()
            navBar.style.setProperty("grid-template-columns", "repeat(4, 1fr)")
            navBar.style.setProperty("font-size", "2vh")
            navBar.insertAdjacentHTML('afterbegin', '<a href="#contacto"><div>Contacto</div></a>');
            navBar.insertAdjacentHTML('afterbegin', '<a href="#Proyectos"><div>Conocimiento</div></a>');
            navBar.insertAdjacentHTML('afterbegin', '<a href="#proyectos"><div>Proyectos</div></a>');
            navBar.insertAdjacentHTML('afterbegin', '<a href="#inicio"><div>Inicio</div></a>');
            studyContainer.style.setProperty("grid-template-columns", "repeat(4, 1fr)")

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
            studyContainer.style.setProperty("grid-template-columns", "repeat(1, 1fr)")
        
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

