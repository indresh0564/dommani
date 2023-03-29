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
// var itemList = document.querySelector('#items');
// //parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);
// //parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);
// // childNodes    children
// console.log(itemList.childNodes);
// console.log(itemList.childrn);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'green';
// //firstChild
// console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';
// //lastChile
// console.log(itemList.lastChild);
// //lastElementchild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';
// //nextSibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);
// //previousSibling
// console.log(itemList.previousSibling);
// //previousElementSibling
// console.log(itemList.previousElementSibling);
// //creatElement
// //creat a div
// var newDiv = document.createElement('div');
// //Add Class
// newDiv.className = 'hello';
// //Add Class
// newDiv.id = 'hello1';
// //Add attr
// newDiv.setAttribute('title','Hellodiv'); 
// //creat text node
// var newDivText = document.createTextNode('Hello World');
// //Add Text to Div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('Header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);
// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv, h1);
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var box = document.getElementById('itemNext').value;
  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  ///////////////////////////// description
      var inputvalue = newItem+box;
  // Add text node with input value
  li.appendChild(document.createTextNode(inputvalue));
  // li.appendChild(document.createTextNode(box));
var editBtn = document.createElement('button');
  editBtn.className = 'edit btn-sm float-right';
  editBtn.appendChild(document.createTextNode('edit'));
  li.appendChild(editBtn);
  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;

    if((itemName.toLowerCase().indexOf(text) != -1)){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
}
// console.log(1);