import { defineStore, acceptHMRUpdate } from 'pinia'
import { v4 as uuidv4 } from 'uuid';

export const useStoreNotes = defineStore('storeNotes', {
	state: () => {
		return { 
			notes: [
				{
					id: uuidv4(),
					content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempore reiciendis sit deserunt nostrum reprehenderit est. Cumque porro dolores, quidem unde ratione eligendi nesciunt! Iusto veritatis consectetur quis modi magnam!',
				},
				{
					id: uuidv4(),
					content: 'Update'
				},
			]
		}
	},
	actions: {
		addNote (newNote) {
			let note = {
				id: uuidv4(),
				content: newNote
			}

			this.notes.unshift(note)
		},
		deleteNote (id) {
			this.notes = this.notes.filter(note => {
				return note.id !== id
			})
		}
	}
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot))
}