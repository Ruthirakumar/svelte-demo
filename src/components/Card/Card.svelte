<script>
export let name, monthly, oneOff,monthlyPriceBeforeSale,oneOffPriceBeforeSale,image;
import logo from '$lib/images/iPhone.svg';
 $: height="345px";
function changeInImageSize(){
 height+=30;
}

</script>
<card>
<img src={image} height=200px width=200px on:hover={changeInImageSize}>
<heading>{name}</heading>
<hr>
<card-footer>
<monthly>
{#if monthlyPriceBeforeSale!=""}
<beforeSalePrices>{"Was "}<s>{monthlyPriceBeforeSale}</s></beforeSalePrices>
{:else}
<nobeforeSalePrices>{" jbh "}</nobeforeSalePrices>
{/if}
<heading>{monthly}</heading>
<descHeading>monthly</descHeading>
</monthly>
<vl></vl>
<one-off>
{#if oneOffPriceBeforeSale!=""}
<beforeSalePrices>{"Was "}<s>{oneOffPriceBeforeSale}</s></beforeSalePrices>
{:else}
<nobeforeSalePrices>{" -"}</nobeforeSalePrices>
{/if}
<heading>{oneOff}</heading>
<descHeading>one-off</descHeading>
</one-off>
</card-footer>
</card>
<style>
card{
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
}
card-footer{
    display:flex;
    flex-direction:row;
    gap:5%;
    padding:10px;

}
monthly{
    display:flex;
    flex-direction:column;
    width:50%;
    align-items:center;
}
one-off{
    display:flex;
    flex-direction:column;
    width:50%;
    align-items:center;

}
heading{
    font-size:1.37rem;
    line-height:1.75rem;
    justify-content:center;
    align-items:center;
    margin:auto;
}
descHeading{
    min-height: 20px;
    font-size: .875rem;
    line-height: 1.25rem;
}
beforeSalePrices{
    color: #6d6e71;
    font-size: .75rem;
    line-height: 1.25rem;
}
nobeforeSalePrices{
 visibility:hidden;
}
img{
    justify-content:space-between;
    align-items:stretch;
    margin:0;
    margin-left:auto;
    margin-right:auto;
    padding:0;
    height:300px;
    width:200px;
}
vl{
    width:1px;
    background-color:#E5E7EB;
    margin-top:5px;
}
</style>