console.log("Workout App gestartet");


// Array für die Daten
let workouts = JSON.parse(localStorage.getItem("workouts")) || [];


// Elemente holen
const workoutInput = document.getElementById("workoutInput");

const addWorkoutBtn = document.getElementById("addWorkoutBtn");

const workoutContainer = document.getElementById("workoutContainer");


// Daten speichern
function saveWorkouts() {

    localStorage.setItem("workouts", JSON.stringify(workouts));
}


// Workouts anzeigen
function renderWorkouts() {

    // Container leeren
    workoutContainer.innerHTML = "";

    // Für jedes Workout
    workouts.forEach((workout, index) => {

        // Neues Div erstellen
        const workoutBox = document.createElement("div");

        workoutBox.classList.add("workout-box");


        // Text erstellen
        const workoutText = document.createElement("span");

        workoutText.textContent = workout;


        // Button Container
        const buttonContainer = document.createElement("div");

        buttonContainer.classList.add("workout-buttons");


        // Edit Button
        const editBtn = document.createElement("button");

        editBtn.textContent = "Bearbeiten";


        // Delete Button
        const deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Löschen";


        // Edit Funktion
        editBtn.addEventListener("click", function () {

            const neuerText = prompt(
                "Workout bearbeiten:",
                workout
            );

            if (neuerText !== null && neuerText !== "") {

                workouts[index] = neuerText;

                saveWorkouts();

                renderWorkouts();
            }
        });


        // Delete Funktion
        deleteBtn.addEventListener("click", function () {

            workouts.splice(index, 1);

            saveWorkouts();

            renderWorkouts();
        });


        // Buttons hinzufügen
        buttonContainer.appendChild(editBtn);

        buttonContainer.appendChild(deleteBtn);


        // Alles zur Box hinzufügen
        workoutBox.appendChild(workoutText);

        workoutBox.appendChild(buttonContainer);


        // Box auf Seite anzeigen
        workoutContainer.appendChild(workoutBox);
    });
}


// Workout hinzufügen
addWorkoutBtn.addEventListener("click", function () {

    const value = workoutInput.value;

    // Leere Eingaben verhindern
    if (value === "") {
        return;
    }

    // Neues Workout speichern
    workouts.push(value);

    // localStorage speichern
    saveWorkouts();

    // Neu rendern
    renderWorkouts();

    // Input leeren
    workoutInput.value = "";
});


// Beim Laden anzeigen
renderWorkouts();

function deleteSection(button) {
    button.parentElement.remove();
}

function editSection(button) {

    let section = button.parentElement;

    let spans = section.querySelectorAll("span");

    spans.forEach(span => {

        let neuerWert = prompt(
            "Neuer Wert:",
            span.textContent
        );

        if (neuerWert !== null) {

            span.textContent = neuerWert;
        }
    });
}

function editList(button) {

    let section = button.parentElement;

    let items = section.querySelectorAll("li");

    items.forEach(li => {

        let neuerText = prompt(
            "Neuer Eintrag:",
            li.textContent
        );

        if (neuerText !== null) {

            li.textContent = neuerText;
        }
    });
}