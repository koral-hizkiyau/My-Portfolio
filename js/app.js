// import { doApi } from "../services/apiSer.js";
import { createProtfolio } from "./manager.js";
import { declareViewEvent } from "./viewEvents.js";

window.onload = () => {
    init();
}

const init = () => {
    
    createProtfolio(pages);
    // doApi(url);
}


const pages  = 
[
    {
        "_id": "5f5895aa48212a9c0d7ff823",
        "title": "React Hooks - JMatch",
        "detail": "A site that combines the concept of a dating site and a social network by framework React-Hooks and server-side NodeJS with MongoDB",
        "icons":"iconsJmatch.png",
        "image": "874544.png",
        "src": "https://github.com//koral-hizkiyau/Jmatch_React",
        "demo": "https://jmatch.netlify.app/"

        },{
    "_id": "5f5895aa48212a9c0d7ff8209",
    "title": "React Hooks - My Marpet",
    "detail": "A pet clinic website that shows data on customers and shows details to the clinic's customers",
    "icons":"iconsJmatch.png",
    "image": "mymarpet.png",
    "src": "https://github.com/koral-hizkiyau/My-Marpet",
    "demo": "https://mymarpet.netlify.app/"
    },
    {
        "_id": "5f5895aa48212a9c0d7ff8214",
        "title": "React - Movies",
        "detail": "A site that displays the information of movies by categories.The information of the movies comes from Themoviedb Api ",
        "icons":"iconsMovie.png",
        "image": "movies.png",
        "src": "https://github.com/koral-hizkiyau/Movies",
        "demo": ""
        },
            {
                "_id": "5f5895aa48212a9c0d7ff825",
                "title": "React Hooks - Pixa Search Api",
                "detail": "A site that display images and some details from Pixabay API",
                "icons":"iconsPixa.png",
                "image": "pixa.png",
                "src": "https://github.com/koral-hizkiyau/Pixa-search-api",
                "demo": "https://pixasearchapi.netlify.app/"
    
                },
    
 
          
                {
                    "_id": "5eeb276b442d013c4b6c2507",
                    "title": "HTML - Iron Kingdom site",
                    "detail": "A gym website through which you can see information about the gym, photos, information about the spa and more ...",
                    "icons":"iconsIron.png",
                    "image": "57633395.png",
                    "src": "https://github.com//koral-hizkiyau/Iron_Kingdom",
                    "demo": "https://ironkingdomgym.netlify.app/"
            
                    },
                    {
                        "_id": "5f5895aa48212a9c0d7ff828",
                        "title": "Python - Shooting Game",
                        "detail": "A shooting game using Python Pygame",
                        "icons":"iconsPy.png",
                        "image": "pythonGame.png",
                        "src": "https://github.com/koral-hizkiyau/Python---Shooting-Game",
                        "demo": "https://trinket.io/pygame/fb6b6d8b24",
        
                        }, 

                {
                    "_id": "5eeb3552442d013c4b72eb12",
                    "title": "HTML - Music VOD",
                    "detail": "A site that presents a demo of a songs with search options and more...<br/> build in html with api. If you don",
                    "icons":"iconsWolf.png",
                    "image": "musicHtml.png",
                    "src": "https://github.com/koral-hizkiyau/Music-VOD",
                    "demo": "https://musicvod.netlify.app/"

                    },
                {
                    "_id": "5f5895aa48212a9c0d7ff8267",
                    "title": "React - Spca Dogs site",
                    "detail": "Website of the Association of Dog Adoption, the website has the option of leaving details and buying products",
                    "icons":"iconsSpca.png",
                    "image": "75666891.png",
                    "src": "https://github.com//koral-hizkiyau/Spca_Dogs",
                    "demo": "https://spcadogs.netlify.app/"

                    },
                    {
                        "_id": "5f5895aa48212a9c0d7ff8215",
                        "title": "HTML - Supermarket",
                        "detail": "A supermarket website that presents products through api",
                        "icons":"iconsWolf.png",
                        "image": "supermarket.png",
                        "src": "https://github.com/koral-hizkiyau/Supermarket",
                        "demo": ""
    
                        },
      

    {
        "_id": "5f5895aa48212a9c0d7ff824",
        "title": "Wordpress - Baby Off",
        "detail": "Created an online store for marketing meat and poultry by WordPress platform with WooCommerce",
        "icons":"iconsWord.png",
        "image": "babyoffimage.png",
        "src": "",
        "demo": "https://babyoff.co.il"

        },
        {
            "_id": "5f5895aa48212a9c0d7ff8237",
            "title": "React - Music App",
            "detail": "A site that presents a demo of songs divided into categories of singers and search options",
            "icons":"iconsMusic.png",
            "image": "1234532.png",
            "src": "https://github.com/koral-hizkiyau/React-Music-App",
            "demo": "https://reactmusicappsite.netlify.app/"
            },
            {
                "_id": "5eeb3552442d013c4b72eb17",
                "title": "HTML - Wolf's Place Bar & Kitchen",
                "detail": "Website of a bar and restaurant through which you can see information about the bar, photos, menu, reservation and more ...",
                "icons":"iconsWolf.png",
                "image": "37105805.png",
                "src": "https://github.com//koral-hizkiyau/Wolfs_Place",
                "demo": "https://wolfsplace.netlify.app/"

                },
            
        {
            "_id": "5f5895aa48212a9c0d7ff826",
            "title": "HTML - My Portfolio",
            "detail": "My Portfolio",
            "icons":"iconsPortfolio.png",
            "image": "portfolio.png",
            "src": "https://github.com/koral-hizkiyau/My-Portfolio",
            "demo": "https://koral-profile.netlify.app/"

            },
            {
                "_id": "5f5895aa48212a9c0d7ff827",
                "title": "C# Unity - Guess A Number Game",
                "detail": "A game of guessing a number using c# unity",
                "icons":"iconsC.png",
                "image": "guessNumberC.png",
                "src": "https://github.com/koral-hizkiyau/Guess-A-Random-Number-Game",
                "demo": ""

                },
                {
                    "_id": "5f5895aa48212a9c0d7ff675",
                    "title": "NodeJS + Express-hbs - Corona information by country",
                    "detail": "A game of guessing a number using c# unity",
                    "icons":"iconCorona.png",
                    "image": "coronaInfo.png",
                    "src": "https://github.com/koral-hizkiyau/CoronaInfoSearch",
                    "demo": "https://corona-info-search.herokuapp.com/corona"
    
                    }
    ]
