<script>
  import { goto } from "$app/navigation";

  import Card from "../components/Card/Card.svelte";
  import Accordion from "$lib/components/accordion.svelte";
  import { TermsAndConditionMock } from "../mock/accordion.mock";
  import { phoneDetails } from "../utils/phoneDetails";
  const tcs = ["A", "ddjh", "ghb", "ygjhb"];

  /**
   * @param {string} productId
   */
  function goToPage(productId) {
    goto(`/products/${productId}`);
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>
<container>
  {#each phoneDetails as phonedata}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <single-container on:click={() => goToPage(phonedata.id)}
      ><Card
        name={phonedata.name}
        monthly={phonedata.monthly}
        oneOff={phonedata.oneOff}
        monthlyPriceBeforeSale={phonedata.monthlyPriceBeforeSale}
        oneOffPriceBeforeSale={phonedata.oneOffPriceBeforeSale}
        image={phonedata.image}
        bannerText={phonedata.banner_text}
      /></single-container
    >
  {/each}
</container>
<div class="accordion">
  <Accordion data={TermsAndConditionMock} />
</div>
<section />

<style>
  container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
    padding: 0;
    max-width: 64rem;
    align-self: center;
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
  .accordion {
    display: grid;
    max-width: 64rem;
    align-self: center;
  }
</style>
