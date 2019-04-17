$(document).ready(function(){
    //$('p.para1').css('color', 'blue');
      //$('p.para1').css({color: 'blue', background:'#ccc'});
      //$('#btnl').click(function(){
       //   $('p.para2').toggleClass('myClass')
      })
//$('table').append('<td> ""</td>');
//$('table').prepend('<td>""</td>');
//$('.para1').appendTo('.para2');
//$('.para1').prependTo('.para2');

$('table').before('<h4>NELSON MANDELLA LIBRARY</h4>')
$('table').after('<h4>NELSON MANDELLA</h4>')
$('#newItem').keyup(function(e){
      var code = e.which;
      if(code == 13){
          e.preventDefault();
      $('table').append('<td>'+e.target.value +'</td>' );

  
  }
})
  //})
  var newItemCounter = 1;
  var ourList = document.getElementById("our-listItem");
  var ourNewItem = document.getElementById("newItem");
var Headline = document.getElementById("our-headline");
var listItems = document.getElementById("our-listItem").getElementsByTagName("tr");
//for(i = 0; i < listItems.length; i++){
ourList.addEventListener("click", activateItem);
//}
function activateItem(e){
  if(e.target.nodeName == "TD"){
  Headline.innerHTML = e.target.innerHTML;
  for(i = 0; i < e.target.parentNode.children.length; i++)
  e.target.parentNode.children[i].classList.remove("active");
   newItemCounter++;
};
}

const form = document.querySelector('form')
const table = document.querySelector(' tr')
const button = document.querySelector('button')
const input = document.getElementById('newItem')
let itemsArray = localStorage.getItem('newItem') ? JSON.parse(localStorage.getItem('newItem')) : []

localStorage.setItem('newItem', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('newItem'))

const tdMaker = text => {
  const tr = document.createElement('tr')
  tr.textContent = text
  table.appendChild(tr)
}

form.addEventListener('submit', function(e) {
  e.preventDefault()

  itemsArray.push(input.value)
  localStorage.setItem('newItem', JSON.stringify(itemsArray))
  tdMaker(input.value)
  input.value = ''
})

data.forEach(table => {
  tdMaker(table)
})

button.addEventListener('click', function() {
  localStorage.clear()
  while (table.firstChild) {
    table.removeChild(table.firstChild)
    ourList.innerHTML += "<tr> " + newItemCounter + "</tr>";
    newItemCounter++;
  }
})  
  



function myFunction(){
    var input, filter, table, tr, td, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("our-listItem");
    tr = table.getElementsByTagName("tr");
    for(i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName("td")[0];
        if(td){
        txtValue = td.textContent || td.innerText;
      
        
        if(txtValue.toUpperCase().indexOf(filter) > -1){
            tr[i].style.display = "";
          
        } else{
            tr[i].style.display = "none";
        }
    }
}
}
