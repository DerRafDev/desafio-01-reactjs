import { Trash } from "phosphor-react";
import styles from './Task.module.css';

export function Task() {
    return (
        <div className={styles.task}>
            <label className={styles.taskCheckbox}>
                <input type="checkbox" />
                <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            </label>
            <button><Trash size={20} /></button>
        </div>
    );
}
