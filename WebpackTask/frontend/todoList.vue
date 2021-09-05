<template>
  <div class="container">
  <h2>Todo List Vue</h2>
  <div class="mb-3 input-group">
    <input type="text" v-model="newEntry" class="form-control col" placeholder="New Entry" aria-label="New Entry"
           aria-describedby="button-addon1">
    <div class="input-group-append">
      <button @click="addEntry" class="btn btn-outline-secondary ml-1 col" type="button" id="button-addon1">Add
      </button>
    </div>
  </div>
  <ul v-cloak class="list-group">
    <li v-for="item in items" :key="item.id" class="row m-1">
      <template v-if="item.isEditing">
        <input class="form-control col-md-10 p-4" type="text" v-model="item.editText">
        <button @click="saveEdit(item)" class="btn btn-outline-secondary col-md col-12 ml-md-1" type="button"
                id="button-addon2">
          Save
        </button>
        <button @click="cancelEdit(item)" class="btn btn-outline-secondary col-md col-12 ml-md-1" type="button"
                id="button-addon3">
          Cancel
        </button>
      </template>
      <template v-else>
        <span class="list-group-item col-md-10">{{ item.text }}</span>
        <button @click="editEntry(item)" class="btn btn-outline-secondary col-md col-12 ml-md-1" type="button"
                id="button-addon4">
          Edit
        </button>
        <button @click="deleteEntry(item)" class="btn btn-outline-secondary col-md col-12 ml-md-1" type="button"
                id="button-addon5">
          Delete
        </button>
      </template>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newEntry: "",
      items: [],
      id: 0
    };
  },

  methods: {
    addEntry: function() {
      if (this.newEntry.trim() === "") {
        alert("Enter the entry");

        return;
      }

      this.items.push({text: this.newEntry.trim(), editText: this.newEntry, id: this.id, isEditing: false});
      this.id++;
      this.newEntry = "";
    },

    deleteEntry: function (item) {
      this.items = this.items.filter((x) => {
        return x !== item;
      });
    },

    editEntry: function (item) {
      item.isEditing = true;
    },

    cancelEdit: function (item) {
      item.isEditing = false;
      item.editText = item.text;
    },

    saveEdit: function (item) {
      if (item.editText.trim() === "") {
        alert("The edit can't be empty");

        return;
      }

      item.isEditing = false;
      item.text = item.editText.trim();
    }
  }
};
</script>

<style>
[v-cloak] {
  display: none;
}
</style>