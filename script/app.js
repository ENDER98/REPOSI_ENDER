const project = [
    {
        idProjects: 1,
        imgProject:'https://cdn-icons-png.flaticon.com/512/2683/2683382.png',
        titleproject : 'Chat Bidireccional',
        descriptionProject: 'Una interfaz visual donde las conversaciones se distribuyen en un espacio 2D, permitiendo que los usuarios y sus mensajes se posicionen en distintos puntos de un plano',
        linkProject:'https://github.com/ibrahimhc19/90Proyectos90Dias-usando-HTML-CSS-y-JavaScript.git'
    },
    {
        

        idProjects: 2,
        imgProject:'https://cdn-icons-png.flaticon.com/512/2683/2683382.png',
        titleproject : 'Chat Bidireccional',
        descriptionProject: 'Una interfaz visual donde las conversaciones se distribuyen en un espacio 2D, permitiendo que los usuarios y sus mensajes se posicionen en distintos puntos de un plano',
        linkProject:'https://github.com/ibrahimhc19/90Proyectos90Dias-usando-HTML-CSS-y-JavaScript.git'

    },
    {
        idProjects: 3,
        imgProject:'img/logo-p.pnghttps://cdn-icons-png.flaticon.com/512/2683/2683382.png',
        titleproject : 'Chat Bidireccional',
        descriptionProject: 'Una interfaz visual donde las conversaciones se distribuyen en un espacio 2D, permitiendo que los usuarios y sus mensajes se posicionen en distintos puntos de un plano',
        linkProject:'https://github.com/ibrahimhc19/90Proyectos90Dias-usando-HTML-CSS-y-JavaScript.git'

    },
    {
        idProjects: 4,
        imgProject:'https://cdn-icons-png.flaticon.com/512/2683/2683382.png',
        titleproject : 'Chat Bidireccional',
        descriptionProject: 'Una interfaz visual donde las conversaciones se distribuyen en un espacio 2D, permitiendo que los usuarios y sus mensajes se posicionen en distintos puntos de un plano',
        linkProject:'https://github.com/ibrahimhc19/90Proyectos90Dias-usando-HTML-CSS-y-JavaScript.git'

    },
]

const reference = [
        {
        Nombre:"Angie Silgado Berrio",
        Cargo:"indepentiente",
        Telefono:"3103623236",
        correo:"AngieSB@gmail.com",
        },

        {
        Nombre:"Rene Cardona",
        Cargo:"FullStack",
        Telefono:"31036287612",
        correo:"Renne1996P@gmail.com",
        },

        {
        Nombre:"Luis Maestre",
        Cargo:"Docente",
        Telefono:"3207654436",
        correo:"lui5664P@gmail.com",
        },

        {
         Nombre:"Solimar Peña",
        Cargo:"indepentiente",
        Telefono:"315772638",
        correo:"solpe18@gmail.com",
        },
]

const Experience = [
    {
        NombreLenguaje : "HTML",
        ProgresoPorcentaje:80,
        imgagen:"https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp&w=256",
    },

    {
        NombreLenguaje : "CSS",
        ProgresoPorcentaje:70,
        imgagen:"https://img.icons8.com/color/512/css3.png",
    },

    {
        NombreLenguaje : "JAVA-SCRIPT",
        ProgresoPorcentaje:60,
        imgagen:"https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
    },
]



document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
    anchor.addEventListener('click', function (event) {
    event.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target){
         window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth"
         });
    }

    });
});

loadsectionProjects()
function loadsectionProjects(){
    project.forEach(project => createCardsProjects(project))
}


function createCardsProjects(project){
    const CardProject = document.createElement('Div')
    CardProject.clasList.add('cards-pojects')

    const containerImg = document.createElement('Div')
    containerImg.clasList.add('container-img')
    
    const imgCard = document.createElement('img')
    imgCard.src=project.imgProject
    imgCard.alt=titleproject

    const containerDescription = document.createElement('Div')
    containerDescription.classList.add('container-descrption')

    const tittleCard = document.createElement('h3')
    tittleCard.textContent =project.titleproject 


    const description = document.createElement('p')
    description.textContent= project.descriptionCard

    const goProyec = document.createElement('a')
    goProyec.href = project.linkProject

    goProyec.setAttribute( 'target','_blanck')
    goProyec.textContent='Ir a Proyecto'


    CardProject.appendChild(containerImg)
    CardProject.appendChild(containerDescription)

    containerImg.appendChild(imgCard)
    containerDescription.appendChild(tittleCard)
    containerDescription.appendChild(description)
    containerDescription.appendChild(goProyec)

    document.getElementById('section-project').appendChild(CardProject)


}


/*
                        <div class="cards-projects">

                            <div class="container-img">
                                <img src="https://cdn-icons-png.flaticon.com/512/2683/2683382.png" alt=""> </div>
                             <div class="container-descrption">
                                <h3> Chat-Bidimensional</h3>
                                <p>Una interfaz visual donde las conversaciones se distribuyen en un espacio 2D, permitiendo que los usuarios y sus mensajes se posicionen en distintos puntos de un plano</p>
                                <a href="">Ir a proyecto</a>
                            </div>
                           
                        </div>      */
                    