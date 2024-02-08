import { Outlet } from 'react-router-dom';
import classes from './App.module.scss';
import { UserCard } from '@packages/shared/src/components/UserCard';
type Props = {
  msg: string;
};

export const App = ({ msg }: Props) => {
  return (
    <main className={classes.paddingContainer}>
      <h1>Admin module</h1>
      <UserCard name="Anatolii"></UserCard>
      <Outlet />
    </main>
  );
};
