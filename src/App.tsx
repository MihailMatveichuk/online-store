import { StyleDiv } from './style';

import LOGO from './assets/logo.png';
import { Clicker } from './Clicker';

export const App = () => {
  return (
    <>
      <StyleDiv />
      <h1>
        React start - {process.env.NODE_ENV} -- {process.env.name}
      </h1>
      <img src={LOGO} alt="logo" width="200" height="200" />
      <Clicker />
    </>
  );
};
