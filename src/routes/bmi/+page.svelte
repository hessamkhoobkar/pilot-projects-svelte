<script lang="ts">
	import ResultPanel from '@components/bmi/ResultPanel.svelte';
	import Input from '@components/bmi/Input.svelte';

	let heightValue: number | null = null;
	let weightValue: number | null = null;
	let theBMIResult: number | null = null;
	let isError: string | null = null;

	function reqBMI() {
		if (heightValue && weightValue) {
			isError = null;
			let metricHeight = heightValue / 100;
			theBMIResult = +(weightValue / (metricHeight * metricHeight)).toFixed(1);
		} else {
			isError = 'Please provide your accurate height and weight to calculate your BMI.';
		}
	}
</script>

<div
	class="font-sans font-medium text-base antialiased w-screen min-h-screen text-white bg-slate-950 flex flex-col justify-center items-center"
>
	<div class="flex flex-col justify-start items-start w-full max-w-lg mx-auto">
		<div class="flex flex-col justify-start items-start w-full gap-4">
			<h1 class="text-2xl">BMI Calculator</h1>
			<p class="text-slate-400">
				Body mass index (BMI) is a measure of body fat based on height and weight that applies to
				adult men and women.
			</p>
		</div>

		<div class="flex flex-col justify-start items-start w-full gap-4 mt-8">
			<Input bind:value={heightValue} on:enter={reqBMI} name="height" placeholder="180" unit="cm" />
			<Input bind:value={weightValue} on:enter={reqBMI} name="weight" placeholder="80" unit="kg" />
		</div>

		<button
			on:click={reqBMI}
			class="bg-lime-500 hover:bg-lime-400 text-slate-900 font-bold p-4 w-full rounded-2xl mt-4 transition-all duration-200 ease-in-out"
		>
			Caclulate
		</button>

		<ResultPanel {theBMIResult} {isError} />
	</div>
</div>
