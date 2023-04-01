import React from 'react';

import Props from './Props';
const moviesArr = [
  {
    id: 1,
    title: "Perfect Strangers 2022",
    src: "https://upload.wikimedia.org/wikipedia/ar/thumb/3/3b/%D9%85%D9%84%D8%B5%D9%82_%D9%81%D9%8A%D9%84%D9%85_%D8%A3%D8%B5%D8%A7%D8%A8_%D9%88%D9%84%D8%A7_%D8%A3%D8%B9%D8%B2.jpg/260px-%D9%85%D9%84%D8%B5%D9%82_%D9%81%D9%8A%D9%84%D9%85_%D8%A3%D8%B5%D8%A7%D8%A8_%D9%88%D9%84%D8%A7_%D8%A3%D8%B9%D8%B2.jpg",
    description: "تدور أحداث الفيلم حول مجموعة من سبعة أصدقاء يجتمعون على العشاء، ويقررون أن يلعبوا لعبة حيث يضع الجميع هواتفهم المحمولة على طاولة العشاء ",
    movieURL: "https://www.youtube.com/watch?v=klMhg9deh00https://www.youtube.com/watch?v=FBGSxUGYp6s&ab_channel=NetflixMENA"

  },
  {
    id: 2,
    title: "Love tactique",
    src: "https://m.media-amazon.com/images/M/MV5BMWFhMzFjYjktMmJkNy00YTVmLWI1ZWUtYjI3MTgxZmYyNzZiXkEyXkFqcGdeQXVyMTEyMDQwNDQw._V1_FMjpg_UX1000_.jpg",
    description: "An ad executive and a fashion designer-blogger don't believe in love, so they place a bet to make the other fall head over heels",
    movieURL: "https://www.youtube.com/watch?v=5JiDYc0p7co&ab_channel=Cin%C3%A9phileNetflix"

  },
  {
    id: 3,
    title: "My bride",
    src: "https://m.media-amazon.com/images/M/MV5BOTI3MjUyYTUtM2UxZS00MzJhLTg1OWUtYTI2ZDkxYzI2ZWIwXkEyXkFqcGdeQXVyOTg2MTc5OTI@._V1_.jpg",
    description: "The story follows a young man and woman who go through various situations in their journey to find the right partner, which raises questions about ..",
    movieURL: "https://www.youtube.com/watch?v=NV37_IjiZKk&ab_channel=Cinedigm"

  },
  {
    id: 4,
    title: "titou",
    src: "https://upload.wikimedia.org/wikipedia/en/5/52/Tito-movie-poster.jpg",
    description: "Jeune inacito (تيتو) est un film (2h 00min) de Tareq El Eryan avec Ahmed El Sakka, Hanan Turk, Amr Waked. Un casting de 10 stars sur CinéSérietif ayant perdu goût à la vie, il décide de devenir un héros après avoir affronté un crabe géant. Dès lors, il s’entraîne pendant trois ans afin de devenir un puissant héros soit dix kilomètres de course à pied, cent pompes, cent abdos, cent squats, chaque jour. Après un entrainement « intensif », Saitama remarque deux changements : il est devenu terriblement fort, au point de vaincre ses ennemis en un coup, et a perdu tous ses cheveux.",
    href: "https://www.youtube.com/watch?v=voC6Fg_Y3tw&ab_channel=AflamArabicNew"
  },
  {
    id: 5,
    title: "The Takedown",
    src: "https://m.media-amazon.com/images/M/MV5BZjNmMWFjZmUtZWYyMy00YTE4LTlhNzEtMTBlMGFkMzNmOTE3XkEyXkFqcGdeQXVyNjE4ODA3NTY@._V1_.jpg",
    description: "Diakité and Monge as police officers who are the complete opposite, and get paired together to uncover an unexpectedly big criminal case.",
    href: "https://www.youtube.com/watch?v=iReeddMo_ao&ab_channel=Netflix"
  },
  {
    id: 6,
    title: "Dragon Bull Z",
    src: "https://www.ecranlarge.com/uploads/image/001/150/eg2cakffqh3dvujvj2qyce7ybvk-021.jpg",
    description: "dans des univers multiples où la guerre et l’affrontement entre le bien et le mal sont permanents. L'un des motifs récurrents est la présence de boules de cristal. Si sept boules de cristal sont réunies, n’importe quel vœu peut être exaucé en invoquant le dragon Shenron, émanation du Tout-Puissant. Ces dernières sont la cause des plus grands conflits de la saga, car elles peuvent notamment apporter l’immortalité",
    href: "https://www.youtube.com/watch?v=wuNvVxoWEvM"
  }

]


function MovieList(props) {
  return (
    <div>
      <h2 className='wlmv'> The Movies</h2>
      <div className="Movie">
        <Props movies={moviesArr} />
      </div>
    </div>
  )
}
export default MovieList;
