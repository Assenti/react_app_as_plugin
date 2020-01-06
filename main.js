document.addEventListener("DOMContentLoaded", function() {
    console.log('Document is ready');
    let passBtn = document.querySelector('#pass-btn');

    passBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let id = prompt('Input the ID')
        __PLUGIN__.setId(id);
    });
});

