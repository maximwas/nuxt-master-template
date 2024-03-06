<template>
  <header class="header">
    <nav>
      <ul>
        <li><nuxt-link-locale to="/">Home</nuxt-link-locale></li>
        <li><nuxt-link-locale to="/contact">Contact</nuxt-link-locale></li>
        <li><nuxt-link-locale to="/about">About</nuxt-link-locale></li>
      </ul>
    </nav>
    <LanguageSwitcher />
  </header>
</template>

<script>
import LanguageSwitcher from "~/components/LanguageSwitcher.vue";
  
  export default {
    components: { LanguageSwitcher },
  };
  </script>

<style>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: #54ccdf;
}

.header ul {
    display: flex;
    align-items: center;
    flex-direction: row;
}

.header ul li {
    padding: 15px;
    color: black;
}

.header ul li a {
    color: black;
    text-decoration: none;
    font-weight: 900;
    font-size: 24px;
}

li::marker {
    content: '';
}





</style>