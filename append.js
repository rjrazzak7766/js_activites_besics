

const placelist = document.getElementById('placesList');
const li = document.createElement('li');
li.innerText = 'Panchagarh';
placelist.appendChild(li);

const mainContainer =  document.getElementById('main-container');

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Khasir Kacci';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Gorur Kacci';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Borhani';
ul.appendChild(li3);



const section =  document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'New Briany List';
section.appendChild(h1);

section.appendChild(ul);

mainContainer.appendChild(section);

//Other Option 

const sectionDresses = document.createElement('section');
sectionDresses.innerHTML= `
<h1> My Dresses</h1>
<ul>
<li>Panjabi</li>
<li>Shirt</li>
<li>Pant</li>
</ul>`;

mainContainer.appendChild(sectionDresses);