<template>
	<div class="edit-note">
		<AddEditNote
			v-model="noteContent"
			ref="addEditNoteRef"
			bgColor="link"
			notePlaceholder="Save note"
			label="Save Content"
		>
			<template #buttons>
				<button @click="$router.push('/')" class="button is-link is-light mr-2">Cancel</button>
				<button :disabled="!noteContent" class="button is-link has-background-link">Save</button>
			</template>
		</AddEditNote>
	</div>
</template>

<script setup>
// IMPORT
import { ref } from 'vue';
import AddEditNote from '@/components/Notes/AddEditNote.vue';

const noteContent = ref('')
</script>