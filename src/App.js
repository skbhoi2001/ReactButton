// import logo from './logo.svg';
 import './App.css';
import Button from './Button/Button';

import styles from './Button/Button.module.css'

function App() {
  return (
    <div className="App App-header">
       <div className={styles.DisplayButton}>
         <div className={styles.DisplayButton1}>
         <Button  title="JOIN US"/>
         <Button title="SETTINGS"/>
         </div>
         <div className={styles.DisplayButton2}>
         <Button title="LOGIN"/>
         <Button title="CONTACT US"/>
         </div>
         <div className={styles.DisplayButton3}>
         <Button title="SEARCH"/>
         <Button title="HELP"/>
         </div>
         <div className={styles.DisplayButton4}>
         <Button title="HOME"/>
         <Button title="DOWNLAORD"/>
         </div>
       </div>
    </div>
  );
}

export default App;
