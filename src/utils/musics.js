const getMusics = () => {
    return(
        [
            {
                id: 1,
                name: 'CORS',
                artist: 'Loufi',
                url: 'http://localhost:8000/Loufi-CORS.wav',
                coverUrl: 'https://i1.sndcdn.com/artworks-zTMazAz5P23zRzIT-GxJlrA-t500x500.jpg',
                colors: ['#111111', '#D81212'],
                active: true,
            },
            {
                id: 2,
                name: 'Feeling Good',
                artist: 'Loufi',
                url: 'http://localhost:8000/Loufi-Feeling_Good.wav',
                coverUrl: 'https://i1.sndcdn.com/artworks-4noRuznX3eS1bP6q-FRvdAg-t500x500.jpg',
                colors: ['#443665', '#cd91ae', '#647de3', '#9c6c94'],
                active: false,
            }
        ]
    )
}

export default getMusics;