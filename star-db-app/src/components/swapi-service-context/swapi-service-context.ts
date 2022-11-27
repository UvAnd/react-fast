import React from 'react';
import { swapiServiceHooks } from 'hooks/swapi-service.hooks';

const { Provider: SwapiServiceProvider, Consumer: SwapiServiceConsumer } = React.createContext(
  swapiServiceHooks,
);

export { SwapiServiceProvider, SwapiServiceConsumer };
