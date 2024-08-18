const model = document.querySelector('.model');
const openModelButton = document.querySelector('.openModelButton');
const closeModelButton = document.querySelector('.close_model');
const body = document.body;
const overlay = document.querySelector('.overlay');

const openModel = () => {
    model.classList.remove('close');
    body.classList.add('overflowHidden');
}

const closeModel = () => {
    model.classList.add('close');
    body.classList.remove('overflowHidden');
}

openModelButton.addEventListener('click', () => {
    openModel();
})

model.addEventListener('click', e => {
    const targetClassList = e.target.classList;
    if(targetClassList.contains('model') || targetClassList.contains('cross')) {
        closeModel();
    }
})

// closeModelButton.addEventListener('click', () => {
//     closeModel();
// })

// overlay.addEventListener('click', () => {
//     closeModel();
// })