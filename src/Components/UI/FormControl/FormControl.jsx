import styles from './FormControl.module.css'

export const FormControl = (props) => {
  return (
    <div className={`${styles['fom-control']} ${props.className}`}>
        {props.children}
    </div>
  )
}
