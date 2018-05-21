import stones from './stones';
import appearanceType from '../appearance/appearance-type';
import movies from '../movie/movies';

const stoneAppearances = {
  spaceInCaptainAmericaTheFirstAvenger: {
    id: 'spaceInCaptainAmericaTheFirstAvenger',
    stone: stones.space.id,
    movie: movies.captainAmericaTheFirstAvenger.id,
    type: appearanceType.FIRST_APPEARED,
  },

  spaceInThor: {
    id: 'spaceInThor',
    stone: stones.space.id,
    movie: movies.thor.id,
    type: appearanceType.APPEARED,
  },

  spaceInTheAvengers: {
    id: 'spaceInTheAvengers',
    stone: stones.space.id,
    movie: movies.theAvengers.id,
    type: appearanceType.APPEARED,
  },
  mindInTheAvengers: {
    id: 'mindInTheAvengers',
    stone: stones.mind.id,
    movie: movies.theAvengers.id,
    type: appearanceType.FIRST_APPEARED,
  },
};

export default stoneAppearances;
