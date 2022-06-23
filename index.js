const searchButton = document.querySelector('#search-button');
const sideButtons = document. querySelectorAll('#side-menu ul li a');
const sideButtonsImage = document.querySelectorAll('#side-menu ul li a img');
const taskList = document.querySelector('#tasks');
const taskName = document.querySelector('#task');
const taskComment = document.querySelector('#comment');
const taskPriority = document.querySelector('#priority');
const addButton = document.querySelector('#create-task');
const closeButton = document.querySelector('#close-button');
const addWindow = document.querySelector('#new-task-container');
const taskAdd = document.querySelector('#task-add');
const nameText = document.querySelector('label[for = "task"]');
const closeButtonEdit = document.querySelector('#close-button-edit');
const editWindow = document.querySelector('#edit-task-container');
const taskEdit = document.querySelector('#task-edit');
const editButton = document.querySelector('#edit-task-button');
const elementSelect = document.querySelector('#select-task');
const closeButtonProgress = document.querySelector('#close-button-progress');
const progressWindow = document.querySelector('#progress-task-container');
const taskprogress = document.querySelector('#task-progress');
const mobileMenu = document.querySelector('#mobile-menu');


// Navbar

searchButton.addEventListener('click', function(){
    const searchBar = document.querySelector('#search-bar');

    if (searchBar.className === 'actived'){
        searchBar.style.display = 'inline-block';
        searchBar.className = 'desactived';
    } else{
        searchBar.style.display = 'none'
        searchBar.className = 'actived';
    }

    

})

// Side buttons hover effect

sideButtons[0].addEventListener('mouseover', function(){
    sideButtonsImage[0].src = "images/task-add-over-icon.png";
} );

sideButtons[0].addEventListener('mouseleave', function(){
sideButtonsImage[0].src = "images/task-add-icon.png";
} );

sideButtons[1].addEventListener('mouseover', function(){
    sideButtonsImage[1].src = "images/task-progress-over-icon.png";
} );

sideButtons[1].addEventListener('mouseleave', function(){
sideButtonsImage[1].src = "images/task-progress-icon.png";
} );

sideButtons[2].addEventListener('mouseover', function(){
    sideButtonsImage[2].src = "images/task-edit-over-icon.png";
} );

sideButtons[2].addEventListener('mouseleave', function(){
sideButtonsImage[2].src = "images/task-edit-icon.png";
} );

// Create task

function openNewTask(){
    addWindow.style.display = 'inline-block'
}

addButton.addEventListener('click', function(){
    if (taskName.value === ''){
        taskName.setAttribute('placeholder', 'Preencha esse campo.')
        taskName.style.border = '1px solid red';
        nameText.style.color = 'red';
    }else{
        taskList.appendChild(createTask());
        taskName.value = '';
        taskComment.value = '';
        taskPriority.value = 'Baixa';
        taskName.setAttribute('placeholder', '')
        taskName.style.border = '1px solid #a0a0a1';
        nameText.style.color = 'black';
        taskName.focus();
    }
        
});

closeButton.addEventListener('click', function(){
    taskName.setAttribute('placeholder', '')
    taskName.style.border = '1px solid #a0a0a1';
    nameText.style.color = 'black';
    addWindow.style.display = 'none';
});

function createTask(){

const elementLi = document.createElement('li');
const elementSPAN = document.createElement('span');
const elementSPANCircle = document.createElement('span');
const elementSPAN2 = document.createElement('span');
const elementSPAN3 = document.createElement('span');
const elementA = document.createElement('a');
const elementA2 = document.createElement('a');
const elementImg2 = document.createElement('img');;
const elementH4one = document.createElement('h4');
const elementH4three = document.createElement('h4');

elementLi.appendChild(elementSPAN);
elementSPAN.setAttribute('class','task-name');
elementSPAN.appendChild(checkButton());
elementSPAN.appendChild(elementH4one);
elementH4one.innerHTML = taskName.value;
elementLi.appendChild(elementSPAN2);
elementSPAN2.setAttribute('class', 'task-priority');
elementSPAN2.appendChild(elementSPANCircle);
elementSPANCircle.className = taskPriority.value;
elementSPAN2.appendChild(elementH4three);
elementH4three.textContent = taskPriority.value;
elementLi.appendChild(elementSPAN3);
elementSPAN3.setAttribute('class', 'task-information');
elementSPAN3.appendChild(Comment());
elementSPAN3.appendChild(taskProgress());
elementSPAN3.appendChild(removeButton());

return elementLi;

}

