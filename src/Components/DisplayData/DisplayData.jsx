import React from 'react'
import { Container } from '../UI/Container/Container'
import { Card } from '../UI/Card/Card'
import { RowData } from './RowData/RowData'

export const DisplayData = (props) => {
  return (
    <Container>
        <Card>
            {props.data.map(item => {
                return <RowData 
                key={item.id} 
                name={item.name} 
                age={item.age}/>
            })}
        </Card>
    </Container>
  )
}
