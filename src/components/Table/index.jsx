import React, { useState, useEffect } from "react";
import { Table } from "antd";
const { Column } = Table;

function ResultsTable({ results }) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setData(results);
  }, [results]);

  return (
    <div>
      <Table dataSource={data}>
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column
          title="Positions"
          dataIndex="positions"
          key="positions"
          render={(positions) => (
            <span>{positions.map((pos) => pos.name).join(", ")}</span>
          )}
        />
        <Column
          title="Skills"
          dataIndex="skills"
          key="skills"
          render={(skills) => (
            <span>{skills.map((skill) => skill.name).join(", ")}</span>
          )}
        />
      </Table>
    </div>
  );
}

export default ResultsTable;
