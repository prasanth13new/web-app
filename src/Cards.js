import React from 'react'
import './cards.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Cards() {
  return (
    <div className="container">
      <h1>Awards & Recognition</h1>

      <div className="card_container">

    <div className='card'>
    <Card className='container_img' sx={{ maxWidth: 345 }}>
        <img src='https://static.bluelabellabs.com/wp-content/uploads/2021/09/Site_Badges_2022_winner-e1652788614742.png' />
        <CardContent className='container_content'>
          <h2>2022 Webby Award Winner</h2>
          <p>for the Happier App in the Visual Design category </p>
        </CardContent>
    </Card>
    </div>

    <div className='card'>
    <Card className='container_img' sx={{ maxWidth: 345 }}>
        <img src='https://static.bluelabellabs.com/wp-content/uploads/2021/09/d238ec06ef5ccfc74275559537e360ce-e1652788245854.png' />
        <CardContent className='container_content'>
          <h2>Ranked#407</h2>
          <p>for the Happier App in the Visual Design category </p>
        </CardContent>
    </Card>
    </div>

    <div className='card'>
    <Card className='container_img' sx={{ maxWidth: 345 }}>
        <img src='https://static.bluelabellabs.com/wp-content/uploads/2021/09/Site_Badges_2022_winner-e1652788614742.png' />
        <CardContent className='container_content'>
          <h2>2022 Webby Award Winner</h2>
          <p>for the Happier App in the Visual Design category, Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse, nam repellendus unde vel fugiat quam et voluptatem qui possimus sapiente id ipsum totam quasi tempore soluta dolorem, corporis maiores! </p>
        </CardContent>
    </Card>
    </div>

    <div className='card'>
    <Card className='container_img' sx={{ maxWidth: 345 }}>
        <img src='https://static.bluelabellabs.com/wp-content/uploads/2021/09/Site_Badges_2022_winner-e1652788614742.png' />
        <CardContent className='container_content'>
          <h2>2022 Webby Award Winner</h2>
          <p>for the Happier App in the Visual Design category </p>
        </CardContent>
    </Card>
    </div>
    </div>
    </div>
  )
}

export default Cards