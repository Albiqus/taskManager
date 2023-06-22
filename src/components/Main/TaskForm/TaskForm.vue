<template>
  <div class="form">
    <form>
      <input v-model="task.title" />
      <textarea v-model="task.description" />
      <button @click="createTask">создать</button>
    </form>
  </div>
</template>

<script>
import { isValid } from "@/utils/isValid.ts";
export default {
  data() {
    return {
      task: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    createTask(e) {
      e.preventDefault();
      if (!isValid(this.task)) return;
      this.$emit("create", this.task);

      this.task = { title: "", description: "" };
    },
  },
};
</script>

<style scoped>
.form {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}

.form form {
  padding: 30px;
  width: 700px;
  height: auto;
  background-color: rgb(189, 163, 231);
  border-radius: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.form input {
  padding-left: 15px;
  padding-right: 15px;
  border: 0;
  outline: none;
  width: 100%;
  height: 40px;
  font-size: 30px;
  background-color: rgb(207, 190, 235);
  border-radius: 20px;
}

.form textarea {
  padding-left: 15px;
  padding-top: 10px;
  border: 0;
  outline: none;
  resize: none;
  margin-top: 20px;
  width: 100%;
  height: 100px;
  font-size: 30px;
  background-color: rgb(207, 190, 235);
  overflow: auto;
  border-radius: 20px;
}

.form form button {
  margin-top: 20px;
  width: 100px;
  height: 50px;
  align-self: flex-end;
  background-color: rgb(207, 190, 235);
  border: none;
  border-radius: 20px;
  color: rgb(0, 0, 0);
  font-family: custom_2;
}

.form form button:hover {
  cursor: pointer;
  outline: 2px solid white;
}
</style>