var input = document.querySelector('#url');
//Isnt really sus but ok, beats me :troll:
input.addEventListener('keyup', (key) => {
    if (key.keyCode == 13) { 
        if (!input.value.trim().length) return;
        window.location.assign(`https://huhdu.wcpss.technology/cringe/?url=${btoa(input.value)}`);
    }
});


document.querySelector("#initiate").addEventListener('click', () => {

    if (!input.value.trim().length) return;
    window.location.assign(`https://huhdu.wcpss.technology/cringe/?url=${btoa(input.value)}`);

});