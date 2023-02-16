import Spline from "@splinetool/react-spline";
import "./App.css";
import styled from "styled-components";
import Logo from "./assets/images/logo.svg";
import IconLaptop from "./assets/images/icon-laptop.svg";
import IconTwitter from "./assets/images/icon-twitter.svg";
import IconYouTube from "./assets/images/icon-youtube.svg";

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  margin: 0 auto;
  position: relative;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;

    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
      transform-origin: top;
    }
    @media (max-width: 800px) {
      transform: scale(0.7) translateX(600px);
    }
    @media (max-width: 600px) {
      transform: scale(0.5) translateX(-100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
    @media (max-width: 375px) {
      transform: scale(0.45) translateX(-50px);
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;

  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  h1,
  p,
  button {
    margin: 0 30px 0 100px;
  }

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    max-width: 500px;

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }

    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }

  button {
    max-width: 280px;
    height: 49px;
    background: rgba(14, 17, 41, 0.3);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 14px;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;

    font-weight: 600;
    font-size: 16px;
    font-style: normal;
    line-height: 19px;
    color: #ffffff;

    transition: all 0.25s;

    :hover {
      background: rgba(14, 17, 41, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.5);
      transform: translateY(-3px);
    }

    :active {
      background: rgba(14, 17, 41, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.5);
      transform: translateY(0px);
    }
  }

  @media (max-width: 600px) {
    h1,
    p,
    > button {
      margin: 0 0 0 450px;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  list-style: none;
  margin: 0 30px 0 100px;
  padding: 0;

  li {
    margin: 0;

    a {
      text-decoration: none;
      color: white;
      padding: 8px 20px;
      border: 1px solid rgba(255, 255, 255, 0);
      transition: all 0.3s;
      border-radius: 14px;

      :hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }
`;

const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  div {
    width: 1px;
    height: 500px;
    background: linear-gradient(
      180deg,
      #08b6f9 0%,
      #6c56ef 33.57%,
      #1306dd 65.86%,
      #aa0eb2 100%
    );
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

function App() {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/QwBYb3Ge8ARRh5Ir/scene.splinecode"
      />
      <Content>
        <Menu>
          <li>
            <img src={Logo} alt="Website Logo" />
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Download</a>
          </li>
          <li>
            <a href="/">App</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <button>Get Started</button>
          </li>
        </Menu>
        <h1>Collaborate with people</h1>
        <p>
          Bring your team together and build your community by using our
          cross-platform app that lets you collaborate via chat, voice and by
          sharing and storing unlimited media files. A world of topics is
          waiting for you. Join the private beta.
        </p>
        <button>
          <img src={IconLaptop} alt="Download for Mac"></img>Download for Mac
        </button>
      </Content>
      <Social>
        <div />
        <img src={IconTwitter} alt="Twitter" />
        <img src={IconYouTube} alt="YouTube" />
      </Social>
    </Wrapper>
  );
}

export default App;
