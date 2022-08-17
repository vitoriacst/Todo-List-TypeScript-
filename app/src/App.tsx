// components
import Footer from "./components/Footer";
import Header from "./components/Header";

// css
import styles from './App.module.css';

function App() {
  return (
  <div>
    <Header/>
    <main className={styles.main}>
      <div>
        <h2>Todo List</h2>
        <p>Formulario</p>
      </div>
      <div>
        <h2>Suas Tarefas:</h2>
        <p>Lista</p>
      </div>
    </main>
    <Footer/>
  </div>
  );
}

export default App;
