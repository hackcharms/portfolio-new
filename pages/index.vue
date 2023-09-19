<template>
  <div class="flex flex-wrap md:flex-nowrap items-center">
    <div class="w-full md:w-1/2 lg:w-1/3 flex-grow-0">
      <div
        id="photo"
        class="bg-center bg-white bg-contain bg-no-repeat pb-150"
      ></div>
    </div>
    <div v-mouse-move class="flex-1 pl-8 pt-10">
      <h1
        class="text-black uppercase font-extrabold text-[80px] leading-none mb-5 drop-shadow-sm hover:drop-shadow-xl transition-all duration-100"
      >
        <span class="border-b-[10px] border-primary mr-6">
          {{ profileData.firstName }}
        </span>
        <span class="text-primary border-b-[10px] border-black-default">{{
          profileData.lastName
        }}</span>
      </h1>
      <h2 class="mb-2 text-4xl">{{ profileData.position }}</h2>
      <div class="text-gray text-xl" v-html="profileData.aboutMe">
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { vMouseMove } from "~/utils/directives";
// withDirectives(VMouseMove)
import profileData  from "~/docs/profile.js";

useHead({
  title: "",
});
definePageMeta({
  layout: "default",
});
console.log(process.env)
</script>

<style scoped lang="scss">
#photo {
  --translate-value: 6px;
  background-image: url("/zubair-circle-2.png");
  height: 100%;
  filter: drop-shadow(
    var(--translate-value) var(--translate-value) var(--translate-value) gray
  );
  transition: all 200ms;
  &:hover {
    --translate-value: 8px;
    transform: translate(
      calc(var(--translate-value) * -1),
      calc(var(--translate-value) * -1)
    );
  }
}
</style>
