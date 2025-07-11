// Dom - Document Object Model
// 1. getElenemtById:
 const headingTanu = document.getElementById('heading');
 console.log(headingTanu);

// 2. getElementsByTagName:
// const heading = document.getElementsByTagName('h1');
// console.log(heading)
// console.log(heading[1]);

// 3. getElementsByclassName:
// const heading = document.getElementsByClassName('heading');
// console.log(heading);
// 4. querySelector: ye basically css ke tahrah hota hai
// const heading = document.querySelector('#heading');
// console.log(heading);

// 5. querySelectorAll:

// const heading = document.querySelectorAll('h1');
// console.log(heading);


// Traverse.DOM
// 1. parentNode
// const heading = document.querySelector('.heading');
// const parent = heading.parentNode;
// console.log(parent);

// 2. childNodes
// const parent = document.querySelector('.parent');
// console.log(parent.childNodes);

// 3. nextElementSibling
// const heading = document.querySelector('.heading');
// console.log(heading.nextElementSibling);

// const heading = document.querySelector('h3');
// console.log(heading.previousElementSibling);


// Manipulation 

//1 innerHTML
// const heading = document.querySelector('.heading');
// heading.innerHTML = 'Web dev is awesome! & Shikha';
// heading.style.color = 'purple';
// heading.style.color = 'blue';
// heading.style.fontSize = '5rem';
// heading.classList.add('shikha');
// heading.classList.remove('heading');
// console.log(heading);


// 2. CreateElement

// const heading = document.createElement('h1');
// heading.innerHTML = 'I like Node js';
// const parent = document.querySelector('.parent');
// parent.appendChild(heading);
// console.log(heading);

// const subHeading = document.createElement('h3');
// subHeading.innerHTML = 'I like Javascript';
// heading.insertAdjacentElement('beforebegin', subHeading);

// DOM Events

// const button = document.querySelector('#btn');
// const heading = document.querySelector('#heading');

// button.addEventListener('click', (e) => {
//     // console.log('Tanu', e);
//     heading.innerHTML = 'I am a Software Devloper.';
//     heading.style.color = 'pink';
//     heading.style.background = 'beige';

// })

const bulbSwitch = document.querySelector('#bulbSwitch');
const bulb = document.querySelector('#bulb');

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

bulbSwitch.addEventListener('click', function() {
    console.log(bulb.src);
    if(bulb.src.match('off')) {
        bulb.src = './bulb-on.gif';
        bulbSwitch.innerHTML = 'Turn OFF';
    } else {
        bulb.src = './bulb-off.gif';
        bulbSwitch.innerHTML = 'Turn ON';
    }

    // Change the body background color
    document.body.style.backgroundColor = getRandomColor();
})


