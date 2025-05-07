import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src='https://avatars.githubusercontent.com/u/1?v=4' />
            <div className={styles.commentBox}>
            
                    <div className={styles.commentContent}> 
                        <header>
                            <div className={styles.authorAndTime}>
                                <strong>
                                    Rui Frank
                                </strong>
                                <time title='11 de Maio às 08:13' dateTime='2023-05-11 08:13:30'>Cerca de 1h atrás</time>

                            </div>
                            <button title='Deletar comentário'>
                                <Trash size={20} />
                            </button>
                        </header>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non facere debitis veritatis provident inventore quasi, voluptate porro ad numquam, dolorum deleniti exercitationem distinctio nobis! Dignissimos dolorum aspernatur corporis eum labore?
                        </p>
                    </div>
                    <footer>
                        <button>
                            <ThumbsUp />
                            Aplaudir <span>20</span>    
                        </button>
                    </footer>
            </div>
        </div>
    );
}