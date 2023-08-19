import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post(props) {
  console.log(props)

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/diego3g.png" />
          <div className={styles.authorInfo}>
            <strong>Gustavo Silva de Paula</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="14 de Agosto às 22:40" dateTime="2023-08-14 22:40:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>

      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}