function checkButton(){
    const checkButton = document.createElement('img');
    checkButton.src = 'images/tick-box-icon.png';
    checkButton.setAttribute('id', 'checkButton');

    checkButton.addEventListener('click', function(){
        if (checkButton.id === 'checkButton'){
            checkButton.src = 'images/checked-icon.png';
            this.nextElementSibling.className = 'checked';
            checkButton.id = '';

        }else{
            checkButton.src = 'images/tick-box-icon.png'
            this.nextElementSibling.className = '';
            checkButton.id = 'checkButton'     

        }
    })

    return checkButton;

}

function removeButton(){
    const removeButton = document.createElement('img');
    removeButton.src = 'images/remove-icon.png';

    removeButton.addEventListener('click', function(){
        taskList.removeChild(this.parentNode.parentNode);
    })

    return removeButton;

}


// Task Managment 

//task Comment

function Comment(){
    const taskCommentIco = document.createElement('img');
    taskCommentIco.src = 'images/comment-icon.png';
    taskCommentIco.setAttribute('title', taskComment.value);

    return taskCommentIco;

}

// task Progress

function taskProgress(){
    const taskProgress = document.createElement('a');
    taskProgress.setAttribute('class', 'progress');
    taskProgress.textContent = 'Em Progresso';
    taskProgress.style.cursor = 'pointer';

    taskProgress.addEventListener('click', function(){
        if (taskProgress.className === 'progress'){
            taskProgress.textContent = 'Concluída';
            taskProgress.style.color = 'green';
            taskProgress.style.border = '1px solid green';
            taskProgress.className = 'progress done';
        }else{
            taskProgress.textContent = 'Em Progresso';
            taskProgress.style.color = '#708798';
            taskProgress.style.border = '1px solid #708798';
            taskProgress.className = 'progress';
        }

    })

    return taskProgress;

}

function openProgressTask(){
    
    progressWindow.style.display = 'inline-block';

    calcProgress();

}

closeButtonProgress.addEventListener('click', function(){

    progressWindow.style.display = 'none';

});

function calcProgress(){
    const allTasks = document.querySelectorAll('.task-name h4');
    const allCheckedTasks = document.querySelectorAll('.task-name h4.checked');
    const percentageNumber = document.querySelector('#percentage');

    let percentage = (allCheckedTasks.length / allTasks.length  * 100) + '%';
    percentageNumber.innerHTML = percentage;

    return;

}

// Edit task

function openEditTask(){
    const allTasks = document.querySelectorAll('.task-name h4');
    editWindow.style.display = 'inline-block';
    for (x = 0; x < allTasks.length; x++){   
        function getTasks() {
            const Tasks = document.createElement('option');
            elementSelect.appendChild(Tasks);
            Tasks.innerHTML = allTasks[x].innerHTML;
    
            return Tasks;
    
        }
        getTasks();
    }
}

editButton.addEventListener('click',function(){
    const editName = document.querySelector('#editname');
    const editComment = document.querySelector('#editcomment');
    const allTasks = document.querySelectorAll('.task-name h4');
    const allComments = document.querySelectorAll('img[src="images/comment-icon.png"]')
    const nameText = document.querySelector('label[for="editname"]')

    if (editName.value === ''){
        editName.setAttribute('placeholder', 'Preencha esse campo.')
        editName.style.border = '1px solid red';
        nameText.style.color = 'red';
    }else{
        allTasks[elementSelect.selectedIndex].innerHTML = editName.value
        allComments[elementSelect.selectedIndex].setAttribute('title', editComment.value)
        editName.setAttribute('placeholder', '')
        editName.style.border = '';
        editName.value = '';
        editComment.value = '';
        editName.focus();
    }


})

closeButtonEdit.addEventListener('click', function(){
    const editComment = document.querySelector('#editcomment');
    const editName = document.querySelector('#editname');

    editWindow.style.display = 'none';
    elementSelect.innerText = '';
    editName.value = '';
    editComment.value = '';

});

// Mobile menu

// Open animation

function openMenu(){

    mobileMenu.className = 'open-animation';
}


// Close animation

function closeMenu(){

    mobileMenu.className = 'close-animation';
}




