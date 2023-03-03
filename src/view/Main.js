import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Main = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>css animate</Tab>
        <Tab>svg animate</Tab>
        <Tab>canvas animate</Tab>
      </TabList>

      <TabPanel>Any content 1</TabPanel>
      <TabPanel>Any content 2</TabPanel>
      <TabPanel>Any content 3</TabPanel>
    </Tabs>
  );
};

export default Main;
