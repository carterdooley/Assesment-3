let phrase = "Test"

document.querySelector('#rest').addEventListener('click', () => {
    let p = document.createElement("p");
    p.textContent = phrase
    document.querySelector(".rest1").append(p)
})