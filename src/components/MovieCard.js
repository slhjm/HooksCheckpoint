import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './MovieCard.css'

function MovieCard({movie}) {
  return (
    < Card className="movieCard" >
<Card.Img variant="top" src={movie.posterUrl} alt="MovieImgPoster" className="movieImg" />
<Card.Body >
  <Card.Title >{movie.title}</Card.Title>
  <Card.Text >{movie.description}</Card.Text>
  <h2>{"⭐".repeat(movie.rate)}</h2>
</Card.Body>
<Card.Footer>
                <Button variant="primary">Download</Button>
            </Card.Footer>



    </Card>
  )
}

export default MovieCard
