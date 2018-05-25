import characters from '../character/characters';
import movies from '../movie/movies';
import appearanceType from '../appearance/appearance-type';

const characterAppearances = {
  capInCaptainAmericaTheFirstAvenger: {
    id: 'capInCaptainAmericaTheFirstAvenger',
    character: characters.captainAmerica.id,
    movie: movies.captainAmericaTheFirstAvenger.id,
    type: appearanceType.FIRST_APPEARED,
  },
  buckyInCaptainAmericaTheFirstAvenger: {
    id: 'buckyCaptainAmericaTheFirstAvenger',
    character: characters.bucky.id,
    movie: movies.captainAmericaTheFirstAvenger.id,
    type: appearanceType.FIRST_APPEARED,
  },

  hulkInTheIncredibleHulk: {
    id: 'hulkInTheHulk',
    character: characters.hulk.id,
    movie: movies.theIncredibleHulk.id,
    type: appearanceType.FIRST_APPEARED,
  },

  ironManInIronMan: {
    id: 'ironManInIronMan',
    character: characters.ironMan.id,
    movie: movies.ironMan.id,
    type: appearanceType.FIRST_APPEARED,
  },
  warMachineInIronMan: {
    id: 'warMachineInIronMan',
    character: characters.warMachine.id,
    movie: movies.ironMan.id,
    type: appearanceType.FIRST_APPEARED,
  },

  blackWidowInIronMan2: {
    id: 'blackWidowInIronMan2',
    character: characters.blackWidow.id,
    movie: movies.ironMan2.id,
    type: appearanceType.FIRST_APPEARED,
  },
  ironManInIronMan2: {
    id: 'ironManInIronMan2',
    character: characters.ironMan.id,
    movie: movies.ironMan2.id,
    type: appearanceType.APPEARED,
  },
  warMachineInIronMan2: {
    id: 'warMachineInIronMan2',
    character: characters.warMachine.id,
    movie: movies.ironMan2.id,
    type: appearanceType.APPEARED,
  },

  thorInThor: {
    id: 'thorInThor',
    character: characters.thor.id,
    movie: movies.thor.id,
    type: appearanceType.FIRST_APPEARED,
  },
  lokiInThor: {
    id: 'lokiInThor',
    character: characters.loki.id,
    movie: movies.thor.id,
    type: appearanceType.FIRST_APPEARED,
  },
  hawkeyeInThor: {
    id: 'hawkeyeInThor',
    character: characters.hawkeye.id,
    movie: movies.thor.id,
    type: appearanceType.FIRST_APPEARED,
  },

  ironManInTheAvengers: {
    id: 'ironManInTheAvengers',
    character: characters.ironMan.id,
    movie: movies.theAvengers.id,
    type: appearanceType.APPEARED,
  },
  hulkInTheAvengers: {
    id: 'hulkInTheAvengers',
    character: characters.hulk.id,
    movie: movies.theAvengers.id,
    type: appearanceType.APPEARED,
  },
  capInTheAvengers: {
    id: 'capInTheAvengers',
    character: characters.captainAmerica.id,
    movie: movies.theAvengers.id,
    type: appearanceType.APPEARED,
  },
  hawkeyeInTheAvengers: {
    id: 'hawkeyeInTheAvengers',
    character: characters.hawkeye.id,
    movie: movies.theAvengers.id,
    type: appearanceType.APPEARED,
  },
  blackWidowInTheAvengers: {
    id: 'blackWidowInTheAvengers',
    character: characters.blackWidow.id,
    movie: movies.theAvengers.id,
    type: appearanceType.APPEARED,
  },
  thorInTheAvengers: {
    id: 'thorInTheAvengers',
    character: characters.thor.id,
    movie: movies.theAvengers.id,
    type: appearanceType.APPEARED,
  },
  lokiInTheAvengers: {
    id: 'lokiInTheAvengers',
    character: characters.loki.id,
    movie: movies.theAvengers.id,
    type: appearanceType.APPEARED,
  },
};

export default characterAppearances;
