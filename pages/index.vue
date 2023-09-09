<template>
  <div class="flex items-center">
    <div class="w-1/2 flex-grow-0">
      <div
        id="photo"
        class="bg-center bg-white bg-contain bg-no-repeat pb-150"
      ></div>
    </div>
    <div v-mouse-move class="flex-1 pl-8 pt-16">
      <h1
        class="text-black uppercase font-extrabold text-4xl leading-none mb-5"
      >
        {{ firstName }}
        <div class="relative">
          <span class="text-primary">{{ lastName }}</span>
        </div>
      </h1>
      <h2 class="mb-2">{{ position }}</h2>
      <p class="text-gray">
        {{ aboutMe }}
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getAge } from "~/utils/functions";
import { vMouseMove } from "~/utils/directives";
// withDirectives(VMouseMove)
import {
  firstName,
  lastName,
  position,
  birthday,
  aboutMe,
} from "~/docs/profile.json";

useHead({
  title: "",
});
definePageMeta({
  layout: "default",
});
// export default {
// data() {
//   return {
//     firstName,
//     lastName,
//     position,
//     aboutMe
//   }
// },

//   computed: {
//     age() {
//       return getAge(birthday)
//     }
//   }
// }
</script>

<style scoped>
#photo {
  background-image: url("/zubair-circle-2.png");
  height: 100%;
  filter: drop-shadow(16px 16px 20px gray);
}
</style>
