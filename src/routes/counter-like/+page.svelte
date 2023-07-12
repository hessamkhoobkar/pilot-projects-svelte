<script>
	let likeCount = 1413;
	let liked = false;

	function handleLike() {
		if (liked) {
			liked = false;
			likeCount = likeCount - 1;
		} else {
			liked = true;
			likeCount = likeCount + 1;
		}
	}
</script>

<div class="app-wrap">
	<div class="post">
		<div class="post--info">
			<div class="user-info">
				<div class="user-info--avatar" />
				<div class="user-info--group">
					<div class="user-info--name" />
					<div class="user-info--date" />
				</div>
			</div>
			<div class="post--info--actions" />
		</div>
		<div class="post--thumbnail" />
		<div class="post--details">
			<div class="post--details--description">
				<div />
				<div />
				<div />
			</div>
		</div>
		<div class="post--actions">
			<div />
			<button on:click={handleLike} class:liked>
				<span>
					{#if liked}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M12 20.325q-.35 0-.713-.125t-.637-.4l-1.725-1.575q-2.65-2.425-4.788-4.813T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.538t2.5-.562q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125Z"
							/>
						</svg>

						<svg
							class="pulse"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M12 20.325q-.35 0-.713-.125t-.637-.4l-1.725-1.575q-2.65-2.425-4.788-4.813T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.538t2.5-.562q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125Z"
							/>
						</svg>
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M12 20.325q-.35 0-.713-.125t-.637-.4l-1.725-1.575q-2.65-2.425-4.788-4.813T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.538t2.5-.562q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125ZM11.05 6.75q-.725-1.025-1.55-1.562t-2-.538q-1.5 0-2.5 1t-1 2.5q0 1.3.925 2.763t2.213 2.837q1.287 1.375 2.65 2.575T12 18.3q.85-.775 2.213-1.975t2.65-2.575q1.287-1.375 2.212-2.837T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2 .537T12.95 6.75q-.175.25-.425.375T12 7.25q-.275 0-.525-.125t-.425-.375Zm.95 4.725Z"
							/>
						</svg>
					{/if}
				</span>
				<span>{likeCount}</span>
			</button>
		</div>
	</div>
</div>

<style lang="scss">
	.app-wrap {
		width: 100vw;
		width: 100dvw;
		min-height: 100vh;
		min-height: 100dvh;
		padding: 4rem;

		color: #000;
		background-color: #fff;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		font-size: 16px;
		font-weight: 500;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: 'inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
			Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.post {
		width: 32rem;
		border-radius: 1rem;
		padding: 1rem;
		background: #f7f7f8;

		&--info {
			display: flex;
			justify-content: space-between;
			align-items: center;

			&--actions {
				height: 3rem;
				width: 3rem;
				border-radius: 0.75rem;
				background: #e3e3e8aa;

				&:hover {
					cursor: pointer;
					background: #e3e3e8;
				}
			}
		}

		& .user-info {
			display: flex;
			justify-content: flex-start;
			align-items: center;

			&--avatar {
				height: 3rem;
				width: 3rem;
				border-radius: 99rem;
				background: hsl(240, 8%, 90%);
				margin-inline-end: 1rem;
			}

			&--name {
				height: 1rem;
				width: 8rem;
				border-radius: 0.25rem;
				background: #e3e3e8;
			}

			&--date {
				height: 0.75rem;
				width: 4rem;
				border-radius: 0.25rem;
				background: #e3e3e8;
				margin-top: 0.5rem;
			}
		}

		&--thumbnail {
			height: 32rem;
			width: 100%;
			border-radius: 0.75rem;
			background: #e3e3e868;
			margin-top: 1rem;
		}

		&--details {
			width: 100%;

			&--description {
				margin-top: 1rem;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				width: 100%;

				> div {
					height: 1rem;
					width: 8rem;
					border-radius: 0.25rem;
					background: #e3e3e8;
					margin-right: 0.5rem;

					&:nth-child(2) {
						width: 2rem;
					}

					&:nth-child(3) {
						width: 4rem;
					}
				}
			}
		}

		&--actions {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 1rem;

			div,
			button {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 49%;
				border-radius: 1rem;
				height: 4rem;
				border: 1px solid #e3e3e8;
			}

			button {
				background: white;
				border-color: white;
				transition: all 0.3s ease-in-out;

				span {
					margin-right: 0.5rem;
					position: relative;
				}

				svg {
					transition: transform 0.5s ease-in-out;

					&.pulse {
						position: absolute;
						top: 0;
						transform: scale(0.5, 0.5);
						color: white;
					}
				}

				&:hover {
					color: #a50021;
					border-color: #a50021;
					background: hsl(348, 54%, 96%);
					svg {
						transition: transform 0.5s ease-in-out;
						transform: scale(1.3, 1.3);
					}
				}
				&:active {
					svg {
						transition: transform 0.1s ease-in-out;
						transform: scale(0.9, 0.9);
					}
				}

				&.liked {
					color: #fff;
					border-color: #a50021;
					background-color: #a50021;

					svg.pulse {
						animation: pulse 1s forwards ease-out;
						box-shadow: 0px 15px 28px -11px rgba(255, 79, 93, 0.9);
					}
				}
			}
		}
	}

	@-webkit-keyframes pulse {
		0% {
			opacity: 1;
		}
		70% {
			opacity: 0;
			transform: scale(8, 8);
		}
		99% {
			opacity: 0;
			transform: scale(8, 8);
		}
		100% {
			opacity: 0;
			transform: scale(0.5, 0.5);
		}
	}
	@keyframes pulse {
		0% {
			opacity: 1;
		}
		70% {
			opacity: 0;
			transform: scale(8, 8);
		}
		99% {
			opacity: 0;
			transform: scale(8, 8);
		}
		100% {
			opacity: 0;
			transform: scale(0.5, 0.5);
		}
	}
</style>
