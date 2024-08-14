<template>
<div class="notes">
	<AddEditNote
		v-model="newNote"
		ref="addEditNoteRef"
		notePlaceholder="Add new note"
		label="Add New Note"
	>
		<template #buttons>
			<button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">Add New Note +</button>
		</template>
	</AddEditNote>
	<Note
		v-for="note in storeNotes.notes"
		:key="note.id" 
		:note="note"
		@deleteNote="storeNotes.deleteNote(note.id)"
	/>
</div>
</template>

<script setup>
// IMPORTS
import { ref } from 'vue'
import { useStoreNotes } from '@/store/storeNotes';

// COMPONENTS
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'

const storeNotes = useStoreNotes()

const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = () => {
	storeNotes.addNote(newNote.value)
	newNote.value = ''
	addEditNoteRef.value.focusTextArea()
}
</script>