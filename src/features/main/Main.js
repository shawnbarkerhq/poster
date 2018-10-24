import React, { Component } from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  background-color: white;
  margin: 0 14rem;
  margin-top: -6rem;
  height: 50vh;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
`;

const TabbedButtonGroup = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
`;

const TabButton = styled.button`
  background-color: grey;
  padding: 2rem 7%;
`;

const RecentContainer = styled.div`
  display: flex;
  padding: 1rem;
`;
const BlogCard = styled.div`
  background-color: red;
  width: 100%;
  height: 10rem;
  margin-right: 1rem;
`;
const PhotoCard = styled.div`
  background-color: blue;
  width: 100%;
  height: 10rem;
  margin-right: 1rem;
`;
const VideoCard = styled.div`
  background-color: grey;
  width: 100%;
  height: 10rem;
`;

class Main extends Component {
  render() {
    return (
      <MainContainer>
        <TabbedButtonGroup>
          <TabButton>Home</TabButton>
          <TabButton>About</TabButton>
          <TabButton>Blog</TabButton>
          <TabButton>Gallery</TabButton>
          <TabButton>Videos</TabButton>
          <TabButton>Contact</TabButton>
        </TabbedButtonGroup>
        <RecentContainer>
          <BlogCard />
          <PhotoCard />
          <VideoCard />
        </RecentContainer>
      </MainContainer>
    );
  }
}

export default Main;
