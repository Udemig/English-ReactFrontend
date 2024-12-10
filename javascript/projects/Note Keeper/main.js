// Define colors for notes
const COLORS = [
    { name: 'white', value: '#ffffff' },
    { name: 'peach', value: '#ffe5d9' },
    { name: 'mint', value: '#e0fff4' },
    { name: 'lavender', value: '#e6e6fa' },
    { name: 'yellow', value: '#ffffd4' }
];

let editingId = null;
let selectedColor = COLORS[0].value;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeColorPicker();
    loadNotes();
    initializeSearch();
});

function initializeColorPicker() {
    const colorPicker = document.getElementById('colorPicker');
    colorPicker.innerHTML = COLORS.map(color => `
        <div class="color-option ${color.value === selectedColor ? 'selected' : ''}"
             style="background-color: ${color.value}"
             onclick="selectColor('${color.value}')">
        </div>
    `).join('');
}

function selectColor(color) {
    selectedColor = color;
    document.querySelectorAll('.color-option').forEach(option => {
        option.classList.toggle('selected', option.style.backgroundColor === color);
    });
}

function initializeSearch() {
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterNotes(searchTerm);
    });
}

function filterNotes(searchTerm) {
    const notes = getNotes();
    const filteredNotes = notes.filter(note => 
        note.title.toLowerCase().includes(searchTerm) ||
        note.content.toLowerCase().includes(searchTerm) ||
        note.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    renderNotes(filteredNotes);
}

function saveNote() {
    const titleInput = document.getElementById('noteTitle');
    const contentInput = document.getElementById('noteContent');
    const tagsInput = document.getElementById('noteTags');
    
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();
    const tags = tagsInput.value.split(',').map(tag => tag.trim()).filter(tag => tag);
    
    if (!title || !content) {
        alert('Please fill in both title and content!');
        return;
    }

    const notes = getNotes();

    if (editingId) {
        // Update existing note
        const noteIndex = notes.findIndex(note => note.id === editingId);
        if (noteIndex !== -1) {
            notes[noteIndex] = {
                ...notes[noteIndex],
                title,
                content,
                tags,
                color: selectedColor,
                lastEdited: new Date().toLocaleDateString()
            };
        }
        editingId = null;
    } else {
        // Add new note
        const note = {
            id: Date.now(),
            title,
            content,
            tags,
            color: selectedColor,
            date: new Date().toLocaleDateString(),
            lastEdited: null,
            pinned: false
        };
        notes.push(note);
    }

    localStorage.setItem('notes', JSON.stringify(notes));
    resetForm();
    loadNotes();
}

function togglePin(id) {
    const notes = getNotes();
    const noteIndex = notes.findIndex(note => note.id === id);
    if (noteIndex !== -1) {
        notes[noteIndex].pinned = !notes[noteIndex].pinned;
        localStorage.setItem('notes', JSON.stringify(notes));
        loadNotes();
    }
}

function editNote(id) {
    const notes = getNotes();
    const note = notes.find(note => note.id === id);
    
    if (note) {
        document.getElementById('noteTitle').value = note.title;
        document.getElementById('noteContent').value = note.content;
        document.getElementById('noteTags').value = note.tags.join(', ');
        selectColor(note.color || COLORS[0].value);
        document.getElementById('saveButton').textContent = 'Update Note';
        document.getElementById('cancelButton').style.display = 'inline-block';
        editingId = id;
    }
}

function resetForm() {
    document.getElementById('noteTitle').value = '';
    document.getElementById('noteContent').value = '';
    document.getElementById('noteTags').value = '';
    document.getElementById('saveButton').textContent = 'Add Note';
    document.getElementById('cancelButton').style.display = 'none';
    selectColor(COLORS[0].value);
    editingId = null;
}

function cancelEdit() {
    resetForm();
}

function deleteNote(id) {
    const notes = getNotes().filter(note => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(notes));
    loadNotes();
}

function getNotes() {
    return JSON.parse(localStorage.getItem('notes') || '[]');
}

function loadNotes() {
    const notes = getNotes();
    renderNotes(notes);
}

function renderNotes(notes) {
    const notesContainer = document.getElementById('notesContainer');
    
    // Sort notes: pinned first, then by date
    const sortedNotes = [...notes].sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return new Date(b.date) - new Date(a.date);
    });
    
    notesContainer.innerHTML = sortedNotes.map(note => `
        <div class="note ${note.pinned ? 'pinned' : ''}" style="background-color: ${note.color || '#ffffff'}">
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <div class="tags">
                ${note.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <small style="color: #666;">Created: ${note.date}</small>
            ${note.lastEdited ? `<br><small style="color: #666;">Last edited: ${note.lastEdited}</small>` : ''}
            <div class="actions">
                <button class="pin" onclick="togglePin(${note.id})">${note.pinned ? 'Unpin' : 'Pin'}</button>
                <button class="edit" onclick="editNote(${note.id})">Edit</button>
                <button class="delete" onclick="deleteNote(${note.id})">Delete</button>
            </div>
        </div>
    `).join('');
}