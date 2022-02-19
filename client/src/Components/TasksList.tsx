import Task from "./Task";

const TaskList = () => {

    return (
        <section className="tasks-list">
            <Task num={1}/>
            <Task num={2}/>
            <Task num={3}/>
            <Task num={4}/>
        </section>
    );
};

export default TaskList;