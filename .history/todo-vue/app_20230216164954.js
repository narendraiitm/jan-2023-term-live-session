new Vue({
  // options object
  el: '#app',
  template: `<div> 
  <div> No of tasks: {{noOfTasks}} </div>
  <ul>
    <li v-for='(task, index) in tasks'> 
        <span>{{task.name}}</span>
        <button @click='deleteTask(index)'> Delete</button> 
    </li>
  </ul>
  <input placeholder='task' v-model='currentTask' />
  <button @click='addTask()'> Add Button </button>
  </div>`,
  data: {
    currentTask: null,
    tasks: [{ name: 'Task 1' }, { name: 'Task 3' }],
  },
  methods: {
    addTask() {
      this.tasks.push({ name: this.currentTask })
    },
    deleteTask(index) {
      this.tasks.splice(index, 1)
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