import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import music from '../styles/music.module.css'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gta San Andreas - Persian Musics</title>
        <meta name='description' content='Gta sa Persian Musics' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className={styles.title}> Gta Sa Persian Music</h1>
        <div className={styles.holder}>
          <div className={styles.chap}>
            <Image src={"/1.jpg"} width={170} height={170}></Image>
          </div>
        </div>
        <div className={styles.next}>
          <div className={styles.btn}> Change </div>
          </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://hesamhp.ir/#About'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by <span>Hesam Hsp</span>
        </a>
      </footer>
    </div>
  )
}
