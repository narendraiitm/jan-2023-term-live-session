export default {
  template: `<div>
    <span :class='{complete: task.complete}'>{{task.name}}</span>
        <button @click='deleteTask(index)'> Delete</button> 
        <button @click='markAsComplete(index)'> Mark As complete</button>
    
    </div>`,
}
