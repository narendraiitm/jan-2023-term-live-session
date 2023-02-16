new Vue({
  // options object
  el: '#app',
  template: `<div> 
  <ul>
    <li v-for='(task, index) in tasks'> 
        <span>{{task.name}}</span>
        <button @click='deleteTask(index)'> Delete</button> 
    </li>
  </ul>
  <input placeholder='task' v-model='currentTask' />
  <button @click='addTask'> Add Button </button>
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
})
