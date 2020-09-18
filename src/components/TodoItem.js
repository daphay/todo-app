import React  from 'react';

const completedStyle = {
  fontStyle: "italic",
  color: "#d35e0f",
  opacity: 0.4,
  textDecoration: "line-through",
}

const TodoItem = (props) => (
    (
      <div>
        <li className="todo-item">
          <input  
            type= "checkbox" 
            checked ={props.todo.completed}
            onChange = {()=> props.handleChangeProps(props.todo.id)} 
          />
          <button onClick={()=> props.deleteTodoProps(props.todo.id)}>Delete</button>
            <span style={props.todo.completed? completedStyle: null}>
            {props.todo.title}  
            </span>
        </li>
      </div>
    )    
);

export default TodoItem;