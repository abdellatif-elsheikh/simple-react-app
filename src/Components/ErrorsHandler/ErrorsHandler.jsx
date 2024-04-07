import styles from './ErrorHandler.module.css'
import {Container} from '../UI/Container/Container'
import {Card} from '../UI/Card/Card'
import {Button} from '../UI/Button/Button'

const ErrorsHandler = (props) => {

    const closeErrorMessage = () => {
    props.onCloseErrorPage(false)
    }

  return (
    <div className={styles.wrapper}>
        <div className={styles['overlay']} onClick={closeErrorMessage}></div>
        <Container className={styles.container}>
        <Card style={{padding: 0}}>
            <h2>Invalid Input</h2>
            <div className={styles['error-message']} >
                <p>{props.message}</p>
                <Button onClick={closeErrorMessage}>Close</Button>
            </div>
        </Card>
        </Container>
    </div>
  )
}

export default ErrorsHandler