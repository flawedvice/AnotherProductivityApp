
interface TaskProps {
    num: number
};

const Task = (props:TaskProps) => {
    
    return (
        <div className="task">
            <div className="task-metadata">
                <div className="color-bar"></div>
                <input type="checkbox" id={`task-${props.num}`}></input>
                <label htmlFor={`task-${props.num}`}>
                    <p>Task {props.num}</p>
                </label>
            </div>
            <div className="task-due">
                <p>17/02/22</p>
                <p>00:14</p>
            </div>
        </div>
    );
};

export default Task;