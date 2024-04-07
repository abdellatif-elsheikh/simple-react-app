import styles from './Button.module.css'

export const Button = (props) => {
  return (
    <button 
    className={`${styles.btn} ${props.className}`} 
    type={props.type}
    onClick={props.onClick} 
    onDoubleClick={props.onDoubleClick} 
    style={props.style}
    >
        {props.children}
    </button>
  )
}
