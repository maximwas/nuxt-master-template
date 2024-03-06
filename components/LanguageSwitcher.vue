<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>

<template>
  <div class="wrapper">
    <div class="languageText">Switch Language</div>
    <select v-model="language">
      <option
        v-for="item in locales"
        :key="typeof item === 'object' ? item.code : item"
        :value="typeof item === 'object' ? item.code : item"
      >
        {{ typeof item === "object" ? item.name : item }}
      </option>
    </select>
  </div>
</template>

<style>

div.languageText {
    margin-right: 20px;
    font-weight: 700px;
    font-size: 24px;
}

div.wrapper {
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

.wrapper select {
    width: 80px;
    height: 30px;
    border: 1px solid black;
}












</style>
