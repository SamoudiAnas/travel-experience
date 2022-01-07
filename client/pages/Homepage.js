import styled from "styled-components";
import Navbar from "../components/Navbar";
import Post from "../components/Post";

function Homepage() {
  return (
    <Wrapper>
      <Navbar />

      <div className="responsive_container layout">
        <div className=" hot_places">
          <div className="section_title">
            <img src="./assets/images/hot.svg" alt="" />
            <h3>Hot Places</h3>
          </div>
          <Post />
        </div>
        <div>
          <div className="section_title">
            <img src="./assets/images/hot.svg" alt="" />
            <h3>Top Destinations</h3>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Homepage;

const Wrapper = styled.div`
  .layout {
    display: grid;
    grid-template-columns: 5fr 2fr;
    align-items: baseline;
    gap: 4rem;
    padding: ${(props) => props.theme.mobilePadding};

    @media screen and (min-width: 768px) {
      padding: ${(props) => props.theme.desktopPadding};
    }
  }

  .section_title {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;
