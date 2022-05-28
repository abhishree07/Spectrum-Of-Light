import Button from '../../components/Button'
import Logo from '../../components/Logo'
import childScanImg from '../../assets/autism_2.png'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <main className={styles.heroContainer}>
      <Logo className={styles.heroLogo} />
      <section className={styles.hero}>
      <h1>What does Autism look like on the face ? </h1>
        <p>
        There is no known biological marker for autism. That means that no blood or genetic test can diagnose the disorder. 
        Instead, clinicians rely on observation, medical histories, and questionnaires to determine whether an individual has autism. 
        Recent studies have found certain facial similarities like broad upper face and wide set of eyes with shorter mid region. 
        Spectrum of Light, the first of a kind detects the probability of Autism in children via facial analysis. 
        </p>
        <Button href="/dash" asLink rounded>
          Get started
        </Button>
      </section>
    </main>
    <aside>
      <figure>
        <img src={childScanImg} alt="child" />
      </figure>
    </aside>
  </div>
  )
}
