<template>
  <div class="main">
    <button @click="$router.push('/')">на главную</button>
    <task-form @create="createTask" />
    <task-list @update="updateTask" @remove="removeTask" :tasks="tasks" />
  </div>
</template>

<script>
import TaskForm from "@/components/Main/TaskForm/TaskForm.vue";
import TaskList from "@/components/Main/TaskList/TaskList.vue";

export default {
  components: {
    TaskForm,
    TaskList,
  },
  data() {
    return {
      tasks: JSON.parse(localStorage.getItem("tasks")) || [
        {
          id: 3,
          title: "Сходить в магазин",
          description: "Купить яблоки, молоко, яйца",
        },
        {
          id: 2,
          title: "НГ",
          description: "жена - ирригатор, сын - конструктор",
        },
        {
          id: 1,
          title: "Доделать проект",
          description: "НЕ ЗАБЫТЬ ДОДЕЛАТЬ ПРОЕКТ",
        },
      ],
    };
  },
  methods: {
    createTask(newTask) {
      this.tasks.unshift({ ...newTask, id: this.tasks[0]?.id + 1 || 1 });

      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    removeTask() {
      this.tasks.shift();

      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    updateTask(changeableTaskId, info) {
      this.tasks = this.tasks.map((task) => {
        if (task.id === changeableTaskId) {
          return { ...task, title: info.title, description: info.description };
        }
        return task;
      });

      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
};
</script>

<style scoped>
.main {
  position: relative;
  padding-top: 125px;
  padding-bottom: 100px;
  margin: 0 auto;
  width: 1000px;
  height: auto;
  margin-top: 100px;
  margin-bottom: 100px;
  background-color: rgb(207, 190, 235);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.main button {
  position: absolute;
  left: 150px;
  top: 25px;
  margin-top: 20px;
  width: 100px;
  height: 50px;
  align-self: flex-end;
  background-color: rgb(189, 163, 231);
  border: none;
  border-radius: 20px;
  color: rgb(0, 0, 0);
  font-family: custom_2;
}

.main button:hover {
  cursor: pointer;
  outline: 2px solid white;
}
</style>