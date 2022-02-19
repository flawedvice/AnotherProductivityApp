import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faLocationDot } from '@fortawesome/free-solid-svg-icons';


interface TaskCardProps {
    num: number
}

const TaskCard = (props: TaskCardProps) => {
    return (
        <form className="task-card">
            <section className="task-card-title">
                <input type="checkbox" name="" id={`${props.num}`} />
                <label htmlFor={`${props.num}`}>Task {props.num}</label>
            </section>
            <section className="task-card-metadata">
                <article>
                    <label htmlFor={`task-${props.num}-due`}>Due by</label>
                    <input type="datetime-local" name="" id={`task-${props.num}-due`} />
                </article>
                <article>
                    <label htmlFor={`task-${props.num}-reminder`}>
                        <FontAwesomeIcon icon={ faBell } />
                    </label>
                    <input type="time" name="" id={`task-${props.num}-reminder`} />
                </article>
                <article>
                    <label htmlFor={`task-${props.num}-location`}>
                        <FontAwesomeIcon icon={ faLocationDot }/>
                    </label>
                    <input type="text" name="" id={`task-${props.num}-location`} />
                </article>
            </section>
            <section className="task-card-description">
                <textarea name="" id="" cols={30} rows={10}></textarea>
            </section>
        </form>
    );
};

export default TaskCard;