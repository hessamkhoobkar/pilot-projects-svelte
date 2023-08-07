<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<div
	class="flex flex-col justify-start items-start"
	in:fly={{ y: 10, duration: 500, delay: 200 }}
	out:fly={{ y: 10, duration: 200 }}
>
	<slot />
</div>
