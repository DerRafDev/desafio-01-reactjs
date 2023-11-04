import { PlusCircle } from "phosphor-react";
import styles from './NewTask.module.css';

export function NewTask() {
    return (
        <div className={styles.newTaskWrapper}>
            <form className={styles.taskForm}>
                <textarea placeholder="Adicione uma nova tarefa" />
                <button className={styles.taskButton} type="submit">
                    Criar <PlusCircle size={20} />
                </button>
            </form>
        </div>
    )
}