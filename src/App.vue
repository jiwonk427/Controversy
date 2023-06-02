<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import Header from "./components/Header.vue";
import Index from "./pages/Index.vue";

export default {
  components: {
    Header,
    Index
  },
  setup() {
    return {};
  },
};
</script>
