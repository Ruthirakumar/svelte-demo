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
      /></single-container
    >
  {/each}
</container>
<Accordion data={TermsAndConditionMock} />

<section />

<style>
  container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
    padding: 0;
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
</style>
