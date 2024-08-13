<template>
	<Navbar></Navbar>
	<div class="container is-max-desktop px-2 py-4">
		<RouterView />
	</div>
</template>

<script setup>
import Navbar from '@/components/Layout/Navbar.vue'
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>