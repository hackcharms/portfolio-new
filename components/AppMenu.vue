<template>
  <div>
    <div class="absolute right-0 top-0">
      <burger v-model="isOpen" class="z-20" />
    </div>

    <transition name="fadeScale">
      <div
        v-if="isOpen"
        class="fixed bg-white-default inset-0 z-10 bg-black-90 flex justify-center items-center p-8"
      >
        <nav>
          <ul>
            <li v-for="link in links" :key="link.to" @click="isOpen = false">
              <nuxt-link
                :to="link.to"
                :aria-lable="link.label"
                class="relative uppercase text-3xl text-primary overflow-hidden text-center font-bold px-4 py-2 block hover:drop-shadow-lg opacity-effect custom-border custom-border-animate"
                exact-active-class="drop-shadow-lg activeLink opacity-100"
              >
                {{ link.title }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script>
import { links } from "~/utils/lists";

export default {
  data() {
    return {
      isOpen: false,
      links,
    };
  },
};
</script>

<style lang="scss" scoped>
.opacity-effect:not(.router-link-active){
  --opacity-value:.8;
  opacity: var(--opacity-value);
  transition: opacity 1s;
  &:hover{
    --opacity-value:1;
  }
}
.custom-border {
  --x-translate-value: -110%;
  --y-translate-value: 0%;
  --border-color:transparent;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 8px solid var(--border-color);
    translate: var(--x-translate-value) var(--y-translate-value);
    transition: all 1s ease;
  }
}
.custom-border-animate:hover::after{
  --x-translate-value: 0%;
  --border-color:blue;
}
.activeLink::after{
  --x-translate-value: 0%;
  --border-color:blue;
}
</style>
