let langs = document.getElementById("language-big-selector"),
            link = document.querySelectorAll("#language-big-selector a"),
            title = document.querySelector("h1"),
            descr = document.querySelectorAll(".where-eat-card h2");

        let data = {
            en: {
                title: "Where would you like to eat?",
                descriptions: ["Dine in", "Take out"]
            },
            dk: {
                title: "Hvor spiser du?",
                descriptions: ["Spise her", "Takeaway"]
            }
        };

        link.forEach(el => {
            el.addEventListener("click", (event) => {
                event.preventDefault();
                langs.querySelector(".active")?.classList.remove("active");
                el.classList.add("active");

                let attr = el.getAttribute("language");
                title.textContent = data[attr].title;

                descr.forEach((h2, index) => {
                    h2.textContent = data[attr].descriptions[index];
                });
            });
        });

const cards = document.querySelectorAll('.where-eat-card');

cards.forEach(card => {
    card.addEventListener('click', function () {
        window.open("menu.html","_self");
    });
});
/*
let langs = document.getElementById("language-big-selector"),
    link = document.querySelectorAll("#language-big-selector a"),
    title = document.querySelector("h1"),
    descr = document.querySelectorAll("#where-eat-card h2");
    
let data = {
    en: {
        title: "Where would you like to eat?",
        descriptions: ["Dine in", "Take out"] 
    },
    dk: {
        title: "Hvor spiser du?",
        descriptions: ["Spise her", "Takeaway"] 
    }
};

link.forEach(el => {
    el.addEventListener("click", (event) => {
        event.preventDefault(); 
        langs.querySelector(".active")?.classList.remove("active"); 
        el.classList.add("active"); 

        let attr = el.getAttribute("language"); 
        title.textContent = data[attr].title;

        
       
        descr.forEach((h2, index) => {
            h2.textContent = data[attr].descriptions[index];
        });
    });
});
*/