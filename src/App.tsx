import React, { FC, ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from 'components/pages/index';


const App: FC<any> = (): ReactElement => {
  return (
    <Router>
      <Pages />
    </Router>
  )
}

export default App;
