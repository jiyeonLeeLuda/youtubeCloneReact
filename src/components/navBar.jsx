import React, { useRef } from 'react';
import styles from './navBar.module.css';

const NavBar = (props) => {
  const { onClickLogo, onChangeSearch } = props;
  const inputRef = useRef();
  const onClickSearch = () => {
    const keyword = inputRef.current.value;
    onChangeSearch(keyword);
  };
  return (
    <div className={styles.nav}>
      <img
        src='img/YouTube_Logo_2017.png'
        alt='youtube'
        className={styles.logo}
        onClick={onClickLogo}
      />
      <input ref={inputRef} type='text' className={styles.searchInput} />
      <button
        className={styles.searchButton}
        type='button'
        onClick={onClickSearch}
      >
        <i className='fas fa-search'></i>
      </button>
    </div>
  );
};

export default NavBar;
