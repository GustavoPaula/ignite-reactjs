import { Post } from './Post'
import { Header } from './components/Header'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Gustavo Silva de Paula"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus vitae aliquam sint atque quia eos, praesentium illum repellendus numquam, error minima dicta deserunt dolore! Amet dolorem distinctio veritatis praesentium illum."
          />
          <Post 
            author="Diego Fernandes"
            content="Rocketseat"
          />
        </main>
      </div>
    </div>
  )
}
