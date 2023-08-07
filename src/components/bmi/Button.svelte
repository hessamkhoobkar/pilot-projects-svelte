<script lang="ts">
	export let label: string;
</script>

<button
	on:click
	class="bg-lime-500 hover:bg-lime-400 text-slate-900 font-bold p-4 w-full rounded-2xl mt-4 transition-all duration-200 ease-in-out"
>
	{label}
</button>
