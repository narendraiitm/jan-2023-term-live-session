export default {
  template: `<div>
    <span>{{childTask.name}}</span>
    <div> {{name}} </div>.
    </div>`,
  props: ['childTask', 'name'],
}
