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
    { name: "Phones", href: "/phones" },
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
      <NavLi><Chevron aligned>Mega menu</Chevron></NavLi>
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
  header {
    display: flex;
    justify-content: space-between;
  }

  .corner {
    width: 3em;
    height: 3em;
  }

  .corner a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .corner img {
    width: 2em;
    height: 2em;
    object-fit: contain;
  }

  nav {
    display: flex;
    justify-content: center;
    --background: rgba(255, 255, 255, 0.7);
  }

  svg {
    width: 2em;
    height: 3em;
    display: block;
  }

  path {
    fill: var(--background);
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  li[aria-current="page"]::before {
    --size: 6px;
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--color-theme-1);
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    color: var(--color-text);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--color-theme-1);
  }
</style>
