let Nav =
{
    props : 
    [
        "links"
    ],
    template: 
    `<nav>
        <ul>
            <li v-for="link in links">{{link.content}}</li>
        </ul>
    </nav>`
};

export {Nav};