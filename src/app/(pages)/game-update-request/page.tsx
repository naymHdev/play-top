// app/game-update-request/page.tsx

type PageProps = {
  searchParams: {
    id?: string;
    title?: string;
  };
};

const GameUpdateRequestPage = ({ searchParams }: PageProps) => {
  const { id, title } = searchParams;

  return (
    <div>
      <h1 className="text-white">Edit Game: {title}</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default GameUpdateRequestPage;
