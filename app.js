document.addEventListener("DOMContentLoaded", preLoad);

function preLoad()
{
    fetch("https://rickandmortyapi.com/api/character/")
        .then(parseJSON)
        .then(getImage)
}

function parseJSON(response)
{
    return response.json();
}

// POKEMON CODE ONLY //



// END OF POKEMON //

function getImage(response)
{
    const body = document.body

    const characters = response.results

    characters.forEach(character =>
    {
        const picture = document.createElement("img");
        const card = document.createElement("div");        
        
        picture.src = character.image

        card.append(picture);

        body.append(card);
    })
}