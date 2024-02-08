import { Link, Outlet } from 'react-router-dom';
import classes from './App.module.scss';
import bagsPng from '../assets/bags.png';
import BagsSvg from '../assets/bags.svg';
import sonomaJpg from '../assets/Sonoma.jpg';
import chromaWebp from '../assets/Chroma.webp';
import { adminRoutes } from '@packages/shared/src/routes/admin';
import { shopRoutes } from '@packages/shared/src/routes/shop';

type Props = {
  msg: string;
};

export const App = ({ msg }: Props) => {
  return (
    <main className={classes.paddingContainer}>
      <p>
        Platform - <span style={{ color: 'GrayText' }}>{__PLATFORM__}</span>
      </p>
      <div>
        <img src={bagsPng} alt="bags-png" width={50} height={50} />
        {/* <img src={bagsSvg} alt="bags-svg" width={50} height={50} /> */}
        <BagsSvg width="50" height="50" stroke="blue" />
        <img src={sonomaJpg} alt="sonomaJpg" width={50} height={50} />
        <img src={chromaWebp} alt="chromaWebp" width={50} height={50} />
      </div>
      <Link to="/">
        <h1 className={classes.h1}>Hello World !!</h1>
      </Link>
      <div>msg:{msg}</div>
      <div
        style={{ display: 'flex', gap: '1em', padding: '1em', fontSize: '2em' }}
      >
        <Link to={adminRoutes.admin} style={{ color: 'green' }}>
          admin
        </Link>
        <Link to={shopRoutes.shop}>shop</Link>
      </div>
      <Outlet />
    </main>
  );
};
