import React from "react";
import { Divider, Table, Tag } from "antd";
import type { ColumnsType } from "antd/lib/table";

interface DataType {
  key: string;
  to: string;
  amount: number;
  fee: number;
  datetime: string;
  newBalance: number;
  status: string; // Change to string
}

const columns: ColumnsType<DataType> = [
  {
    title: "To Wallet",
    dataIndex: "to",
    key: "to",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Transaction Fee",
    dataIndex: "fee",
    key: "fee",
  },
  {
    title: "Date Time",
    dataIndex: "datetime",
    key: "datetime",
  },
  {
    title: "New Balance",
    dataIndex: "newBalance",
    key: "newBalance",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => {
      let color = "green";
      if (status === "pending") {
        color = "orange";
      } else if (status === "failed") {
        color = "red";
      }
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
  },
];

const data: DataType[] = [
  {
    key: "1",
    to: "John Brown",
    amount: 1000,
    fee: 10,
    datetime: "22-2-2022",
    newBalance: 100000,
    status: "success",
  },
  {
    key: "2",
    to: "Jim Green",
    amount: 200,
    fee: 120,
    datetime: "22-2-2022",
    newBalance: 100000,
    status: "pending",
  },
  {
    key: "3",
    to: "Joe Black",
    amount: 300,
    fee: 1,
    datetime: "22-2-2022",
    newBalance: 100000,
    status: "failed",
  },
];

const HistoryPage: React.FC = () => {
  return (
    <>
      <h1>History</h1>
      <Divider />
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default HistoryPage;
