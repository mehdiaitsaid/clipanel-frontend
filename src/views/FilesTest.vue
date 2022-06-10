<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
        <div class="card-body">
          <label>Make Folder</label>
          <input
            id="folderName"
             v-model="folderName"
            type="text"
            class="form-control"
            placeholder="Folder Name"
            name="folderName"
          />
          <button v-on:click="folder" class="btn btn-primary">Make Folder</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { filesServices } from "../services/files.services";


export default {
  name: "FilesTest",
  components: {},
  mounted() {
  }, 
  methods: {
    folder() {
      filesServices.makeFolder(this.folderName).then((response) => {
          console.log(response);
        })
        .catch(({ response: { data } }) => {
          console.log(data);
        })
        .finally(() => {});
      
    }

  },
   data() {
    return {
     folderName : ''
      
    };
  },
};
</script>
