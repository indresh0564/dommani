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
// var item = document.getElementsByClassName('list-group-item');
// item[2].style.backgroundColor = 'green';

// for(var i=0; i<item.length; i++)
// {
//     item[i].style.fontWeight = 'bold';  
// }
// var li = document.getElementsByTagName('li');
// li[1].style.backgroundColor = 'black';

//querySelector//

// var item = document.querySelector('.list-group-item');
// item.style.color = 'green';

// var nthitem = document.querySelector('.list-group-item:nth-child(2)');
// nthitem.style.color = 'green';

// var rditem = document.querySelector('.list-group-item:nth-child(3)');
// rditem.style.visibility = 'hidden';

//querySelectorAll//

// var item = document.querySelectorAll('.list-group-item');
// item[1].style.color = 'green';

//  var odd = document.querySelectorAll('li:nth-child(odd)');
//  for(var i=0; i<odd.length; i++)
//  {
//     odd[i].style.backgroundColor = 'green';
//  }
var itemList = document.querySelector('#items');
//parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);
//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);
// childNodes    children
console.log(itemList.childNodes);
console.log(itemList.childrn);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'green';
//firstChild
console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';
//lastChile
console.log(itemList.lastChild);
//lastElementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';
//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);
//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
//creatElement
//creat a div
var newDiv = document.createElement('div');
//Add Class
newDiv.className = 'hello';
//Add Class
newDiv.id = 'hello1';
//Add attr
newDiv.setAttribute('title','Hellodiv'); 
//creat text node
var newDivText = document.createTextNode('Hello World');
//Add Text to Div
newDiv.appendChild(newDivText);

var container = document.querySelector('Header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);








