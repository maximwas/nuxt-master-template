<template>
  <div class="index-page">
    <Header />
    <main>
      <h1>{{ $t("index.welcome") }}</h1>
      <p>{{ $t("index.description") }}</p>
    </main>
    <Footer />
  </div>
</template>
  
<script>
  import Header from "~/components/Header.vue";
  import Footer from "~/components/Footer.vue";

  export default {
    components: { Header, Footer },
  };
</script>