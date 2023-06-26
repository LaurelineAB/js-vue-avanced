import {Nav} from "./Nav.js";

let Header =
{
    data () {
        return {
            links : 
            [
                {content: "Accueil"},
                {content: "A propos"},
                {content: "Contact"}
            ],
        };
    },
    components: {Nav},
    template: 
    `<header>
        <Nav :links="links"/>
    </header>`
};

export {Header};