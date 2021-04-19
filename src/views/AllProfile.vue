<template>
  <div class="container">
    <ul v-for="result in profileResults" :key="result.id">
      <base-card>
        <div class="flex flex-row items-center">
          <li class="p-2">
            <span class="text-purple-600 italic">Name:&nbsp;{{ result.firstname }} </span>
            <span class="text-purple-600 italic">&nbsp;{{ result.lastname }}&nbsp;</span>
            <span class="text-green-600 italic">Age:&nbsp;{{ result.age }}</span>
          </li>
          <!-- :isEdit="isEdit" -->
          <div class="flex flex-col">
            <base-button
              @btn-click="
                editProfile(
                  $event,
                  result.id,
                  result.name,
                  result.lastname,
                  result.age
                )
              "
              bgcolor="bg-green-500"
              txtcolor="text-white"
              label="edit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                width="18px"
                height="18px"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                />
              </svg>
            </base-button>
            <base-button
              @btn-click="deleteProfile($event, result.id)"
              bgcolor="bg-red-600"
              txtcolor="text-red"
              label="x"
            ></base-button>
          </div>
        </div>
      </base-card>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: "http://localhost:5000/profileResults",
      profileResults: [],
      oldName: null,
      oldLastName: null,
      oldAge: null,
    };
  },
  methods: {
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