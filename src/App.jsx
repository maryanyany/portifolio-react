import styles from './App.module.css'

//import LogoDefaut from './assets/images/logo-defalt.svg'
//import LogoOutiline from './assets/images/logo-outiline.svg'
//import ArrowDown from './assets/images/arrow-down.svg'

import { LogoDefalt, LogoOutiline, ArrowDown, DribbleIcon, GitHubIcon, FigmaIcon, HeroMen, Marks} from './assets/images'

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
          <h1>Mary</h1>
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

      <main >
        <section className={styles.mainContainer}>
        <div className={styles.heroDercription}>
          <h2>Elias is a <span>web designer</span> and <span>front-end developer</span></h2>
          <p>He crafts responsive websites where technologies meet creativity</p>
          <button>Contact me!!</button>
        </div>
        <div className={styles.heroImage}>
          <img src={HeroMen} alt="" />
          <div className={styles.imageLegad}> 
           <div className={styles.square}></div>
          <p>Currently working on <span>Portfolio</span></p>
          </div>

        </div>

        </section>
        
      </main>
    </div>
  );
}

export default App;
