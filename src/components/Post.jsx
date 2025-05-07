import styles from './Post.module.css';
import { Comment } from './Comment';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/61533660?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Rui Frank</strong>
                        <span>Tecnico Mecanico</span>
                    </div>

                </div>

                <time title='13 de Maio de 2025 as 08:00' dateTime="2025-05-13 08:00:00">Publicado ha 1h</time>
            </header>

            <div className={styles.content}>
                <p>Meu nome e Rui Frank, sou Tecnico Mecanico e estou aprendendo React. Estou muito animado para aprender mais sobre essa biblioteca e como ela pode me ajudar a criar interfaces de usuario incriveis. Estou ansioso para compartilhar meu progresso com todos voces!</p>

                <a href="#">#ignite</a>{' '}
                <a href="#">##nlw</a>{' '}
                <a href="#">#rocketseat</a>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                 placeholder='Deixe seu comentario'
                 />
                <footer>
                    <button type='submit'>Comentar</button>
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