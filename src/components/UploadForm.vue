<template>
  <div id="upload-form">
    <div class="dropper">
      <!-- With ($event.target.files) we're telling vue that we want to reference the actual DOM event we're calling here 
      with uploadImages and grab the target.files property from what the event returns. We use the $ to ensure we're 
      referring to the actual event object, not just some variable named "event" -->
      <input
        type="file"
        @change="uploadImages($event.target.files)"
        multiple
        accept="image/*"
        name=""
        id=""
      />
      <span>Drag file(s) here or click on this area to upload</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UploadForm",
  methods: {
    ...mapActions(["uploadImages"]),
  },
};
</script>

<style scoped>
#upload-form {
  font-family: "Roboto", sans-serif;
}
input {
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 30vh;
  position: absolute;
  font-size: 1rem;
  opacity: 0;
}
.dropper {
  height: 30vh;
  border: 2px dashed black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  position: relative;
}
.dropper:hover {
  background-color: #eee;
}
</style>