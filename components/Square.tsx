import { Player } from "../containers/Board";

type SquareProps = {
  winner: Player;
  value: string | null;
  onClick: () => void;
};

const Square = ({ winner, onClick, value }: SquareProps) => {
  if (!value) {
    return (
      <button className="square" onClick={onClick} disabled={Boolean(winner)} />
    );
  }
  return (
    <button className={`square square_${value.toLocaleLowerCase()}`} disabled>
      {value}
    </button>
  );
};

export default Square;
