import React from 'react'
import { Link } from 'react-router-dom'
const AddMovie = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const title = formData.get('title');
        const director = formData.get('Director');
        const genre = formData.get('Genre');
        const releaseYear = formData.get('ReleaseYear');
        const synopsis = formData.get('Synopsis');
        const posterImageURL = formData.get('PosterImageURL');
        const movieData = {
            title,
            director,
            genre,
            releaseYear,
            synopsis,
            posterImageURL
        };
        console.log(movieData);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" name='title' placeholder='Enter Movie Title' />
      <input type="text" name='Director' placeholder='Enter Movie Director' />
      <input type="text" name='Genre' placeholder='Enter Movie Genre' />
      <input type="number" name='ReleaseYear' placeholder='Enter Movie Release Year' />
      <textarea name='Synopsis' placeholder='Enter Movie Synopsis' />
      <input type="url" name='PosterImageURL' placeholder='Enter Movie Poster Image URL' />
      <Button type='submit'>Submit Movie</Button>
      <Link to='/'>Cancel</Link>
      </form>
      
    </div>
  )
}

export default AddMovie
