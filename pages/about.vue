<template>
  <div class="about-page">
    <Header />
    <main>
      <h1>{{ $t("about.title") }}</h1>
      <p>{{ $t("about.description") }}</p>
    </main>
    <Footer />
  </div>
</template>

<script>
  import Header from "~/components/Header.vue";
  import Footer from "~/components/Footer.vue";

  export default {
    components: { Header, Footer }
  };
</script>