// Attach a click event handler to the button with the ID "push"
document.querySelector('#push').onclick = function() {
    // Check if the input field is empty
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a Task"); // Show an alert if the input is empty
    } else {
        // Append a new task element to the tasks container
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        // Attach click event handlers to the delete buttons of each task
        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove(); // Remove the parent task when the delete button is clicked
            }
        }

        // Attach click event handlers to toggle completed class on tasks
        var tasks = document.querySelectorAll(".task");
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function() {
                this.classList.toggle('completed'); // Toggle the "completed" class on the task when clicked
            }
        }

        // Clear the input field after adding a task
        document.querySelector("#newtask input").value = "";
    }
}
