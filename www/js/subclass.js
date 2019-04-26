
var queryString = decodeURIComponent(window.location.search); //parsing
queryString = queryString.substring(1);
var queries = queryString.split("&");
for (var i = 0; i < queries.length; i++)
{
  document.write(queries[i] + "<br>");
}




/*$(document).ready(function () {
    $('p.para1').css('color', 'blue');
    $('p.para1').css({ color: 'blue', background: '#ccc' });
    $('#btnl').click(function () {
        $('p.para2').toggleClass('myClass')
    })
    //$('table').append('<td> ""</td>');
    //$('table').prepend('<td>""</td>');
    $('.para1').appendTo('.para2');
    $('.para1').prependTo('.para2');

    $('ol').before('<h4>unichris libray</h4>')
    $('ol').after('<h4>unichris library</h4>')
    $('#newItem').keyup(function (e) {
        var code = e.which;
        if (code == 13) {
            e.preventDefault();
            $('ol').append('<li>' + e.target.value + '</li>');


        }
    })
})


var newItemCounter = 1;
var ourList = document.getElementById("our-listItem");
var ourNewItem = document.getElementById("newItem");
var Headline = document.getElementById("our-headline");
var listItems = document.getElementById("our-listItem").getElementsByTagName("li");
//for(i = 0; i < listItems.length; i++){
ourList.addEventListener("click", activateItem);
//}
function activateItem(e) {
    if (e.target.nodeName == "LI") {
        Headline.innerHTML = e.target.innerHTML;
        for (i = 0; i < e.target.parentNode.children.length; i++)
            e.target.parentNode.children[i].classList.remove("active");
        newItemCounter++;
    };
}

ourNewItem.addEventListener("click", createNewItem);

function createNewItem() {
    ourList.innerHTML += "<li> " + newItemCounter + "</li>";
    newItemCounter++;
};*/

   {href: "social sciences ",  Subclass; "Social sciences(Genera) 'Subclass H' ",
      "Statistics 'Subclass HA" ,
     "Economic theory. Demography 'Subclass HB' " ,
     "Economic history and condition 'Subclass HC' " ,
     "Industries Land use Labor 'Subclass HD ' " ,
     "Transportation and communications 'Subclass HE' " ,
     "Commerce'HF' " ,
      "Finance 'Subclass HG' " ,
     "Public Finance 'Subclass HJ'" ,
    "Sociology (general) 'Subclass HM' " ,
     " Social history and conditions. Social problems. Social reform'Subclass HN' " ,
     "The family. Marriage. Women and Sexuality 'Subclass HQ ' " ,
   "Society secret, benevolent 'Subclass HS' " ,
    "Communities. Classes. Races'HF' " ,
     "Social patholgy. Social and public welfare. Criminology 'Subclass HV' ",
     "Socialism. communism. Anarchism'HX' " };

   
   /*
  {href:""   "Dictionary.html", description: "Dictionary and other reference work 'Class AG' " 
     "Indexes.html", description: "Indexes 'Class AI" 
     "Encyclopedia.html", description: "Encyclopedia 'Class AC' " 
     "Newspapers.html", description: "Newspapers 'Class AN' " 
     "Periodicals.html", description: "periodicals 'class AP' "
     "Yearbooks.html", description: "Yearbooks, Almanacs, Directories 'AY' "
     "General philosophy.html", description: "Philosophy(General) 'Subclass B' "
     "Logic.html", description: "Logic 'Subclass BC" },
     "Speculative philosophy.html", description: "Speculative Philosophy 'Subclass BD' " ,
     "Ethics.html", description: "Ethics 'Class BJ' " ,
     "Religion.html", description: "Religion, mythology, Rationalism' Subclass BL' " ,
    "Judaism.html", description: "Judaism 'Class BM' " ,
     "Buddhism.html", description: "Buddhism 'Subclass BQ' " ,
     "christainity.html", description: "Christainity 'Subclass BR" ,
     "Bible.html", description: "The Bible 'Subclass BS' " },
     "Dotrinal.html", description: "Dotrinal Theology 'Subclass BT' " ,
     "Practal theology.html", description: "Practical Theology'Subclass BV' " ,
     "Christain Denomination.html", description: "Christain Denomination'Class BM' " ,
     "Philology.html", description: "Philology. Linguistics 'Subclass P' " ,
     "Greek language.html", description: "Greek language and literature. Latin language and literature'Subclass PA" ,
     "English.html", description: "English language'Subclass PE" ,
     "General literature.html", description: "Literature(General) 'Subclass PN' " ,
     "English literature.html", description: "English literature 'Subclass PR' " ,
     "American Literature.html", description: "American Literature 'Subclass PS ' " ,
     "Fictions and juvenile.html", description: "Fictions and juvenile belles lellres'Subclass PZ' " ,
*/

const renderListItems = (listNode, listData) => {

    listData.map((anElement) => {

        var liElement = document.createElement("li");
        var aElement = document.createElement("a");

        aElement.setAttribute("href", anElement.href);
        aElement.innerText = anElement.description;

        liElement.appendChild(aElement);

        listNode.appendChild(liElement);
    })
}





function myFunction() {
    var input, filter, ol, li, a, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ol = document.getElementById("our-listItem");
    li = ol.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.txtContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";

        } else {
            li[i].style.display = "none";
        }
    }
}
renderListItems(ourList, listData);
