<script>
  import Card from "./Card.svelte";
</script>

<div class="card_panel">
  <Card
    name={"Business essinalas"}
    monthly={"24 months"}
    oneOff={"$8.33"}
    monthlyPriceBeforeSale={"$53.00"}
    oneOffPriceBeforeSale={""}
    image={"phonedata.image"}
    class="cardStyle"
    isButtonShow={true}
    bannerText={"RECOMMENDED PLAN"}
  >
    <div class="tileHeader">
      <div class="tileHeaderCopy">
        <div class="tileHeadings">
          <p class="tileTagline">Business Essential</p>
          <h3 class="tileTitle">Unlimited</h3>
          <p class="tileSubtitle">24 Months</p>
        </div>
      </div>
    </div>
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
</style>
