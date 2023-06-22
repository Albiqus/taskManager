<template>
  <div class="tasks">
    <div class="task" v-for="task in tasks" :key="task.id">
      <task-item
        @remove="removeTask"
        @edit="editTask"
        v-if="changeableTaskId !== task.id"
        :task="task"
      />
      <task-item-edit
        @inputTitle="inputTitle"
        @inputDescription="inputDescription"
        @accept="acceptChanges"
        @reject="rejectChanges"
        v-if="changeableTaskId === task.id"
        :task="changebleTaskInfo"
      />
    </div>
  </div>
</template>


<script>
import TaskItem from "@/components/Main/TaskList/TaskItem/TaskItem.vue";
import TaskItemEdit from "@/components/Main/TaskList/TaskItemEdit/TaskItemEdit.vue";
export default {
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  components: {
    TaskItem,
    TaskItemEdit,
  },
  data() {
    return {
      changeableTaskId: null,

      changebleTaskInfo: {
        title: null,
        description: null,
      },
    };
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
    editTask(taskId) {
      const changeableTaskId = taskId;
      const changeableTask = this.tasks.find(
        (el) => el.id === changeableTaskId
      );

      this.changeableTaskId = changeableTaskId;
      this.changebleTaskInfo.title = changeableTask.title;
      this.changebleTaskInfo.description = changeableTask.description;
    },
    inputTitle(title) {
      this.changebleTaskInfo.title = title;
    },
    inputDescription(description) {
      this.changebleTaskInfo.description = description;
    },
    acceptChanges() {
      this.$emit("update", this.changeableTaskId, this.changebleTaskInfo);
      this.changeableTaskId = null;
    },
    rejectChanges() {
      this.changeableTaskId = null;
    },
  },
};
</script>


<style scoped>
.tasks {
  width: 700px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.task {
  transition: all 1s ease-out;
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  margin-top: 50px;
  width: 100%;
  height: auto;
  outline: 5px solid rgb(189, 163, 231);
  padding: 20px;
}

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

.task input {
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 22px;
  width: 100%;
}

.task textarea {
  height: auto;
  margin-top: 20px;
  font-size: 20px;
  width: 100%;
  resize: none;
  border: none;
  outline: none;
}

.remove {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
  background-color: aqua;
  border: none;
  display: none;
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
  background-color: rgb(0, 255, 106);
  border: none;
  display: none;
}

.edit:hover {
  cursor: pointer;
}

.task:hover .edit {
  display: block;
}
</style>
