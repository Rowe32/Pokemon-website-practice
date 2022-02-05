let count = 1;

function render() {
    let container = document.getElementById("pokemons");
    container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`;
}

let prev = document.getElementById("prev");
let next = document.getElementById("next");

//event
prev.onclick = function() {
    if (count > 1) {
       count -= 1;
       render();
    }
}

next.onclick = function() {
    if (count < 650) {
        count += 1;
        render();
    }
}

// we need first render to have sth when starting the page
render();
