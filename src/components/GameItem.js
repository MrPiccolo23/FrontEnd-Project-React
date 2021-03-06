import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GameImg from '../assets/images/gameImg.png';

const GameItemStyles = styled.div`
  .gameItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .gameItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .gameItem__title {
    font-size: 2.2rem;
  }
  .gameItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .gameItem__img {
      height: 350px;
    }
  }
  .gameButton {
    display: inline-block;
    font-size: 1.8rem;
    text-decoration: underline;
    margin: 2rem 0;
    color: royalblue;
  }
`;

export default function GameItem({
  img = GameImg,
  title = 'game Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  link,
}) {
  return (
    <GameItemStyles>
      <Link to="/games" className="gameItem__img">
        <img src={img} alt="game img" />
      </Link>
      <div className="gameItem__info">
        <Link to="#">
          <h3 className="gameItem__title">{title}</h3>
        </Link>
        <p className="gameItem__desc">{desc}</p>
        {link && (
          <a
            className="gameButton"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Click to play
          </a>
        )}
      </div>
    </GameItemStyles>
  );
}
