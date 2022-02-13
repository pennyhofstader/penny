var button = document.getElementById("enter");
var userInput = document.getElementById("user_input");
var ol = document.querySelector("ol");
var list = document.querySelectorAll("li");




function createListItem(){
    if(userInput.value.length > 0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(userInput.value));
        ol.appendChild(li);
        userInput.value = ""
        li.addEventListener("click", toggleItems);
        addButton(li);
      
        }
        
    }

    function addListAfterKeypress(event) {
        if (userInput.value.length > 0 && event.keyCode === 13) {
            createListItem();
        }
    }

    function toggleItems(){
        this.classList.toggle("done");
    }

    function addButton(li){
        var deltbtn = document.createElement("button");
        deltbtn.appendChild(document.createTextNode("delete"));
        deltbtn.classList.add("listButton");
        li.appendChild(deltbtn);
        deltbtn.addEventListener("click", deleteItems)

    }

    function deleteItems(){
            this.parentNode.parentNode.removeChild(this.parentNode);
    }

   
    for(var i = 0 ; i < list.length; i++){
        list[i].addEventListener("click", toggleItems);
        addButton(list[i]);
        
        
    }

 



button.addEventListener("click", createListItem); //event listener for adding list on mouse click

userInput.addEventListener("keypress", addListAfterKeypress); // event listener for adding list on enter key

