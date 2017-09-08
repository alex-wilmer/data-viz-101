import React from 'react'

let fruits = {
  apples: [
    { condition: 10, pickedDate: 1404825846110, from: 'Mexico' },
    { condition: 5, pickedDate: 1304825846110, from: 'Canada' },
    { condition: 1, pickedDate: 1204825846110, from: 'Canada' }
  ],
  oranges: [
    { condition: 8, pickedDate: 1504825846110, from: 'Mexico' },
    { condition: 7, pickedDate: 1404825846110, from: 'Canada' },
    { condition: 6, pickedDate: 1304825846110, from: 'Canada' }
  ]
}

const WIDTH = 10

export default () =>
  <div>
    {[...fruits.apples, ...fruits.oranges].map(apple =>
      <div
        style={{
          backgroundColor: 'orange',
          width: apple.condition * WIDTH
        }}
      >
        {apple.condition}
        <hr />
      </div>
    )}
  </div>
