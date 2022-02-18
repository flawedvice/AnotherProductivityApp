
const Task = () => {
    
    return (
        <div className="task">
            <div className="task-metadata">
                <div className="color-bar"></div>
                <input type="checkbox"></input>
                <span>
                    <p>Task_Name</p>
                </span>
            </div>
            <div className="task-due">
                <p>17/02/22</p>
                <p>00:14</p>
            </div>
        </div>
    );
};

export default Task;