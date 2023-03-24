/*console.log(Document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10].textContent);
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);*/

//getelementbyid//

// console.log(document.getElementById('header-title'));
// var headertitle = document.getElementById('header-title');
// console.log(headertitle);
// headertitle.textContent = 'hello';
// headertitle.innerText = 'Goodbye';
// console.log(headertitle.innerText);
// headertitle.innerHTML = '<h1>hello</h1>'; 
// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';

//getElementByClassName//
var item = document.getElementsByClassName('list-group-item');


item[2].style.backgroundColor = 'green';

for(var i=0; i<item.length; i++)
{
    item[i].style.fontWeight = 'bold';  
}
var li = document.getElementsByTagName('li');
li[1].style.backgroundColor = 'black';







