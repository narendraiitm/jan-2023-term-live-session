new Vue({
  // options object
  el: '#app',
  template: `<div> 
  <div> No of tasks: {{noOfTasks}} </div>
  <ul>
    <li v-for='(task, index) in tasks'> 
        <span>{{task.name}}</span>
        <button @click='deleteTask(index)'> Delete</button> 
        <button @click='markAsComplete(index)'> Mark As complete</button>
    </li>
  </ul>
  <input placeholder='task' v-model='currentTask' />
  <button @click='addTask()'> Add Button </button>
  </div>`,
  data: {
    currentTask: null,
    tasks: [
      { name: 'Task 1', complete: false },
      { name: 'Task 3', complete: false },
    ],
  },
  methods: {
    addTask() {
      this.tasks.push({ name: this.currentTask })
    },
    deleteTask(index) {
      this.tasks.splice(index, 1)
    },
    markAsComplete(index) {
      console.log(this.tasks[index].complete)
      this.tasks[index].complete = true
      console.log(this.tasks[index].complete)
    },
  },
  computed: {
    noOfTasks() {
      return this.tasks.length
    },
  },
  watch: {
    currentTask(newVal, oldVal) {
      if (newVal.length > 5) {
        alert('Length of the task cannot be more then 5')
      }
    },
  },
})
