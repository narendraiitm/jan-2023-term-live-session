Vue.component('Header', {
  template: `<div> {{name}}</div>`,
  data() {
    return {
      name: 'Narendra',
    }
  },
})

const Footer = {
  template: `<div> This is footer </div>`,
}

new Vue({
  // options object
  el: '#app',
  template: `<div> 
  <Header />
  <div> No of tasks: {{noOfTasks}} </div>
  <ul>
    <li v-for='(task, index) in tasks'> 
        <span :class='{complete: task.complete}'>{{task.name}}</span>
        <button @click='deleteTask(index)'> Delete</button> 
        <button @click='markAsComplete(index)'> Mark As complete</button>
    </li>
  </ul>
  <input placeholder='task' v-model='currentTask' />
  <button @click='addTask()'> Add Button </button>
  <footer-comp />
  </div>`,
  data: {
    currentTask: null,
    tasks: [
      { name: 'Task 1', complete: false },
      { name: 'Task 3', complete: false },
    ],
  },
  components: {
    'footer-comp': Footer,
  },
  methods: {
    addTask() {
      this.tasks.push({ name: this.currentTask })
    },
    deleteTask(index) {
      this.tasks.splice(index, 1)
    },
    markAsComplete(index) {
      this.tasks[index].complete = true
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