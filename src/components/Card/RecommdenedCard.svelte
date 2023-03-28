<script>
  import Card from "./Card.svelte";
  export let isFeatureListReq = false;
  /**
   * @type {any}
   */
  export let headingLabel;
  export let monthly;
  export let oneOff;
  export let monthlyPriceBeforeSale;
  export let oneOffPriceBeforeSale;
  export let isButtonShow;
  export let bannerText;
  export let monthlyData;
  export let totalMonth;
</script>

<div class="card_panel">
  <Card
    name={"sjkadkjsadnjk"}
    monthly={"24 months"}
    oneOff={"$8.33"}
    monthlyPriceBeforeSale={"$53.00"}
    oneOffPriceBeforeSale={""}
    image={"phonedata.image"}
    class="cardStyle"
    isButtonShow={true}
    bannerText={""}
    {isFeatureListReq}
  >
    <div class="tileHeader">
      <div class="tileHeaderCopy">
        <div class="tileHeadings">
          <p class="tileTagline">{headingLabel}</p>
          <h3 class="tileTitle">{monthlyData}</h3>
          <p class="tileSubtitle">{totalMonth}</p>
        </div>
      </div>
    </div>

    <!-- features -->
    {#if isFeatureListReq}
      <ul class="tileList">
        <li class="tileListItem">
          <svg
            class="tileListIcon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.09598 18.214L3.85298 13.97C3.67082 13.7814 3.57003 13.5288 3.5723 13.2666C3.57458 13.0044 3.67975 12.7536 3.86516 12.5682C4.05057 12.3828 4.30138 12.2776 4.56358 12.2753C4.82577 12.273 5.07838 12.3738 5.26698 12.556L8.80298 16.091L18.703 6.191C18.7953 6.09556 18.9057 6.01946 19.0277 5.96713C19.1498 5.91481 19.281 5.88732 19.4138 5.88626C19.5466 5.8852 19.6782 5.9106 19.8011 5.96097C19.9239 6.01133 20.0355 6.08567 20.1294 6.17962C20.2232 6.27358 20.2974 6.38529 20.3476 6.50822C20.3978 6.63115 20.423 6.76284 20.4217 6.89562C20.4205 7.0284 20.3928 7.1596 20.3403 7.28156C20.2878 7.40353 20.2115 7.51382 20.116 7.606L9.50998 18.214C9.32245 18.4015 9.06814 18.5068 8.80298 18.5068C8.53781 18.5068 8.2835 18.4015 8.09598 18.214Z"
              fill="#009c9c"
            /></svg
          >Unlimited calls, texts &amp; data
        </li>
        <li class="tileListItem">
          <svg
            class="tileListIcon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.09598 18.214L3.85298 13.97C3.67082 13.7814 3.57003 13.5288 3.5723 13.2666C3.57458 13.0044 3.67975 12.7536 3.86516 12.5682C4.05057 12.3828 4.30138 12.2776 4.56358 12.2753C4.82577 12.273 5.07838 12.3738 5.26698 12.556L8.80298 16.091L18.703 6.191C18.7953 6.09556 18.9057 6.01946 19.0277 5.96713C19.1498 5.91481 19.281 5.88732 19.4138 5.88626C19.5466 5.8852 19.6782 5.9106 19.8011 5.96097C19.9239 6.01133 20.0355 6.08567 20.1294 6.17962C20.2232 6.27358 20.2974 6.38529 20.3476 6.50822C20.3978 6.63115 20.423 6.76284 20.4217 6.89562C20.4205 7.0284 20.3928 7.1596 20.3403 7.28156C20.2878 7.40353 20.2115 7.51382 20.116 7.606L9.50998 18.214C9.32245 18.4015 9.06814 18.5068 8.80298 18.5068C8.53781 18.5068 8.2835 18.4015 8.09598 18.214Z"
              fill="#009c9c"
            /></svg
          >Extended Warranty
        </li>
        <li class="tileListItem">
          <svg
            class="tileListIcon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.09598 18.214L3.85298 13.97C3.67082 13.7814 3.57003 13.5288 3.5723 13.2666C3.57458 13.0044 3.67975 12.7536 3.86516 12.5682C4.05057 12.3828 4.30138 12.2776 4.56358 12.2753C4.82577 12.273 5.07838 12.3738 5.26698 12.556L8.80298 16.091L18.703 6.191C18.7953 6.09556 18.9057 6.01946 19.0277 5.96713C19.1498 5.91481 19.281 5.88732 19.4138 5.88626C19.5466 5.8852 19.6782 5.9106 19.8011 5.96097C19.9239 6.01133 20.0355 6.08567 20.1294 6.17962C20.2232 6.27358 20.2974 6.38529 20.3476 6.50822C20.3978 6.63115 20.423 6.76284 20.4217 6.89562C20.4205 7.0284 20.3928 7.1596 20.3403 7.28156C20.2878 7.40353 20.2115 7.51382 20.116 7.606L9.50998 18.214C9.32245 18.4015 9.06814 18.5068 8.80298 18.5068C8.53781 18.5068 8.2835 18.4015 8.09598 18.214Z"
              fill="#009c9c"
            /></svg
          >Annual Device Check-Up
        </li>
      </ul>
    {/if}
    <button class="ModalOpener tileButton" type="button"
      ><svg
        class="Icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.7042 7.13459C12.9014 6.87797 13 6.58053 13 6.24226C13 5.89233 12.9014 5.5978 12.7042 5.35868C12.507 5.11956 12.2723 5 12 5C11.7089 5 11.4695 5.11956 11.2817 5.35868C11.0939 5.5978 11 5.89233 11 6.24226C11 6.58053 11.0939 6.87797 11.2817 7.13459C11.4695 7.39121 11.7089 7.51952 12 7.51952C12.2723 7.51952 12.507 7.39121 12.7042 7.13459ZM12.669 9.60609C12.4859 9.39251 12.2629 9.28572 12 9.28572C11.7277 9.28572 11.5023 9.39251 11.3239 9.60609C11.1455 9.81968 11.0563 10.0813 11.0563 10.391V16.8947C11.0563 17.2044 11.1502 17.466 11.338 17.6796C11.5258 17.8932 11.7465 18 12 18C12.2723 18 12.4977 17.8932 12.6761 17.6796C12.8545 17.466 12.9437 17.2044 12.9437 16.8947V10.391C12.9437 10.0813 12.8521 9.81968 12.669 9.60609Z"
          fill="#007B85"
        /></svg
      >See plan details</button
    >
    <br />
    <hr />
  </Card>
</div>

<style>
  .card_panel {
    position: relative;
    margin-left: 124px;
  }
  .card_panel :global(.cardStyle) {
    background-color: #f4f4f4;
    width: 276px;
    min-height: 459px;
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
  .tileHeader {
    margin-top: 20px;
    margin-bottom: 24px;
  }
  .tileHeadings {
    text-align: center;
  }
  .tileTagline {
    min-height: 20px;
    margin: 0 0 8px;
    /* font-size: 0.875rem;
      line-height: 1.25rem; */
    font-weight: 600;
  }

  .tileTitle {
    margin: 0 0 8px;
    font-weight: 400;
    font-size: 1.375rem;
    line-height: 1.5rem;
  }
  .tileSubtitle {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #6d6e71;
  }

  .Icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    fill: #007b85;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }

  .ModalOpener {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    background-color: transparent;
    color: #007b85;
    cursor: pointer;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
  }
  .tileButton {
    justify-content: center;
  }

  .tileList {
    margin: 0 0 20px;
    padding: 0;
    list-style-type: none;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #6d6e71;
  }

  .tileListItem {
    display: flex;
    align-items: flex-start;
    margin-bottom: 8px;
  }

  .tileListIcon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    flex-shrink: 0;
    fill: #3fd1d1;
  }
</style>
