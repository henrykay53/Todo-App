// creating close button and appending it to each list item
var myNodeList = $('li');
for (var i = 0; i < myNodeList.length; i++) {
  var span = document.createElement('span');
  var txt = document.createTextNode("u\00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);

};

//click on close button to hide list item
var close = $(".close");
for (var i=0; i < close.length; i++) {
  close[i].on('click', function() {
    var div = this.parentElement;
    div.style.display = "none";
  });
}

// Create a new list item when clicking on the "Add" button
function newElement() {

  var li = document.createElement("li");
  var inputValue = $("#list--item").val();
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    alert("You must write something!");
  }
  else {
  $("#my--list").appendChild(li);
  }

  $("#list--item").val('');
  
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  
  for (i = 0; i < close.length; i++) {
    close[i].on('click', function() {
      var div = this.parentElement;
      div.style.display= "none";
    })
  }
}
 
console.log('Hello');


