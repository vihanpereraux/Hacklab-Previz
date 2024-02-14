let text_1 = baffle(document.getElementsByClassName('project-name')[0], {
    characters: 'SATELLITESV.1',
    speed: 200
}).start();
let intervalOne_1 = setInterval(() => {
    text_1.start();
}, 3000);
let intervalTwo_1 = setInterval(() => {
    text_1.reveal();
}, 4000);

let text_2 = baffle(document.getElementsByClassName('project-name')[1], {
    characters: 'SATELLITESV.1',
    speed: 200
}).start();
let intervalOne_2 = setInterval(() => {
    text_2.start();
}, 3000);
let intervalTwo_2 = setInterval(() => {
    text_2.reveal();
}, 4000);


let text_3 = baffle(document.getElementsByClassName('project-name')[2], {
    characters: 'SORAAMSTERDAM',
    speed: 200
}).start();
let intervalOne_3 = setInterval(() => {
    text_3.start();
}, 3000);
let intervalTwo_3 = setInterval(() => {
    text_3.reveal();
}, 4000);

let text_4 = baffle(document.getElementsByClassName('project-name')[3], {
    characters: 'ZEROPOINT TWO',
    speed: 200
}).start();
let intervalOne_4 = setInterval(() => {
    text_4.start();
}, 3000);
let intervalTwo_4 = setInterval(() => {
    text_4.reveal();
}, 4000);