<script lang="ts">
	import ResultPanel from '@components/bmi/ResultPanel.svelte';
	import Input from '@components/bmi/Input.svelte';
	import Header from '@//components/bmi/Header.svelte';
	import Button from '@//components/bmi/Button.svelte';

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
		<Header />
		<div class="flex flex-col justify-start items-start w-full gap-4 mt-8">
			<Input
				bind:value={heightValue}
				on:enter={reqBMI}
				name="height"
				min={60}
				max={260}
				placeholder="180"
				unit="cm"
			/>
			<Input
				bind:value={weightValue}
				on:enter={reqBMI}
				name="weight"
				min={40}
				max={300}
				placeholder="80"
				unit="kg"
			/>
		</div>
		<Button on:click={reqBMI} label="Caclulate" />
		<ResultPanel {theBMIResult} {isError} />
	</div>
</div>
