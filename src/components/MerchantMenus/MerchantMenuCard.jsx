import React from 'react'
import { Card, Label } from 'semantic-ui-react'
import './MerchantMenuCard.css';

const description = [
  '£ • Bakery • Sandwich • Pastry',
  'test',
].join(' ')
const CardExampleExtraContent = () => (
  <Card>
    <Card.Content header='PAUL (Kingsway)' />
    <Card.Content description={description} />
    <Card.Content>
      <Label>
        25–35 min
      </Label>
    </Card.Content>
  </Card>
)

export default CardExampleExtraContent
