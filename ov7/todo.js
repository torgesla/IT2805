var tasks = [];
function addTask(){
  var content = document.getElementById('textfield').value;
  var todolist = document.getElementById('todolist');
  var total = document.getElementById('total');
  var completed = document.getElementById('completed');
  if(content!=''){

    total.textContent = +total.textContent + 1;
    var node = document.createElement('LI');
    var checkbox = document.createElement('INPUT');
    checkbox.setAttribute('type','checkbox');
    node.appendChild(checkbox);
    var label_part = document.createElement('LABEL');
    var textpart = document.createTextNode(content);
    label_part.appendChild(textpart);
    node.appendChild(label_part);
    todolist.insertBefore(node, todolist.childNodes[0])
    document.getElementById('textfield').value='';
    //Add element to Js Array
    var listelement = content+'; '+Date(Date.now()).toString();
    tasks.unshift(listelement);
    console.log(tasks);
    //Checkbox eventlistner
    checkbox.addEventListener("change", function(event) {
        if (this.checked) completed.textContent = +completed.textContent + 1;
        else completed.textContent = +completed.textContent - 1;
      });
  }
}
