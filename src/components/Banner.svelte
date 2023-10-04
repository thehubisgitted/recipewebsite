<script lang= "ts">
	import ArcticonsRecipeKeeper from 'virtual:icons/arcticons/recipe-keeper';
	import SolarChefHatBroken from 'virtual:icons/solar/chef-hat-broken';
	import SolarLogin2Outline from 'virtual:icons/solar/login-2-outline';
	import SolarLogout2Outline from 'virtual:icons/solar/logout-2-outline';
	
	let src =
		'https://images.unsplash.com/photo-1635936957646-58ee765a5e46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80';
	import { createPopover, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';

	const {
		elements: { trigger, content, close },
		states: { open }
	} = createPopover({ forceVisible: true, positioning: { placement: 'bottom-start' } });

	//   const userOptions = [
	//     {icon: ArcticonsRecipeKeeper, label: "Recipes", url:"/recipes"},
	//     {icon: SolarChefHatBroken, label: "Chefs", url:"/friends"},
	//     {icon: SolarLogout2Outline, label: "Log Out", url: "/logout"}
	//   ];

	//   const guestOptions = [
	//     {icon: SolarLogin2Outline, label: "Log In", url: "/login"}
	//   ];

	let loggedin = true;
</script>

<div class="root">
	<div class="banner">
		<div class="logo">AI Chef</div>
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<div class="avatar">
			<button type="button" class="trigger" use:melt={$trigger} aria-label="Profile Options">
				<span class="sr-only">Open Popover</span>
			</button>
		</div>
	</div>
	{#if $open}
		<div
			use:melt={$content}
			transition:fade={{ duration: 100 }}
			class="z-10 w-32 h-32 rounded-[4px] p-0 shadow-sm bg-popover"
		>
			<div class="flex flex-col gap-2.5 content-end">
				<ul class="block-inline space-y-3"role="list">
					{#if loggedin}
						<li role="listitem">
							<a href="stupid"><span class = "/recipes"><ArcticonsRecipeKeeper /></span><span>Recipes</span></a>
						</li>
						<li role="listitem"><a href="/chefs"><span class = "icon"><SolarChefHatBroken/></span><span>Chefs</span></a></li>
						<li role="listitem"><a href="/logout"><span class = "icon"><SolarLogout2Outline/></span><span>Log Out</span></a></li>
					{:else}
						<li role="listitem">
							<a href="/login"><span class = "icon"><SolarLogin2Outline/></span> <span>Log In</span></a>
						</li>
					{/if}
				</ul>
			</div>
		</div>
	{/if}
</div>

<style>
	.banner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 3%;
	}
	.root {
		font-family: 'Roboto', monospace;
		font-weight: bold;
		font-size: 200%;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.logo {
		color: #730ed8;
		align-items: flex-start;
		margin-left: 2%;
	}

	.avatar {
		align-items: flex-start;
		margin-right: 2%;
		min-width: 10vh;
		min-height: 10vh;
		border-radius: 50%;
		background-image: url('https://images.unsplash.com/photo-1635936957646-58ee765a5e46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80');
		background-position: center center;
		background-size: cover;
	}

	button.trigger {
		background: transparent;
		border: none !important;
		font-size: 0;
		display: block;
		min-width: 10vh;
		min-height: 10vh;
		border-radius: 50%;
	}

	.avatar:hover {
		box-shadow: 0 0 14px #999;
	}

	a {
		color: aliceblue;
		display: flex;
		flex-direction: row;
		margin: 4px;
		padding-top: 2px;
		font-size: large;
		align-items: center;
	}

	a:hover {
		background-color: #f66ff6;;
	}

	a:focus-visible {
		background-color: #f66ff6;
		box-shadow: 0 0 14px #f66ff6;
		outline: none;
		font-size: larger;
	}

    .icon{
        margin-left: 4px;
        margin-right: 6px;
        
    }
</style>
