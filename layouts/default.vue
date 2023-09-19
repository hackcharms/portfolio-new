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

<script lang="ts" setup>
const expandSidebar = computed(() => {
  return ["index", "contact"].includes(useRoute().name as string);
});
</script>
