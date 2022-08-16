const sections =  document.querySelectorAll('section');
// console.log(sections);
for (const section of sections){
    // console.log(section);
    section.style.border = '2px solid blue';
    section.style.marginBottom ='5px';  
    section.style.borderRadius= '10px';
    section.style.paddingLeft= '7px';
    section.style.backgroundColor= 'lightgrey'
    section.style.color= 'black';
    section.style.fontSize= '1.5rem';
};

const places =  document.getElementsByClassName('placesContainer');
for (const place of places){
    place.style.backgroundColor= 'blue';
    place.style.color= 'white';
}