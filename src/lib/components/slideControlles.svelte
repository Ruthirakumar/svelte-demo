<script>
  let currentPage = 1;
  const totalPages = 4;

  function goToPage() {
    currentPage = currentPage + 1;
  }

  function goToPage1() {
    currentPage = currentPage - 1;
  }
</script>

<div class="slide_controllers">
  <div class="pagination">
    <div class="paginationContainer">
      <button
        on:click={goToPage}
        class="control_farward"
        type="button"
        aria-label="Next"
        ><svg
          class="icon"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.00067 5.30057L10.2787 1.02757C10.468 0.838569 10.7246 0.732422 10.9922 0.732422C11.2597 0.732422 11.5163 0.838569 11.7057 1.02757C11.7993 1.12101 11.8736 1.23199 11.9242 1.35416C11.9749 1.47634 12.001 1.6073 12.001 1.73957C12.001 1.87183 11.9749 2.0028 11.9242 2.12497C11.8736 2.24714 11.7993 2.35813 11.7057 2.45157L6.71367 7.43757C6.52436 7.62626 6.26797 7.73221 6.00067 7.73221C5.73338 7.73221 5.47699 7.62626 5.28767 7.43757L0.295675 2.45157C0.202064 2.35813 0.127799 2.24714 0.0771274 2.12497C0.0264558 2.0028 0.000373791 1.87183 0.000373796 1.73957C0.000373802 1.6073 0.0264558 1.47634 0.0771274 1.35416C0.127799 1.23199 0.202064 1.12101 0.295675 1.02757C0.485032 0.838569 0.741638 0.732421 1.00917 0.732421C1.27671 0.732421 1.53332 0.838569 1.72268 1.02757L6.00067 5.30057Z"
            fill="#007B85"
          /></svg
        ></button
      >
      {#each Array(totalPages) as _, i}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="dot" class:selected={currentPage === i + 1} />
      {/each}

      <button
        on:click={goToPage1}
        class="control_backward"
        type="button"
        aria-label="Next"
        ><svg
          class="icon"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.00067 5.30057L10.2787 1.02757C10.468 0.838569 10.7246 0.732422 10.9922 0.732422C11.2597 0.732422 11.5163 0.838569 11.7057 1.02757C11.7993 1.12101 11.8736 1.23199 11.9242 1.35416C11.9749 1.47634 12.001 1.6073 12.001 1.73957C12.001 1.87183 11.9749 2.0028 11.9242 2.12497C11.8736 2.24714 11.7993 2.35813 11.7057 2.45157L6.71367 7.43757C6.52436 7.62626 6.26797 7.73221 6.00067 7.73221C5.73338 7.73221 5.47699 7.62626 5.28767 7.43757L0.295675 2.45157C0.202064 2.35813 0.127799 2.24714 0.0771274 2.12497C0.0264558 2.0028 0.000373791 1.87183 0.000373796 1.73957C0.000373802 1.6073 0.0264558 1.47634 0.0771274 1.35416C0.127799 1.23199 0.202064 1.12101 0.295675 1.02757C0.485032 0.838569 0.741638 0.732421 1.00917 0.732421C1.27671 0.732421 1.53332 0.838569 1.72268 1.02757L6.00067 5.30057Z"
            fill="#007B85"
          /></svg
        ></button
      >
    </div>
  </div>
</div>

<style>
  .slide_controllers {
    display: flex;
    margin-top: 25px;
    justify-content: flex-end;
    margin-right: 24px;
  }

  .paginationContainer {
    display: flex;
  }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: gray;
    margin: 0 0.2rem;
    cursor: pointer;
    margin-top: 10px;
  }
  .selected {
    background-color: #ffff;
  }

  .control_farward {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    /* background-color: #007b85; */
    cursor: pointer;
    opacity: 1;
    pointer-events: none;
    transform: rotate(90deg);
  }

  .control_backward {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    /* background-color: #007b85; */
    cursor: pointer;
    opacity: 1;
    pointer-events: none;
    transform: rotate(-90deg);
  }
</style>
