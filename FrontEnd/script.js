const url = "http://localhost:5678/api/works";

async function fetchWorks () {
    const requete = await fetch(url, {
        method: 'GET'
    });

    if (!requete.ok) {
        alert('Un problème est survenu');
    }
    else {
        var donnees = await requete.json();

        console.log(donnees)

        const gallery = document.querySelector(".gallery");

        function genererWorks (works) {

            for (let i = 0; i < works.length; i++) {
                let figure = document.createElement("figure");
                figure.innerHTML = `<img src=${works[i].imageUrl} alt=${works[i].title}>
                <figcaption>${works[i].title}<figcaption>`;
                gallery.appendChild(figure);
            }
        }

        genererWorks(donnees);

        const tous = document.querySelector(".btn-tous")
        tous.addEventListener('click', () => {

            objets.classList.remove('btn_selected')
            appartements.classList.remove('btn_selected')
            restaurants.classList.remove('btn_selected')
            tous.classList.add('btn_selected')

            document.querySelector(".gallery").innerHTML = ""
            genererWorks(donnees)
        })

        const objets = document.querySelector(".btn-objets")
        objets.addEventListener("click", () => {
            const objetsFiltrees = donnees.filter((obj) => {
                return obj.category.name === "Objets"
            })

            
            appartements.classList.remove('btn_selected')
            restaurants.classList.remove('btn_selected')
            tous.classList.remove('btn_selected')
            objets.classList.add('btn_selected')

            document.querySelector(".gallery").innerHTML = ""
            genererWorks(objetsFiltrees)
        })

        const appartements = document.querySelector(".btn-appartements")
        appartements.addEventListener("click", () => {
            const appartementsFiltrees = donnees.filter((obj) => {
                return obj.category.name === "Appartements"
            })

            objets.classList.remove('btn_selected')
            restaurants.classList.remove('btn_selected')
            tous.classList.remove('btn_selected')
            appartements.classList.add('btn_selected')

            document.querySelector(".gallery").innerHTML = ""
            genererWorks(appartementsFiltrees)
        })

        const restaurants = document.querySelector(".btn-restaurants")
        restaurants.addEventListener("click", () => {
            const restaurantsFiltrees = donnees.filter((obj) => {
                return obj.category.name === "Hotels & restaurants"
            })

            objets.classList.remove('btn_selected')
            tous.classList.remove('btn_selected')
            appartements.classList.remove('btn_selected')
            restaurants.classList.add('btn_selected')
            
            document.querySelector(".gallery").innerHTML = ""
            genererWorks(restaurantsFiltrees)
        })
    
    }
}

fetchWorks()