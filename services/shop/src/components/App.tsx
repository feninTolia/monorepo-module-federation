import { Link, Outlet } from 'react-router-dom';
import classes from './App.module.scss';
import { shopRoutes } from '@packages/shared/src/routes/shop';

type Props = {
  msg: string;
};

export const App = ({ msg }: Props) => {
  return (
    <main className={classes.paddingContainer}>
      <h1> Shop n module</h1>
      <p>{msg}</p>
      <Link to={shopRoutes.phones}>Phones</Link>
      <Outlet />
    </main>
  );
};
