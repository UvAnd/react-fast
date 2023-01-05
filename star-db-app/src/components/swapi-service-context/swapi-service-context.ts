import React from 'react';
import { swapiServiceUtils } from 'utils/swapi-service.utils';

const { Provider: SwapiServiceProvider, Consumer: SwapiServiceConsumer } = React.createContext(
  swapiServiceUtils,
);

export { SwapiServiceProvider, SwapiServiceConsumer };
