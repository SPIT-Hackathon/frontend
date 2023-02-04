import React, { useContext, useState } from "react";
import styles from "../styles/Transcript.module.css";
import axios from "axios";
import dataContext from "@/hooks/DataContext/dataContext";
import authContext from "@/hooks/AuthContext/authContext";
import { Container, Tabs, Tab } from "react-bootstrap";

const transcript = () => {
  return (
    <div className="mt-2">
      <Tabs
        defaultActiveKey="tab1"
        id="uncontrolled-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="tab1" title="Study Transcripts">
          <p>Tab1</p>
        </Tab>
        <Tab eventKey="tab2" title="Create Transcripts">
          Tab2
        </Tab>
      </Tabs>
    </div>
  );
};

export default transcript;
