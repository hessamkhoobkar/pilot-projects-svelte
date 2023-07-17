<script lang="ts">
	export let theBMIResult: number | null = null;
	export let isError: string | null = null;
</script>

<div
	class="flex flex-col justify-start items-start bg-slate-900 rounded-2xl px-6 py-4 w-full h-44 mt-8"
>
	{#if theBMIResult}
		<p class="mb-4">Your BMI is</p>
		{#if theBMIResult >= 30}
			<p class="">
				<span class="text-red-500 font-bold text-8xl">
					{theBMIResult}
				</span>
				<span class="text-slate-500"> Obese </span>
			</p>
		{:else if theBMIResult >= 25}
			<p class="">
				<span class="text-orange-500 font-bold text-8xl">
					{theBMIResult}
				</span>
				<span class="text-slate-500"> Overweight </span>
			</p>
		{:else if theBMIResult >= 18.5}
			<p class="">
				<span class="text-lime-500 font-bold text-8xl">
					{theBMIResult}
				</span>
				<span class="text-slate-500"> Healthy Weight </span>
			</p>
		{:else}
			<p class="">
				<span class="text-red-500 font-bold text-8xl">
					{theBMIResult}
				</span>
				<span class="text-slate-500"> Underweight </span>
			</p>
		{/if}
	{:else if isError}
		<p class="mb-4 text-red-600 text-xl">An error occurred</p>
		<p class="text-slate-500">
			{isError}
		</p>
	{:else}
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
	{/if}
</div>
