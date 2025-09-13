// The Local Storage Manager: You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

// function saveNoteToLocalStorage(note) {
//     note = prompt("Enter your note");
//     localStorage(note)

// }


function saveNoteToLocalStorage(note) {
    // get existing notes from localStorage
    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    // add new note
    notes.push(note);

    // save back to localStorage
    localStorage.setItem("notes", JSON.stringify(notes));

    document.write(notes)
}

// Example usage
let newNote = prompt("Enter your note:");
saveNoteToLocalStorage(newNote);

console.log("Note saved!");
