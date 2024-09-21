import styles from './App.module.css'

//import LogoDefaut from './assets/images/logo-defalt.svg'
//import LogoOutiline from './assets/images/logo-outiline.svg'
//import ArrowDown from './assets/images/arrow-down.svg'

import { LogoDefalt, LogoOutiline, ArrowDown, DribbleIcon, GitHubIcon, FigmaIcon} from './assets/images'

function App() {
  return (
    <div className={styles.portifolioContainer}>

    <aside className={styles.asideMedia}>
      <div className={styles.line}></div>

      <a href="">
        <img src={GitHubIcon} alt="icone do github" />
      </a>
      <a href="">
        <img src={DribbleIcon} alt="icone do dribble" />
      </a>
      <a href="">
        <img src={FigmaIcon} alt="icone do figma" />
      </a>
      </aside>

      <header className={styles.header}>
        <div className={styles.headerTitle}>
          <img src={LogoDefalt} alt="imagem do portifilio logo" />
          <h1>Mary, O Suporte</h1>
        </div>

        <nav className={styles.nav}>

          <a href=''>
            <p><span>#</span> home</p>
          </a>

          <a href=''>
            <p><span>#</span> works</p>
          </a>

          <a href=''>
            <p><span>#</span> about-me</p>
          </a>

          <a href=''>
            <p><span>#</span> contacts</p>
          </a>
          <select>
            <option>EN</option>
            <option>pt-br</option>
            <img src={ArrowDown} alt="icone de setinha para baixo" />
          </select>

         </nav>

      </header>
    </div>
  );
}

export default App;
