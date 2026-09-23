const Task = (props) => {
    
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p className="priority" 
                style={{
                    backgroundColor: 
                        // if priority is low, use green
                        props.priority === "Low" ? 'green' 
                        // if priority is medium, use orange
                        : props.priority === "Medium" ? 'orange' 
                        // otherwise, use red
                        : 'red'
                }}>
                {props.priority}
            </p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )
}

export default Task