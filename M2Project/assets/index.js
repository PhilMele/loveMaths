/*Map*/

/*Items*/


/*Characters*/
    /*Hero*/
    let hero = {
        name:'',
        avatar:'',
        lifePoints:100,

        /*inventor*/
        inventory:{
            itemOne :[],
            itemTwo :[],
            weapon :[],
        },

        /*position on map*/
        positionY: '',
        positionX: '',   
    }

    /*Characters*/
    let characters = [
            {
                name:'C1',
                avatar:'',

                /*inventor*/
                inventory:{
                    itemOne :[],
                },

                /*position on map*/
                positionY: '',
                positionX: '',   
            },
            {
                name:'C2',
                avatar:'',

                /*inventor*/
                inventory:{
                    itemOne :[],
                },

                /*position on map*/
                positionY: '',
                positionX: '',   
            },
            {
                name:'C3',
                avatar:'',

                /*inventor*/
                inventory:{
                    itemOne :[],
                },

                /*position on map*/
                positionY: '',
                positionX: '',   
            },
        ]

    /*Boss*/
    let boss = {
        name:'The Big Vilain',
        avatar:'',
        lifePoints:100,

        /*position on map*/
        positionY: '',
        positionX: '',   
    }



/*Functions*/
    /*Update Hero Object*/

    /*Update Boss Object*/

/*Events*/
   
    /*First Screen - Enter Name + Select Character*/
     /*Collects input to assign name to hero*/
        /* https://stackoverflow.com/questions/66466217/how-to-take-a-username-from-a-form-and-put-into-a-paragraph-html */
        /* Credits - https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript */
    
        window.addEventListener("DOMContentLoaded", function() {
            let queryString = window.location.search;
            let urlParams = new URLSearchParams(queryString);
            let heroName = urlParams.get('hero-name');
            let heroAvatar = urlParams.get('avatar-type');
            
            console.log(heroName);

            hero.name = heroName;
            hero.avatar = heroAvatar;
            console.log(hero)


        });

        

    /*Second Screen - The Mission : Hero collects items from characters and gain item*/

        /*First Dialogue - Hero receives mission*/

        /*Second Dialogue - Hero collects 1st Item*/

        /*Third Dialogue - Hero collects 2nd Item*/

        /*Fourth Dialogue - Hero gains item to defeat boss*/

        /*Hero Walks to Boss Fight*/

    /*Third Screen - Boss Fight*/