<script>
  import { onMount } from "svelte";

  import Card from "../../../components/Card/Card.svelte";
  import RecommdenedCard from "../../../components/Card/RecommdenedCard.svelte";
  import SlideControlles from "../../../lib/components/slideControlles.svelte";
  import { phoneDetails } from "../../../utils/phoneDetails";

  export let data;
  /**
   * @type {{ id: string; name: string; description: string; green: string[]; capacity: string; monthly: string; oneOff: string; monthlyPriceBeforeSale: string; oneOffPriceBeforeSale: string; availability: string; image: string; } | undefined}
   */
  let product;
  console.log(typeof data.productId);
  onMount(() => {
    product = phoneDetails.find((p) => p.id === data.productId);
    console.log(product);
  });
</script>

<div class="product_hero">
  <div class="product_hero_container">
    <div class="slider">
      <div class="background_layer" />
      <div class="slider_container">
        <div class="imageContainer">
          <img
            class="image"
            src="https://business.ee.co.uk/content/dam/eeb-site/new-devices/samsung-enterprise/phones/galaxy-s23-enterprise-edition/phantom-black/1-samsung-s23-base-etrprs-p-blk.png"
            alt="3-samsung-s23-base-pblk"
          />
        </div>
        <SlideControlles />
      </div>
    </div>
    <!-- info container -->
    <div class="info_panel">
      <div class="info_container">
        <h1 class="titleStyle">{product?.name}</h1>
        <p class="description">
          {product?.description}
        </p>
        <div class="productOptions">
          <p class="colorLabel">
            Colour:<span class="colorValue">Phantom Black</span>
          </p>
          <div class="colorField">
            <button class="colorCircle colorCircleActive" type="button"
              ><div
                class="colorCircleInner"
                style="background-color: rgb(33, 30, 22);"
              /></button
            >
            <button class="colorCircle colorCircleActive" type="button"
              ><div
                class="colorCircleInner"
                style="background-color: rgb(33, 30, 22);"
              /></button
            >
          </div>
          <p class="capacityLabel">
            Capacity:<span class="capacityValue">{product?.capacity}</span>
          </p>
          <div class="capacityField">
            <button class="capacity capacityActive" type="button">128GB</button>
            <button class="capacity capacityActive" type="button">512GB</button>
          </div>
        </div>
        <!-- stock  -->
        <div class="stock">
          <p
            class="stockType stockType--in-stock"
            style="color: rgb(23, 136, 4);"
          >
            <span class="stockTypeLabel">Availability:</span
            >{product?.availability}
          </p>
        </div>
        <!--article recommended plans -->
      </div>
      <RecommdenedCard />
    </div>
  </div>
</div>

<style>
  .product_hero {
    position: relative;
    left: 50%;
    right: 50%;
    width: 100vw;
    margin-left: -50vw;
    margin-right: -50vw;
  }

  .product_hero_container {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 82.162%;
    max-width: 1204px;

    position: relative;
  }
  .slider {
    width: 29.5%;
    padding-bottom: 40px;
    top: 0;
    bottom: 0;
    left: -118px;
    padding-top: 60px;
    position: relative;
  }
  .imageContainer {
    display: block;
    position: relative;
    width: 133%;
    padding: 0;
  }
  .info_panel {
    display: flex;
    flex-direction: row;
    padding: 60px 0 90px;
    /* background-color: brown; */
    width: 68%;
  }
  .info_container {
    display: flex;
    flex-direction: column;
    width: 65%;
    max-width: 472px;
    margin: 0 0 0 auto;
  }
  .titleStyle {
    font-size: 1.75rem;
    line-height: 2rem;
    margin: 0 0 25px;
    font-weight: 400;
    font-family: rubrik-regular, sans-serif;
    text-align: left;
  }
  .background_layer {
    background-color: black;
    position: absolute;
    inset: 0 0 77px -9999px;
    z-index: -1;
    bottom: 0;
  }

  .slide_controllers {
    display: flex;
    margin-top: 25px;
    justify-content: flex-end;
    margin-right: 24px;
    /* padding-bottom: 30px; */
  }
  .description {
    margin: 0 0 24px;
    color: #6d6e71;
    font-family: rubrik-regular, sans-serif;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  .productOptions {
    margin: 0 0 24px;
  }
  .colorLabel {
    margin: 0;
    color: #6d6e71;
    font-family: rubrik-regular, sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 700;
  }

  .colorValue {
    margin-left: 5px;
    font-weight: 400;
  }

  .colorField {
    display: flex;
    flex-wrap: wrap;
    margin: 16px 0 0;
    padding: 0;
    border: none;
  }
  .colorCircle {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-right: 12px;
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;
  }
  .colorCircleActive {
    border: 1px solid #6d6e71;
    box-shadow: inset 0 0 0 0.6px #6d6e71;
  }

  .colorCircleInner {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  .capacityLabel {
    color: #6d6e71;
    font-family: rubrik-regular, sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 700;
    margin-top: 24px;
  }
  .capacityValue {
    margin-left: 5px;
    font-weight: 400;
  }

  .capacityField {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    border: none;
  }
  .capacity {
    margin: 12px 12px 0 0;
    font-family: rubrik-regular, sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 700;
    border-radius: 23px;
    cursor: pointer;
  }
  .capacityActive {
    color: #3c3d41;
    border: 2px solid #3c3d41;
    padding: 6px 23px;
  }

  .stock {
    font-family: rubrik-regular, sans-serif;
  }

  .stockType {
    margin: 0;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .stockType--in-stock {
    color: rgb(23, 136, 4);
  }
  .stockTypeLabel {
    margin-right: 5px;
    color: #6d6e71;
    font-weight: 700;
  }
  
</style>
