type Props = {
  name?: string;
};

export const UserCard = ({ name }: Props) => {
  return (
    <div style={{ background: 'violet' }}>
      <h1>UserCard</h1>
      <p>{name ?? 'user'}</p>
    </div>
  );
};
