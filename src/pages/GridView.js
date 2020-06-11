import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Column } from "react-virtualized";
import "react-virtualized/styles.css";

const useFetch = url => {
  const [payload, setPayload] = useState(null);

  const fetch = async url => {
    try {
      const { data } = await axios.get(url);
      setPayload(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetch(url);
  }, []);

  return { payload };
};

const cellRenderer = ({ cellData }) => {
  return (
    <div>
      <img src={cellData} alt=""></img>
    </div>
  );
};

const GridView = () => {
  const { payload } = useFetch("https://jsonplaceholder.typicode.com/photos");
  if (!payload) {
    return <div>loading...</div>;
  }

  return (
    <Table
      width={1100}
      height={800}
      headerHeight={30}
      rowHeight={200}
      rowCount={payload.length}
      rowGetter={({ index }) => payload[index]}
      overscanRowCount={10}
      style={{ textAlign: "center" }}
    >
      <Column label="index" dataKey="id" width={100} />
      <Column
        label="title"
        dataKey="title"
        width={300}
        style={{ textAlign: "left" }}
      />
      <Column
        label="url"
        dataKey="url"
        width={500}
        style={{ textAlign: "left" }}
      />
      <Column
        label="img"
        dataKey="thumbnailUrl"
        width={200}
        style={{ textAlign: "left" }}
        cellRenderer={cellRenderer}
      />
    </Table>
  );
};

export default GridView;
