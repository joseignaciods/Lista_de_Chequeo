//Contenedor de fechas
const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");

//Contenedor de Tareas
const taskContainer = document.getElementById('taskContainer');

const setDate = () => {
    const date = setDate();
    dateNumber.textContent = date.toLocaleString("es", { day: "numeric" });
    dateText.textContent = date.toLocaleString("es", { weekday: "long" });
    dateMonth.textContent = date.toLocaleString("es", { month: "short" });
    dateYear.textContent = date.toLocaleString("es", { year: "numeric" });
};

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.task
};


setDate();