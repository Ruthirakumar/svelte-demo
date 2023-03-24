<script>
import Card from "../components/Card/Card.svelte";
import {phoneDetails} from "../utils/phoneDetails";
const tcs=["A","ddjh","ghb","ygjhb"];

</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>
<container>
{#each phoneDetails as phonedata}
<single-container><Card name={phonedata.name} monthly={phonedata.monthly} oneOff={phonedata.oneOff} monthlyPriceBeforeSale={phonedata.monthlyPriceBeforeSale} oneOffPriceBeforeSale={phonedata.oneOffPriceBeforeSale} image={phonedata.image}/></single-container>
{/each}
</container>
<section />

<style>
  container {
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap:1rem;
    padding:0;
  }
  single-container {
    flex: 1;
    padding: 16px;
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  h1 {
    width: 100%;
  }

  .welcome {
    display: block;
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>
