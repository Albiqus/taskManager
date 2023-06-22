<template>
  <div>
    <button @click="removeTask" class="remove"></button>
    <button :id="task.id" @click="editTask" class="edit"></button>

    <p class="title">{{task.title}}</p>
    <p :id="task.id" class="description">{{task.description}}</p>
  </div>
</template>


<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {};
  },
  updated() {
    if (this.$refs.textarea) {
      this.textareaHeight = this.$refs.textarea[0].scrollHeight;
    }
  },
  methods: {
    removeTask() {
      this.$emit("remove");
    },
    editTask(e) {
      const taskId = +e.target.getAttribute("id");
      this.$emit("edit", taskId);
    },
  },
};
</script>


<style scoped>
.title {
  font-weight: bold;
  font-size: 22px;
}

.description {
  margin-top: 20px;
  font-size: 20px;
  word-wrap: break-word;
  white-space: pre-wrap;
}

@keyframes appearance {
  0% {
    top: -30px;
  }
  100% {
    top: 10px;
  }
}

.remove {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
  background-color: rgba(0, 255, 255, 0);
  border: none;
  display: none;
  animation-duration: 0.5s;
  animation-iteration-count: forwards;
  animation-name: appearance;
  background-image: url("../../../../images/delete.png");
  background-repeat: no-repeat;
  background-position: center center;
}

.remove:hover {
  cursor: pointer;
}

.task:hover .remove {
  display: block;
}

.edit {
  position: absolute;
  right: 50px;
  top: 10px;
  width: 30px;
  height: 30px;
  background-color: rgba(0, 255, 106, 0);
  border: none;
  display: none;
  animation-duration: 0.5s;
  animation-iteration-count: forwards;
  animation-name: appearance;
  background-image: url("../../../../images/pencil.png");
  background-repeat: no-repeat;
  background-position: center center;
}

.edit:hover {
  cursor: pointer;
}

.task:hover .edit {
  display: block;
}
</style>
