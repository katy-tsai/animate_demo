import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Main = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>CSS</Tab>
        <Tab>SVG</Tab>
        <Tab>CANVAS</Tab>
      </TabList>

      <TabPanel>Any content 1</TabPanel>
      <TabPanel>Any content 2</TabPanel>
      <TabPanel>Any content 3</TabPanel>
    </Tabs>
  );
};

export default Main;
