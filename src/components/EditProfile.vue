<template>
    <form @submit.prevent="submitForm">
      <div class="container w-2/5 p-8 mx-auto mt-10 border rounded-lg">
        <div class="flex justify-center">
          <!-- <img v-bind:src="img" width="150" class="rounded-full"> -->
        </div>
        <h1 class="text-2xl pt-4 pb-4">Registration Form</h1>
        <p v-if="errors" class="text-red-500">
          <b>Please correct the following error(s):</b>
        <ul>
          <!-- <li v-for="error in errors" class="text-red-500">{{ error }}</li> -->
        </ul>
        </p>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col">
            <label class="text-sm leading-7 text-gray-600">Id</label>
            <input type="text" id="id" v-model="id" name="id"
              class="bg-gray-100 rounded px-4 py-2 mb-4">
          </div>
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
            <input type="text" id="age" v-model="age" name="age" class="bg-gray-100 rounded px-4 py-2 mb-4">
          </div>
          <!-- Submit -->
          <br>
          <!-- <div>
            <input type="submit" value="Submit" @click="submitForm()"
              class="px-8 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 cursor-pointer">
          </div> -->
          <base-button
        bgcolor="bg-purple-900"
        txtcolor="text-white"
        label="Submit"
      ></base-button>
        </div>
      </div>
    </form>
</template>