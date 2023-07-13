<script>
	import { fade, fly } from 'svelte/transition'

	let location =''
	let skeleton = true
	let display ={
		nom: true,
		phone: true,
		email: true,
		adresse: true,
		horaire: true
	}

	async function Result() {
		let url =`./api/mairie/?departement=${location}`
		let res = await fetch(url)
		let data = res.json()

		return data
	}

	let promise = Result()

	function handleClick() {
		if(location != ''){
			skeleton = false
			promise = Result();
		}
	}

</script>

<svelte:head>
	<title>Annuaire des mairies de France</title>
	<meta name="description" content="Annuaire des mairies de France" />
	<meta property="og:description" content="Annuaire des mairies de France">
	<meta property="og:title" content="Annuaire des mairies de France">
	<meta property="og:image" content="https://annuaire-maire-france.vercel.app/cover.png">
	<meta property="og:type" content="siteweb">
	<link rel="canonical" href="https://annuaire-maire-france.vercel.app/">
</svelte:head>

<section class="grid grid-cols-12 w-full h-screen ">
	<div class="col-span-12 md:col-span-3 bg-gradient-to-t from-slate-100 to-sky-50 p-5 sm:p-10 flex flex-col justify-between shadow-2xl shadow-slate-200 border-r">
		<div class="flex flex-col items-center sticky top-10">
			<img src="./logo.png" alt="Maire de France" class="mb-10 w-2/3">
			<h1 class="text-2xl font-light mb-10">Annuaire des mairies de France</h1>
			<label for="departement" class="text-xs uppercase ">Séléctionnez le departements</label>
			<select id="departement" bind:value={location} class="bg-white border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2">
				<option value="" selected>Départements</option>
				<option value="01">(01) Ain </option>
				<option value="02">(02) Aisne </option>
				<option value="03">(03) Allier </option>
				<option value="04">(04) Alpes de Haute Provence </option>
				<option value="05">(05) Hautes Alpes </option>
				<option value="06">(06) Alpes Maritimes </option>
				<option value="07">(07) Ardèche </option>
				<option value="08">(08) Ardennes </option>
				<option value="09">(09) Ariège </option>
				<option value="10">(10) Aube </option>
				<option value="11">(11) Aude </option>
				<option value="12">(12) Aveyron </option>
				<option value="13">(13) Bouches du Rhône </option>
				<option value="14">(14) Calvados </option>
				<option value="15">(15) Cantal </option>
				<option value="16">(16) Charente </option>
				<option value="17">(17) Charente Maritime </option>
				<option value="18">(18) Cher </option>
				<option value="19">(19) Corrèze </option>
				<option value="2A">(2A) Corse du Sud </option>
				<option value="2B">(2B) Haute-Corse </option>
				<option value="21">(21) Côte d'Or </option>
				<option value="22">(22) Côtes d'Armor </option>
				<option value="23">(23) Creuse </option>
				<option value="24">(24) Dordogne </option>
				<option value="25">(25) Doubs </option
				><option value="26">(26) Drôme </option>
				<option value="27">(27) Eure </option>
				<option value="28">(28) Eure et Loir </option>
				<option value="29">(29) Finistère </option>
				<option value="30">(30) Gard </option>
				<option value="31">(31) Haute Garonne </option>
				<option value="32">(32) Gers </option>
				<option value="33">(33) Gironde </option>
				<option value="34">(34) Hérault </option>
				<option value="35">(35) Ille et Vilaine </option>
				<option value="36">(36) Indre </option>
				<option value="37">(37) Indre et Loire </option>
				<option value="38">(38) Isère </option>
				<option value="39">(39) Jura </option>
				<option value="40">(40) Landes </option>
				<option value="41">(41) Loir et Cher </option>
				<option value="42">(42) Loire </option>
				<option value="43">(43) Haute Loire </option>
				<option value="44">(44) Loire Atlantique </option>
				<option value="45">(45) Loiret </option>
				<option value="46">(46) Lot </option>
				<option value="47">(47) Lot et Garonne </option>
				<option value="48">(48) Lozère </option>
				<option value="49">(49) Maine et Loire </option>
				<option value="50">(50) Manche </option>
				<option value="51">(51) Marne </option>
				<option value="52">(52) Haute Marne </option>
				<option value="53">(53) Mayenne </option>
				<option value="54">(54) Meurthe et Moselle </option>
				<option value="55">(55) Meuse </option>
				<option value="56">(56) Morbihan </option>
				<option value="57">(57) Moselle </option>
				<option value="58">(58) Nièvre </option>
				<option value="59">(59) Nord </option>
				<option value="60">(60) Oise </option>
				<option value="61">(61) Orne </option>
				<option value="62">(62) Pas de Calais </option>
				<option value="63">(63) Puy de Dôme </option>
				<option value="64">(64) Pyrénées Atlantiques </option>
				<option value="65">(65) Hautes Pyrénées </option>
				<option value="66">(66) Pyrénées Orientales </option>
				<option value="67">(67) Bas Rhin </option>
				<option value="68">(68) Haut Rhin </option>
				<option value="69">(69) Rhône </option>
				<option value="70">(70) Haute Saône </option>
				<option value="71">(71) Saône et Loire </option>
				<option value="72">(72) Sarthe </option>
				<option value="73">(73) Savoie </option>
				<option value="74">(74) Haute Savoie </option>
				<option value="75">(75) Paris </option>
				<option value="76">(76) Seine Maritime </option>
				<option value="77">(77) Seine et Marne </option>
				<option value="78">(78) Yvelines </option>
				<option value="79">(79) Deux Sèvres </option>
				<option value="80">(80) Somme </option>
				<option value="81">(81) Tarn </option>
				<option value="82">(82) Tarn et Garonne </option>
				<option value="83">(83) Var </option>
				<option value="84">(84) Vaucluse </option>
				<option value="85">(85) Vendée </option>
				<option value="86">(86) Vienne </option>
				<option value="87">(87) Haute Vienne </option>
				<option value="88">(88) Vosges </option>
				<option value="89">(89) Yonne </option>
				<option value="90">(90) Territoire de Belfort </option>
				<option value="91">(91) Essonne </option>
				<option value="92">(92) Hauts de Seine </option>
				<option value="93">(93) Seine Saint Denis </option>
				<option value="94">(94) Val de Marne </option>
				<option value="95">(95) Val d'Oise </option>
				<option value="971">(971) Guadeloupe </option>
				<option value="972">(972) Martinique </option>
				<option value="973">(973) Guyane </option>
				<option value="974">(974) Réunion </option>
				<option value="975">(975) Saint Pierre et Miquelon </option>
				<option value="976">(976) Mayotte </option>
			</select>
			<button on:click={handleClick} type="button" class="flex items-center justify-center mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
				<svg fill="none" class="w-4 mr-2" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
				</svg>
				Recherche
			</button>
		</div>
		<p class="hidden md:flex text-sm font-semibold">
			Par 🤴 LES ROIS DU WEB 			
			<a href="https://marketing-europa.ch/" class="ml-2">Marketing Europa</a>
		</p>	
	</div>

	<div class="w-full flex justify-center items-center md:hidden fixed bottom-0 z-10">
		<p class="w-full text-center text-sm font-semibold bg-white border-t p-4">Par 🤴 LES ROIS DU WEB par 
			<a href="https://marketing-europa.ch/">Marketing Eeuropa</a>
		</p>	
	</div>
	<div id="result" class="flex flex-col col-span-12 md:col-span-9 p-5 sm:p-10" >
		{#if skeleton}
			<div class="flex w-full px-4 py-2 text-slate-500 bg-slate-100 animate-pulse rounded-md mt-5 mb-5 sm:mb-10">
				<svg fill="none"class="w-4 mr-2" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
					<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
				</svg>
				Séléctionnez un département
			</div>
			<div role="status" class="w-full p-4 space-y-4 border border-slate-200 divide-y divide-slate-200 rounded shadow animate-pulse md:p-6">
				<div class="flex items-center justify-between">
					<div>
						<div class="h-2.5 bg-slate-300 rounded-full w-24 mb-2.5"></div>
						<div class="w-32 h-2 bg-slate-200 rounded-full "></div>
					</div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
				</div>
				<div class="flex items-center justify-between">
					<div>
						<div class="h-2.5 bg-slate-300 rounded-fullw-24 mb-2.5"></div>
						<div class="w-32 h-2 bg-slate-200 rounded-full"></div>
					</div>
					<div class="h-2.5 bg-slate-300 rounded-full  w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full  w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full  w-12"></div>
				</div>
				<div class="flex items-center justify-between">
					<div>
						<div class="h-2.5 bg-slate-300 rounded-full w-24 mb-2.5"></div>
						<div class="w-32 h-2 bg-slate-200 rounded-full"></div>
					</div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
				</div>
				<div class="flex items-center justify-between">
					<div>
						<div class="h-2.5 bg-slate-300 rounded-full w-24 mb-2.5"></div>
						<div class="w-32 h-2 bg-slate-200 rounded-full"></div>
					</div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
				</div>
				<div class="flex items-center justify-between">
					<div>
						<div class="h-2.5 bg-slate-300 rounded-full w-24 mb-2.5"></div>
						<div class="w-32 h-2 bg-slate-200 rounded-full"></div>
					</div>
					<div class="h-2.5 bg-slate-300 rounded-full"></div>
					<div class="h-2.5 bg-slate-300 rounded-full"></div>
					<div class="h-2.5 bg-slate-300 rounded-full"></div>
				</div>
				<div class="flex items-center justify-between">
					<div>
						<div class="h-2.5 bg-slate-300 rounded-full w-24 mb-2.5"></div>
						<div class="w-32 h-2 bg-slate-200 rounded-full"></div>
					</div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
				</div>
				<div class="flex items-center justify-between">
					<div>
						<div class="h-2.5 bg-slate-300 rounded-full w-24 mb-2.5"></div>
						<div class="w-32 h-2 bg-slate-200 rounded-full"></div>
					</div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
				</div>
				<div class="flex items-center justify-between">
					<div>
						<div class="h-2.5 bg-slate-300 rounded-full w-24 mb-2.5"></div>
						<div class="w-32 h-2 bg-slate-200 rounded-full"></div>
					</div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
				</div>
				<div class="flex items-center justify-between">
					<div>
						<div class="h-2.5 bg-slate-300 rounded-full w-24 mb-2.5"></div>
						<div class="w-32 h-2 bg-slate-200 rounded-full"></div>
					</div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
				</div>
				<div class="flex items-center justify-between">
					<div>
						<div class="h-2.5 bg-slate-300 rounded-full w-24 mb-2.5"></div>
						<div class="w-32 h-2 bg-slate-200 rounded-full"></div>
					</div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
				</div>
				<div class="flex items-center justify-between">
					<div>
						<div class="h-2.5 bg-slate-300 rounded-full w-24 mb-2.5"></div>
						<div class="w-32 h-2 bg-slate-200 rounded-full"></div>
					</div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
				</div>
				<div class="flex items-center justify-between">
					<div>
						<div class="h-2.5 bg-slate-300 rounded-full w-24 mb-2.5"></div>
						<div class="w-32 h-2 bg-slate-200 rounded-full"></div>
					</div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full w-12"></div>
				</div>
				<div class="flex items-center justify-between">
					<div>
						<div class="h-2.5 bg-slate-300 rounded-full w-24 mb-2.5"></div>
						<div class="w-32 h-2 bg-slate-200 rounded-full"></div>
					</div>
					<div class="h-2.5 bg-slate-300 rounded-full  w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full  w-12"></div>
					<div class="h-2.5 bg-slate-300 rounded-full  w-12"></div>
				</div>
			</div>
		{/if}
	
		{#await promise}
			<p class="text-xl font-extrabold text-slate-400" transition:fade>Chargement ...</p>
		{:then items}
		
			<div class="flex justify-between bg-white sticky top-10 z-10 mb-10 border rounded-md  shadow-xl shadow-slate-100" transition:fly={{ y: 50, duration: 1000 }}>
				<div class="flex px-4 items-center justify-center border-r">
					<span class="bg-green-100 text-green-500 font-semibold p-2 mr-2 text-xs border border-green-200 rounded-full">{items.features.length}</span> résultas 
				</div>
				<div class="relative overflow-x-auto">

					<div class="flex px-4 py-4 items-center justify-center">
						<label class="relative inline-flex items-center cursor-pointer ml-6 sm:ml-0 mr-4">
							<input type="checkbox" value="" class="sr-only peer" bind:checked={display.nom}>
							<div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
							<span class="ml-3 text-sm font-medium text-slate-900 ">Commune</span>
						</label>
						<label class="relative inline-flex items-center cursor-pointer mr-4">
							<input type="checkbox" value="" class="sr-only peer" bind:checked={display.email}>
							<div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
							<span class="ml-3 text-sm font-medium text-slate-900 ">Email</span>
						</label>
						<label class="relative inline-flex items-center cursor-pointer mr-4">
							<input type="checkbox" value="" class="sr-only peer" bind:checked={display.phone}>
							<div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
							<span class="ml-3 text-sm font-medium text-slate-900 ">Téléphone</span>
						</label>
						<label class="relative inline-flex items-center cursor-pointer mr-4">
							<input type="checkbox" value="" class="sr-only peer" bind:checked={display.adresse}>
							<div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
							<span class="ml-3 text-sm font-medium text-slate-900">Adresse</span>
						</label>
					</div>
				</div>
			</div>
			
			<div class="relative overflow-x-auto" transition:fade>
				<table class="w-full text-sm text-left text-slate-500">
					<thead class="text-xs text-slate-700 uppercase ">
						<tr>
							<th scope="col" class="px-6 py-3 bg-slate-50" class:hidden="{! display.nom}">
								Mairie / Commune
							</th>
							<th scope="col" class="px-6 py-3" class:hidden="{! display.email}">
								<div class="flex">
									<svg fill="none" class="w-4 mr-1.5" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
										<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
									</svg>
									E-mail
								</div>
							</th>
							<th scope="col" class="px-6 py-3 bg-slate-50" class:hidden="{! display.phone}">
								<div class="flex">
									<svg fill="none" class="w-4 mr-1.5" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
										<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"></path>
									</svg>
									Téléphone
								</div>
							</th>
							<th scope="col" class="px-6 py-3" class:hidden="{! display.adresse}">
								<div class="flex">
									<svg fill="none" class="w-4 mr-1.5" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
										<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
										<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
									</svg>
									adresse
								</div>
							</th>
						</tr>
					</thead>
					<tbody>
						{#each items.features as item}
							<tr class="border-b border-slate-200">
								<th scope="row" class:hidden="{! display.nom}" class="px-6 py-4 font-medium text-slate-900 whitespace-nowrap bg-slate-50">
									{item.properties.nom}
								</th>
								<td class="px-6 py-4" class:hidden="{! display.email}" >
									{#if item.properties.email != ''}
										<a href="mailto:{item.properties.email}" class="hover:text-blue-500 transition ease-in-out">{item.properties.email}</a>
									{:else}
										--
									{/if}
								</td>
								<td class="px-6 py-4 bg-slate-50" class:hidden="{! display.phone}" >
									{#if item.properties.telephone !=''}
										<a href="tel:+33{(item.properties.telephone).replace(/\s/g, '')}" class="hover:text-blue-500 transition ease-in-out">{item.properties.telephone}</a>
									{:else}
										--
									{/if}
								</td>
								<td class="px-6 py-4" class:hidden="{! display.adresse}">
									{#if item.properties.adresses[0].lignes}
										{item.properties.adresses[0].lignes}
									{:else}
										--
									{/if}
								
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/await}
	
	</div>
</section>