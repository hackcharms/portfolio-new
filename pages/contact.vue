<template>
  <div class="flex">
    <div class="w-490px flex-grow-0">
      <form class="bg-black shadow p-10 mb-10" @submit.prevent="">
        <p class="text-white text-xl font-bold mb-10">Send a message</p>
        <form-field
          v-model="form.name"
          label="Your Name"
          type="text"
          class="mb-8"
        />

        <form-field
          v-model="form.email"
          label="Your Email"
          type="email"
          class="mb-8"
        />

        <form-field
          v-model="form.message"
          label="Your Message"
          type="textarea"
          class="mb-8"
        />

        <button
          class="uppercase text-white-default tracking-widest w-full text-center p-3 rounded-full bg-primary"
        >
          Send
        </button>
      </form>

      <google-maps
        :lat="19.159116540010153"
        :lng="73.02495274247725"
        :zoom="4"
        class="h-300px"
      />
    </div>

    <div class="flex-1 pl-8">
      <div class="max-w-3/5">
        <h1 class="uppercase text-4xl text-primary leading-none mb-10">
          Contact me
        </h1>

        <div class="p-6 hover:shadow mb-8">
          <p class="font-bold mb-2">Email</p>
          <a href="mailto:zaa78692@gmail.com" class="hover:underline"
            >zaa78692@gmail.com</a
          >
        </div>

        <div class="p-6  hover:shadow mb-8">
          <p class="font-bold mb-2">Phone</p>
          <a href="tel:+37120303056" class="hover:underline"
            >+91 7800887621</a
          >
        </div>

        <div class="p-6  hover:shadow">
          <p class="font-bold mb-2">Addresss</p>
          <p>707, Jublipark, Mumbra, Thane, Maharastra, 400612</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>
