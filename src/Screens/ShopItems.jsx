import React from 'react'
import Card from '../Components/Card'

const ShopItems = () => {
  return (
    <div>
      <div>
        <h1 style={{ color: "red", textAlign: "center" }}>Latest <u>In</u> Women</h1>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          <Card image='https://jeem.pk/cdn/shop/files/Dazzle_Pink_Luxury_Dress_For_Women.jpg?v=1724052401&width=600' description='Dazzle Pink' price='75$' strikethrough='100$' />
          <Card image='https://jeem.pk/cdn/shop/files/Sheesha_Maroon_Luxury_Dress.jpg?v=1724053033&width=1000' description='Sheesha Maroon' price='80$' strikethrough='105$' />
          <Card image='https://jeem.pk/cdn/shop/files/Isabel_Blue_Luxury_Formal_For_Women.jpg?v=1724051777&width=600' description='Isabel Blue Luxury Formal For Women' price='90$' strikethrough='120$' />
          <Card image='https://jeem.pk/cdn/shop/files/emma-purple-luxury-pret.webp?v=1710932591&width=800' description='Emma Purple' price='77$' strikethrough='100$' />
        </div>
        <div>
          <h1 style={{ color: "red", textAlign: "center" }}>Latest <u>In</u> Kids</h1>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
            <Card image='https://wearochre.com/cdn/shop/products/0085_OBS51_2.jpg?v=1646741345&width=500' description='Denim Blue Shirt' price='60$' strikethrough='80$' />
            <Card image='https://wearochre.com/cdn/shop/files/Resize_0051_INDP-11_1.jpg?v=1722500919&width=900' description='Swiss Lawn Digital Printed 2 Pc Suit' price='70$' strikethrough='90$' />
            <Card image='https://wearochre.com/cdn/shop/products/0012_OBS69_2.jpg?v=1654588077&width=500' description='Chambray Cotton Shirt' price='65$' strikethrough='83$' />
            <Card image='https://wearochre.com/cdn/shop/files/Resize_0046_INDP-12_1.jpg?v=1722500864&width=900' description='Swiss Lawn Digital Printed 2 Pc Suit' price='67$' strikethrough='85$' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopItems
