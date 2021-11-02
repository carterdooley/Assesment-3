let phrase = ['https://www.eatdrinkcentral.com/', 'https://www.rocknbowl.com/lafayette', 'https://www.lafayettetravel.com/listing/dwyers-caf%c3%a9/3836/', 'https://agavelafayette.com/']

const getRandom = () => {
    const random = Math.floor(Math.random() * phrase.length);
    return phrase[random]
}





document.querySelector('#rest').addEventListener('click', () => {
    let x = document.createElement("li")
    let p = document.createElement("a");
    document.querySelector('.rest1').append(x)
    let rando = getRandom()
    p.setAttribute('href', rando)
    p.textContent = rando
    x.append(p)
})