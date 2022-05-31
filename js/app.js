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
    "_id": "5eeb276b442d013c4b6c2507",
    "detail": "HTML - Iron Kingdom site",
    "image": "57633395.png",
    "src": "https://github.com//koral-hizkiyau/Iron_Kingdom"
    },
    {
    "_id": "5eeb3552442d013c4b72eb17",
    "detail": "HTML - Wolf's Place Bar & Kitchen",
    "image": "37105805.png",
    "src": "https://github.com//koral-hizkiyau/Wolfs_Place"
    },
    
    {
    "_id": "5f5895aa48212a9c0d7ff8267",
    "detail": "React - Spca Dogs site",
    "image": "75666891.png",
    "src": "https://github.com//koral-hizkiyau/Spca_Dogs"
    },
    {
        "_id": "5f5895aa48212a9c0d7ff822",
        "detail": "React - Music App",
        "image": "1234532.png",
        "src": "https://github.com/koral-hizkiyau/React-Music-App"
        },
        {
            "_id": "5f5895aa48212a9c0d7ff8214",
            "detail": "React - Movies",
            "image": "movies.png",
            "src": "https://github.com/koral-hizkiyau/Movies"
            },
	 {
    "_id": "5f5895aa48212a9c0d7ff823",
    "detail": "React Hooks - JMatch",
    "image": "874544.png",
    "src": "https://github.com//koral-hizkiyau/Jmatch_React"
    },
    {
        "_id": "5f5895aa48212a9c0d7ff824",
        "detail": "Wordpress - Baby Off",
        "image": "babyoffimage.png",
        "src": "https://babyoff.co.il"
        },
        {
            "_id": "5f5895aa48212a9c0d7ff825",
            "detail": "React Hooks - Pixa Search Api",
            "image": "pixa.png",
            "src": "https://github.com/koral-hizkiyau/Pixa-search-api"
            },
            ,
        {
            "_id": "5f5895aa48212a9c0d7ff826",
            "detail": "HTML - My Portfolio",
            "image": "portfolio.png",
            "src": "https://github.com/koral-hizkiyau/My-Portfolio"
            },
            {
                "_id": "5f5895aa48212a9c0d7ff827",
                "detail": "C# Unity - Guess A Number Game",
                "image": "guessNumberC.png",
                "src": "https://github.com/koral-hizkiyau/Guess-A-Random-Number-Game"
                }
    ]
