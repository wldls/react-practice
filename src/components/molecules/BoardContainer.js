import React, { useState, useEffect } from "react";
import { getBoard } from "api/index";
import Boards from "components/atoms/Boards";

const BoardContainer = () => {
  const [board, setBoard] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await getBoard();
        setBoard(data.list);
      } catch (err) {
        console.log(err.response.data.error);
      }
    };

    loadData();
  }, []);

  if (!board) return <div>error</div>;

  return (
    <>
      {board.map(item => (
        <Boards
          key={item.id}
          name={item.title}
          bid={item.userId}
          theme={item.bgColor}
        />
      ))}
      <Boards name="create" />
    </>
  );
};

export default BoardContainer;
