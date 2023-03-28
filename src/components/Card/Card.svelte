<script>
  export let name,
    monthly,
    oneOff,
    monthlyPriceBeforeSale,
    oneOffPriceBeforeSale,
    bannerText,
    image;
  export let isFeatureListReq = false;

  export let isButtonShow = false;
  import logo from "$lib/images/iPhone.svg";
  $: height = "345px";
  function changeInImageSize() {
    height += 30;
  }
</script>

<card class={$$props.class}>
  {#if bannerText}
    <strong class="tileLabel">{bannerText}</strong>
  {/if}

  <slot>
    <figure class="tileMedia">
      <img
        class="tileImage"
        src={image}
        height="245px"
        on:hover={changeInImageSize}
      />
    </figure>

    <heading>{name}</heading>
    <hr />
  </slot>
  <card-footer>
    <monthly>
      {#if monthlyPriceBeforeSale != ""}
        <beforeSalePrices
          >{"Was "}<s>{monthlyPriceBeforeSale}</s></beforeSalePrices
        >
      {:else}
        <nobeforeSalePrices>{" jbh "}</nobeforeSalePrices>
      {/if}
      <heading>{"£52"}</heading>
      <descHeading>monthly</descHeading>
    </monthly>
    <vl />
    <one-off>
      {#if oneOffPriceBeforeSale != ""}
        <beforeSalePrices
          >{"Was "}<s>{oneOffPriceBeforeSale}</s></beforeSalePrices
        >
      {:else}
        <nobeforeSalePrices>{" -"}</nobeforeSalePrices>
      {/if}
      <heading>{oneOff}</heading>
      <descHeading>one-off</descHeading>
    </one-off>
  </card-footer>
  {#if isButtonShow}
    <div class="tileCtaBox tileLinks">
      <button class="tileCta">Choose this plan</button>
      {#if !isFeatureListReq}
        <button class="tileCta tileCta-secondary">See all plans</button>
      {/if}
    </div>
    {#if !isFeatureListReq}
      <p class="tileNote">Price excludes VAT</p>
    {/if}
  {/if}
</card>

<style>
  card {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 14px;
    background: #ffffff;
    border: 1px solid #f0f0f0;
    box-shadow: 0px 8px 17px rgba(0, 0, 0, 0.07);
    border-radius: 12px;
    width: 302px;
    min-height: 500px;
    position: relative;
  }
  card-footer {
    display: flex;
    flex-direction: row;
    gap: 5%;
    padding: 10px;
  }
  monthly {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
  }
  one-off {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
  }
  heading {
    font-size: 1.37rem;
    line-height: 1.75rem;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
  descHeading {
    min-height: 20px;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  beforeSalePrices {
    color: #6d6e71;
    font-size: 0.75rem;
    line-height: 1.25rem;
  }
  nobeforeSalePrices {
    visibility: hidden;
  }
  img {
    justify-content: space-between;
    align-items: stretch;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    height: 300px;
    width: 200px;
  }
  vl {
    width: 1px;
    background-color: #e5e7eb;
    margin-top: 5px;
  }
  .tileCtaBox {
    padding-top: 24px;
  }
  .tileCta {
    display: block;
    padding: 8px 16px;
    border-radius: 20px px;
    border: 1px solid #009c9c;
    background-color: #009c9c;
    color: #fff !important;
    text-align: center;
    font-family: rubrik-regular, sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    border-radius: 20px;
    width: 100%;
  }
  .tileCta-secondary {
    margin-top: 16px;
    background-color: #fff;
    color: #009c9c !important;
    border-radius: 20px;
  }

  .tileNote {
    margin: 0;
    padding-top: 16px;
    font-size: 0.75rem;
    line-height: 1.25rem;
    font-weight: 400;
    text-align: center;
    color: #6d6e71;
  }

  .tileLabel {
    position: absolute;
    top: -16px;
    right: 0px;
    padding: 6px 16px;
    background-color: #ffe600;
    border-radius: 8px 8px 0;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
  }
  .tileMedia {
    margin: 0 0 24px;
    width: auto;
    height: 245px;
  }
  .tileImage {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    width: auto;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
</style>
