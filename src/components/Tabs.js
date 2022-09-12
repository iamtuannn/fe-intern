import React from "react";
import { Tabs as Tab } from "antd";
import Default from "./Default";
import DefaultWithMemo from "./DefaultWithMemo";
import UseMemo from "./UseMemo";
import UseMemoV2 from "./UseMemo.v2";
import UseCallback from "./UseCallback";
import UseCallbackV2 from "./UseCallback.v2";
export default function Tabs() {
  const activeKey = window.location.search?.slice(-1) || "1" ;
  console.log(activeKey);
  return (
    <Tab
      defaultActiveKey={activeKey}
      items={[
        {
          label: `Default`,
          key: "1",
          children: <Default />,
        },
        {
          label: `Tab 2`,
          key: "2",
          children: <DefaultWithMemo />,
        },
        {
          label: `Tab 3`,
          key: "3",
          children: <UseMemo />,
        },
        {
          label: `Tab 4`,
          key: "4",
          children: <UseMemoV2 />,
        },
        {
          label: `Tab 5`,
          key: "5",
          children: <UseCallback />,
        },
        {
          label: `Tab 6`,
          key: "6",
          children: <UseCallbackV2 />,
        },
      ]}
    />
  );
}
