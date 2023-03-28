<script>
  import RecommdenedCard from "../Card/RecommdenedCard.svelte";
  import { phoneDetails } from "../../utils/phoneDetails";
  import { onMount ,beforeUpdate } from "svelte";

  let totalNumberOfCards = 5;
  let slicedProducts=[];

  function showMoreHandler() {
   
    slicedProducts=phoneDetails.slice(0,slicedProducts.length+9)
    
  }
 onMount(() => {
  slicedProducts=phoneDetails.slice(0,9)

  });
 
</script>


  <div class="section-container">
    {#if slicedProducts.length >0 }
  {#each  slicedProducts as product, index (index)}
      <RecommdenedCard
        isFeatureListReq={true}
        headingLabel={product?.headingLabel}
        monthlyData={product?.monthlyData}
        totalMonth={product?.totalMonth}
      />
    {/each}
    {/if}

    
  </div>

  <div class="showMoreContainer">
    {#if slicedProducts.length !== phoneDetails.length}
    <button class="showMoreBtn" on:click={showMoreHandler}
      ><svg
        class="showMoreButtonCircleIcon__CRV5t"
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        ><path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.00067 5.30057L10.2787 1.02757C10.468 0.838569 10.7246 0.732422 10.9922 0.732422C11.2597 0.732422 11.5163 0.838569 11.7057 1.02757C11.7993 1.12101 11.8736 1.23199 11.9242 1.35416C11.9749 1.47634 12.001 1.6073 12.001 1.73957C12.001 1.87183 11.9749 2.0028 11.9242 2.12497C11.8736 2.24714 11.7993 2.35813 11.7057 2.45157L6.71367 7.43757C6.52436 7.62626 6.26797 7.73221 6.00067 7.73221C5.73338 7.73221 5.47699 7.62626 5.28767 7.43757L0.295675 2.45157C0.202064 2.35813 0.127799 2.24714 0.0771274 2.12497C0.0264558 2.0028 0.000373791 1.87183 0.000373796 1.73957C0.000373802 1.6073 0.0264558 1.47634 0.0771274 1.35416C0.127799 1.23199 0.202064 1.12101 0.295675 1.02757C0.485032 0.838569 0.741638 0.732421 1.00917 0.732421C1.27671 0.732421 1.53332 0.838569 1.72268 1.02757L6.00067 5.30057Z"
          fill="#fff"
        /></svg
      ></button
    >
    {/if}
  </div>


<style>
  
  .section-container {
    display: flex;
    align-items: center;
    position: relative;
    padding: 5px;
    margin-top: 28px;
    gap: 24px;
    flex-wrap: wrap;
  }
  .section-container :global(.cardStyle) {
    background-color: #f4f4f4;
    width: 330px;
    min-height: 459px;
    height: 100px;
  }
  .section-container :global(.card_panel) {
    margin-left: 0;
  }

  .showMoreContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
  .showMoreBtn {
    display: flex;
    background-color: #007b85;
    border-radius: 90%;
    height: 50px;
    width: 50px;
    justify-content: center;
    align-items: center;
  }
</style>
