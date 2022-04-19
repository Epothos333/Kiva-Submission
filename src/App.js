import React from 'react';
import { useSelector } from 'react-redux';
import { Breadcrumbs } from "./components/Breadcrumbs";
import { Header } from "./components/Header";
import { MediaCardContainer } from "./components/MediaCardContainer";
import './components/style.css';

function App() {
  const loading = useSelector(state => state.loans.loading)
  return (
    <div className="App" style={{visibility: loading ? 'hidden' : 'visible'}}>
      <div className="Flex-Column J-F-S A-C">
      <Header />
        <div className="Inner-Content Full-Width">
          <Breadcrumbs />
          <MediaCardContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
