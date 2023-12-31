import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Info } from './components/Info';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
  <div>
    <Header />
    <div className={styles.wrapper}> 
      <NewTask />
      <Info />
    </div>
  </div>    
  )
}