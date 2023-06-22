<template>
  <div>
    <input v-bind:value="task.title" @input="inputTitle" />
    <textarea
      v-bind:value="task.description"
      @input="inputDescription"
      ref="textarea"
      :style="{'height': textareaHeight + 'px'}"
    />

    <div class="button-box">
      <button class="accept" @click="acceptChanges"></button>
      <button class="reject" @click="rejectChanges"></button>
    </div>
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
    return {
      textareaHeight: null,
    };
  },
  mounted() {
    if (this.$refs.textarea) {
      this.textareaHeight = this.$refs.textarea.scrollHeight;
    }
  },
  methods: {
    inputTitle(e) {
      this.$emit("inputTitle", e.target.value);
    },
    inputDescription(e) {
      this.$emit("inputDescription", e.target.value);
    },
    acceptChanges() {
      this.$emit("accept");
    },
    rejectChanges() {
      this.$emit("reject");
    },
  },
};
</script>


<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}

input {
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 22px;
  width: 100%;
  background-color: rgb(220, 213, 230);
}

textarea {
  height: 21px;
  margin-top: 20px;
  font-size: 20px;
  width: 100%;
  resize: none;
  border: none;
  outline: none;
  background-color: rgb(220, 213, 230);
}

@keyframes appearance {
  0% {
    height: 0px;
  }
  100% {
    height: 64px;
  }
}

@keyframes appearanceButton {
  0% {
    top: -100px;
  }
  50% {
    top: -100px;
  }
  100% {
    top: 0;
  }
}

.button-box {
  position: relative;
  margin-top: 20px;
  width: 153px;
  height: 64px;
  overflow: hidden;
  animation-duration: 0.5s;
  animation-iteration-count: forwards;
  animation-name: appearance;
}

.accept {
  position: absolute;
  top: 0;
  left: 0;
  width: 64px;
  height: 64px;
  background-image: url("../../../../images/accept.png");
  background-repeat: no-repeat;
  background-position: center center;
  align-self: flex-end;
  background-color: rgb(189, 163, 231);
  border: none;
  border-radius: 32px;
  color: rgb(0, 0, 0);
  font-family: custom_2;
  margin-right: 25px;
  animation-duration: 0.5s;
  animation-iteration-count: forwards;
  animation-name: appearanceButton;
}

.accept:hover {
  cursor: pointer;
}

.reject {
  position: absolute;
  top: 0;
  right: 0;
  width: 64px;
  height: 64px;
  background-image: url("../../../../images/cross.png");
  background-repeat: no-repeat;
  background-position: center center;
  align-self: flex-end;
  background-color: rgb(189, 163, 231);
  border: none;
  border-radius: 32px;
  color: rgb(0, 0, 0);
  font-family: custom_2;
  animation-duration: 0.5s;
  animation-iteration-count: forwards;
  animation-name: appearanceButton;
}

.reject:hover {
  cursor: pointer;
}
</style>
