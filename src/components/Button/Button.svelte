<script>
  /**
   * @type {any}
   */
  export let storgaeSize;
  export let isSelected = false;
</script>

<button class="capacity" type="button" on:click class:selected={isSelected}
  >{storgaeSize}</button
>

<style>
  .capacity {
    margin: 12px 12px 0 0;
    font-family: rubrik-regular, sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 700;
    border-radius: 23px;
    cursor: pointer;
    color: #007b85;
    border: 1px solid #d8d8d9;
    padding: 6px 23px;
  }

  .selected {
    color: #3c3d41;
    border: 2px solid #3c3d41;
    padding: 6px 23px;
  }
</style>
