 import React from 'react'

const Card = (props) => {
  const { image, description, price, strikethrough } = props
  return (
    <div className='w-[250px]'>
      <div  style={
        {
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }
      }>
        <div style={{width:"250px", height:"350px", backgroundImage: `url(${image})`, backgroundPosition:"center", backgroundSize:"cover", backgroundColor:"black"}} ></div>
        <span>{description}</span>
        <div style={
          {
            display: "flex",
            flexDirection: "row",
            gap:"1rem"
          }
        }><span>{price}</span>
        <pre style={{ textDecorationLine: "line-through", color: "grey" }}>{strikethrough}</pre>
        </div>
      </div>
    </div>
  )
}

export default Card
