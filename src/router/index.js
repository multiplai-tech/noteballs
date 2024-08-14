import { createRouter, createWebHistory } from 'vue-router'

import ViewNotes from '@/views/ViewNotes.vue'
import ViewEditNote from '@/views/ViewEditNote.vue'
import ViewStats from '@/views/ViewStats.vue'

const routes = [
	{
		path: '/',
		name: 'notes',
		component: ViewNotes,
	},
	{
		path: '/editNote/:id',
		name: 'edit',
		component: ViewEditNote,
	},
	{
		path: '/stats',
		name: 'stats',
		component: ViewStats,
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router