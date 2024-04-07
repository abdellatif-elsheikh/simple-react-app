import styles from './RowData.module.css'

export const RowData = (props) => {
  return (
    <div className={styles['row-data']}>
        <p>{props.name}  ( {props.age} Years Old )</p>
    </div>
  )
}
