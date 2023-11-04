import { Task } from './Task.tsx';
import styles from './Info.module.css';


export function Info() {
    return (
        <div>
            <div className={styles.wrapperInfo}>
                <div className={styles.createTasksInfo}>
                    <strong>Tarefas criadas</strong>
                    <button>5</button>
                </div>
                <div className={styles.finishTasksInfo}>
                    <strong>Concluidas</strong>
                    <button>2 de 5</button>
                </div>
            </div>

            <div>
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </div>
        </div>
    );
}