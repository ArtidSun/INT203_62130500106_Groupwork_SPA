<template>
  <div class="home">
    <register-form
      v-if="isEdit"
      :oldId="oldId"
      :oldName="oldName"
      :oldLastName="oldLastName"
      :oldAge="oldAge"
      @submit-form="editSubmit"
    >
    </register-form>

    <register-form v-else @submit-form="addNewProfile" />
  </div>
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";

export default {
  name: "Home",
  components: {
    "register-form": RegisterForm,
  },
  data() {
    return {
      url: "http://localhost:5000/profileResults",
      oldName: null,
      oldLastName: null,
      oldAge: null,
    };
  },
  methods: {
    async addNewProfile(newProfile) {
      const res = await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          firstname: newProfile.firstname,
          lastname: newProfile.lastname,
          age: newProfile.age,
        }),
      });
      const data = await res.json();
      //spread array
      this.profileResults = [...this.profileResults, data];
      //or add new item to the end of array
      // this.profileResults.push(data)
    },

    async fetchProfileResult() {
      const res = await fetch(this.url);
      const data = await res.json();
      // parses JSON response into native JavaScript objects
      return data;
    },

    async deleteProfile(passingData, id) {
      if (confirm(`Are you sure to delete (${passingData.label})?`)) {
        const res = await fetch(`${this.url}/${id}`, {
          method: "DELETE",
        });
        res.status === 200
          ? (this.profileResults = this.profileResults.filter(
              (profile) => profile.id !== id
            ))
          : alert("Error to delete profile");
      }
    },

    editProfile(passingData, editId, editName, editLastname, editAge) {
      // this.isEdit = passingData.isEdit
      this.isEdit = true;
      this.oldId = editId;
      this.oldName = editName;
      this.oldLastName = editLastname;
      this.oldAge = editAge;

      alert(
        ` ${passingData.label} mode: ${this.isEdit}, you want to edit current data {id: ${editId}, name: ${editName}, lastname: ${editLastname}, age: ${editAge}}`
      );
    },

    async editSubmit(editingData) {
      const res = await fetch(`${this.url}/${editingData.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          firstname: editingData.firstname,
          lastname: editingData.lastname,
          age: editingData.age,
        }),
      });
      const data = await res.json();
      this.profileResults = this.profileResults.map((profile) =>
        profile.id === data.id
          ? {
              ...profile,
              firstname: data.firstname,
              lastname: data.lastname,
              age: data.age,
            }
          : profile
      );
      this.isEdit = false;
    },
  },

  async created() {
    this.profileResults = await this.fetchProfileResult();
  },
};
</script>
