import React, {useState, useEffect} from 'react';
import HomePresenter from '../presenter/HomePresenter'

const HomeContainer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([false, false, false]);

  useEffect(() => {
    const handleResize = () => {
    setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onClickMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const onClickMenuItem = (id) => {
    let temp = [...menuItems];
    temp[id] = !temp[id];
    setMenuItems(temp);
  }

  const props = {
    windowWidth,
    open,
    menuOpen,
    onClickMenu,
    onClickMenuItem,
    setOpen,
    menuItems
  };

  return (
    <HomePresenter {...props}/>
  )
}

export default HomeContainer;