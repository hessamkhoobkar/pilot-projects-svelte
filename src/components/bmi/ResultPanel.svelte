<script lang="ts">
	import ResultPanelAnime from './ResultPanelAnime.svelte';

	export let theBMIResult: number | null = null;
	export let isError: string | null = null;

	$: classification = !theBMIResult
		? { name: '', color: '' }
		: theBMIResult >= 30
		? { name: 'Obese', color: 'text-red-500' }
		: theBMIResult >= 25
		? { name: 'Overweight', color: 'text-orange-500' }
		: theBMIResult >= 18
		? { name: 'Healthy', color: 'text-lime-500' }
		: { name: 'Underweight', color: 'text-red-500' };
</script>

<div class="bg-slate-900 rounded-2xl px-6 py-4 w-full h-44 mt-8">
	{#if theBMIResult}
		<ResultPanelAnime>
			<p class="mb-4">
				You are
				<span class="{classification.color} font-bold"> {classification.name} </span>
				and Your BMI is
			</p>
			<p class="{classification.color} font-bold text-8xl text-center w-full">
				{theBMIResult}
			</p>
		</ResultPanelAnime>
	{:else if isError}
		<ResultPanelAnime>
			<p class="mb-4 text-red-600 text-xl">An error occurred</p>
			<p class="text-slate-500">
				{isError}
			</p>
		</ResultPanelAnime>
	{:else}
		<ResultPanelAnime>
			<p class="mb-4">BMI weight ranges</p>
			<p class="text-slate-500">
				Less than 18.5 = Underweight
				<br />
				Between 18.5 - 24.9 = Healthy Weight
				<br />
				Between 25 - 29.9 = Overweight
				<br />
				Over 30 = Obese
			</p>
		</ResultPanelAnime>
	{/if}
</div>
