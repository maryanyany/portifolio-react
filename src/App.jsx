import styles from './App.module.css'
import LogoDefaut from './assets/images/logo-defalt.svg'
import LogoOutiline from './assets/images/logo-outiline.svg'
import ArrowDown from './assets/images/arrow-down.svg'


function App() {
  return (
    <div className={styles.portifolioContainer}>
      <header className={styles.header}>
        <div className={styles.headerTitle}>
          <img src={LogoDefaut} alt="imagem do portifilio logo" />
          <h1>Mary, O Suporte</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
