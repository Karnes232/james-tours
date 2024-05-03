import React from "react";
import List from "./List";

const ListGroup = ({ included, whatToBring, importantInfomation }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 lg:justify-center lg:mt-10">
      <List list={included} title="What's Included" />
      <List list={whatToBring} title="What to Bring" />
      <List list={importantInfomation} title="Important Information" />
    </div>
  );
};

export default ListGroup;
