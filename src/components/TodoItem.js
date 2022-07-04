// export class TodoItem extends Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.todo.title}</h1>
//       </div>
//     );
//   }
// }

// export default TodoItem;
import React from "react";
const TodoItem = (props) => <li> {props.todo.title}</li>;

export default TodoItem;
