//Contenedor de fechas
const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");

//Contenedor de Tareas
const tasksContainer = document.getElementById('tasksContainer');

//Setear la hora
const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString("es", { day: "numeric" });
    dateText.textContent = date.toLocaleString("es", { weekday: "long" });
    dateMonth.textContent = date.toLocaleString("es", { month: "short" });
    dateYear.textContent = date.toLocaleString("es", { year: "numeric" });
};

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};



const changeTaskState = event =>{
    event.target.classList.toggle('done');
};

const order = () =>{
    const done = [];
    const toDO = [];
    tasksContainer.childNodes.forEach(elemento =>{
        elemento.classList.contains('done') ? done.push(elemento) : toDO.push(elemento)
    })
    return [...toDO, ...done]
}

const renderOrdererTasks = () =>{
    order().forEach(elemento => tasksContainer.appendChild(elemento))
}
setDate();