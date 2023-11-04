import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
  <div>
    <Header />
    <div className={styles.wrapper}> 
      <NewTask />
      <strong>task 1</strong>
      <strong>task 2</strong>
      <strong>task 3</strong>

    </div>
  </div>    
  )
}