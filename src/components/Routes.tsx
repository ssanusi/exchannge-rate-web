import React from 'react';
import styled from 'styled-components/macro';
import { Switch, Route } from 'react-router-dom';
import FriendsPage from 'pages/friends/FriendsPage';
import AboutPage from 'pages/about/AboutPage';

const Container = styled.main`
  grid-area: content;
  display: flex;
  flex: 1;
  margin: 10px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Routes = () => {
  return (
    <Container>
      {/*
        A <Switch> looks through all its children <Route> elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time you have multiple routes, but you want only one
        of them to render at a time. Once it finds the url, the route is rendered while the rest are ignored. 
      */}
      <Switch>
        {/* 
          'exact' is used here because '<Route path>' will always match the beginning of the URL, not the whole thing.
          So a <Route path="/"> will always match the URL, no matter what it is. Because of this, we typically put this <Route> last in our <Switch>. 
          Another possible solution is to use <Route exact path="/"> which DOES match the entire URL.
        */}
        <Route exact path="/">
          <FriendsPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </Container>
  );
};

export default Routes;
