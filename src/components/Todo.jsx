const Todo = (props) => {

    
    const todoClasses = ["bold", "italic"];

    if (props.todo.complete){
        todoClasses.push("line-through");
    }   

    
    return (
    <div key={i}>
        <input onChange={(event) => {
        handleToggleComplete(i);
        }} checked={props.todo.complete} type="checkbox" />
        <span className={todoClasses.join(" ")}>{props.todo.text}</span>
        <button onClick={(event) => {
        handleTodoDelte(i);
        }}
        style={{ marginLeft: "10px" }}
        
        
        > delete</button>
    </div>
    );
}

export default Todo;