import styles from './Container.module.css'

export const Container = (props) => {
  return (
    <div className={`${styles.container} ${props.className}`}>
        {props.children}
    </div>
  )
}
