<script>
  import {
    Navbar,
    NavBrand,
    NavHamburger,
    NavUl,
    NavLi,
    Chevron,
    MegaMenu,
  } from "flowbite-svelte";

  let menu = [
    { name: "Phones", href: "/" },
    { name: "SIM Only", href: "/simOnly" },
    { name: "Tablet", href: "/tablet" },
    { name: "Laptops", href: "/laptops" },
    { name: "Watches", href: "/watches" },
    { name: "Mobile Broadband", href: "/mobileBroadband" },
    { name: "Business Deals", href: "/businessDeals" },
    { name: "Upgrades", href: "/upgrade" },
    { name: "Good As New", href: "/goodAsNew" },
    { name: "Device Trade In", href: "/deviceTradeIn" },
    { name: "EE & Apple", href: "/eeAndApple" },
  ];
</script>

<header>
  <Navbar let:hidden let:toggle>
    <NavBrand href="/">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        class="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
      <span
        class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
        >EE Small Business</span
      >
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/">Home</NavLi>
      <NavLi><Chevron aligned>Shop</Chevron></NavLi>
      <MegaMenu items={menu} let:item>
        <a href={item.href} class="hover:text-blue-600 dark:hover:text-blue-500"
          >{item.name}</a
        >
      </MegaMenu>
      <NavLi href="/services">Help</NavLi>
      <NavLi href="/services">My EE</NavLi>
      <NavLi href="/services">Why EE</NavLi>
      <NavLi href="/services">5G</NavLi>
    </NavUl>
  </Navbar>
</header>

<style>
</style>
