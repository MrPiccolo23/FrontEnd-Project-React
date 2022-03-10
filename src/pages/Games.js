import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import GamesInfo from '../assets/data/games';
import GameItem from '../components/GameItem';

const GameStyle = styled.div`
  padding: 10rem 0;
  .games__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .games__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .games__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .games__searchBar .searchIcon {
    position: absolute;
    width: 2rem;

    right: 1rem;
  }
  .games__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .games__searchBar,
    .games__searchBar form,
    .games__searchBar input {
      width: 100%;
    }
  }
`;

export default function Games() {
  const [searchText, setSearchText] = useState('');
  const [gamesData, setGamesData] = useState(GamesInfo);
  useEffect(() => {
    if (searchText === '') return;
    setGamesData(() =>
      GamesInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setGamesData(GamesInfo);
    }
  };
  return (
    <>
      <GameStyle>
        <div className="container">
          <SectionTitle
            heading="Games page"
            subheading="Play classic arcade games"
          />
          <div className="games__searchBar">
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Games Name"
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>
          <div className="games__allItems">
            {gamesData.map((item) => (
              <GameItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </GameStyle>
    </>
  );
}
