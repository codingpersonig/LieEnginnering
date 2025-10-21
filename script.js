function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function load() {
    // Get Elements
    const body = document.body;
    const menuBtn = document.getElementsByClassName("menuBtn")[0];
}