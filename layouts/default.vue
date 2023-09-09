<template>
  <div class="flex">
    <!-- <app-sidebar /> -->
    <div class="p-10 flex-1 bg-white pb-12 relative">
      <div class="relative">
        <app-menu />
        <main>
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    expandSidebar() {
      // return this.$route.name
      return ["index", "contact"].includes(this.$route.name);
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/css/";
</style>
