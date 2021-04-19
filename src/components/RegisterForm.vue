<template>
    <form @submit.prevent="submitForm">
      <div class="container w-2/5 p-8 mx-auto mt-10 border rounded-lg bg-white">
        <div class="flex justify-center">
          <!-- <img v-bind:src="img" width="150" class="rounded-full"> -->
        </div>
        <h1 class="text-2xl pt-4 pb-4">Pre Registration</h1>
        <!-- Firstname -->
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col">
            <label class="text-sm leading-7 text-gray-600">First Name</label>
            <input type="text" id="firstname" v-model="firstname" name="firstname"
              class="bg-gray-100 rounded px-4 py-2 mb-4">
          </div>
          <!-- Lastname -->
          <div class="flex flex-col">
            <label class="text-sm leading-7 text-gray-600">Last Name</label>
            <input type="text" id="lastname" v-model="lastname" name="lastname"
              class="bg-gray-100 rounded px-4 py-2 mb-4">
          </div>
          <!-- Age -->
          <div class="flex flex-col">
            <label class="text-sm leading-7 text-gray-600">Age</label>
            <input type="number" id="age" v-model="age" name="age" class="bg-gray-100 rounded px-4 py-2 mb-4">
          </div>
          <!-- Email -->
          <div class="flex flex-col">
            <label class="text-sm leading-7 text-gray-600">Email</label>
            <input type="text" id="email" v-model="email" name="email" class="bg-gray-100 rounded px-4 py-2 mb-4">
          </div>
          <!-- Submit -->
          <br>
          <base-button
        bgcolor="bg-purple-900"
        txtcolor="text-white"
        label="Submit"
      ></base-button>
        </div>
      </div>
    </form>
</template>

<script>
export default {
  props: {
    oldId: {
      type: Number,
      required: false,
      default: null,
    },
    oldName: {
      type: String,
      required: false,
      default: "",
    },
    oldLastName: {
      type: String,
      required: false,
      default: "",
    },
    oldAge: {
      type: Number,
      required: false,
      default: null,
    },
    oldEmail: {
      type: String,
      required: false,
      default: "",
    },
  },
  emits: ["submit-form"],
  data() {
    return {
      id: this.oldId,
      firstname: this.oldName,
      lastname: this.oldLastName,
      age: parseInt(this.oldAge),
      email:  this.oldEmail
      // img: "images/Me.jpg",
    };
  },
  methods: {
    submitForm() {
      const newProfile = {
        id: this.id,
        firstname: this.firstname,
        lastname: this.lastname,
        age: this.age,
        email: this.email
      };
      this.id = null;
      this.firstname = "";
      this.lastname = "";
      this.age = null;
      this.email = "";
      this.$emit("submit-form", newProfile);
    },
  },
};
</script>
