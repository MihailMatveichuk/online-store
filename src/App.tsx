import { StyleDiv } from './style';

import LOGO from './assets/logo.png';
import Products from './components/Products';

export const App = () => {
  return (
    <>
      <StyleDiv />
      <h1>React start </h1>
      <img src={LOGO} alt="logo" width="200" height="200" />

      <Products />
    </>
  );
};
