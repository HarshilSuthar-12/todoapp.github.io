document.querySelector('#push').onclick = function(){
    if (document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task!")
    } 
    else{
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
        <span id="taskname">
            ${document.querySelector('#newtask input').value}
        </span>
        <button class="delete">
        <i class="fa fa-trash-o" aria-hidden="true"></i>
        </button>
        </div>
        
        `;
        var current_task = document.querySelectorAll(".delete");
        
        for(var i = 0; i < current_task.length; i++){
            current_task[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
    var tasks = document.querySelectorAll(".task");
    for(var i = 0; i < tasks.length; i++){
        tasks[i].onclick = function(){
            this.classList.toggle('complated');
        }
    }
    document.querySelector('#newtask input').value = "";
}