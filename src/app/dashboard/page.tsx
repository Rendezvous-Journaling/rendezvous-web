"use client"
import { useEffect, useState } from "react";
import PromptApi from "../apis/PromptApi";
import { Prompt} from "../types/PromptTypes";
import { Col, Container, Row } from "react-bootstrap";
import { DashboardCard } from "../components/dashboardCard/dashboardCard";
import { UserContext, UserContextInterface } from "../context/UserProvider";
import React from "react";


export default function Page() {

  const [prompt, setPrompt] = useState<Prompt>();
  const { idToken } = React.useContext(UserContext)as UserContextInterface

  useEffect(() => {
    PromptApi.getRandomPrompt(idToken).then(data => setPrompt(data));
  }, [idToken])


  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Welcome back!</h1>
      <p>{new Date().toLocaleDateString()}</p>
      <Row className="p-5">
        <Col>
          <DashboardCard/>
          <DashboardCard/>
        </Col>
        <Col>
          <DashboardCard/>
          <DashboardCard/>
        </Col>
      </Row>



      <Container className="d-flex justify-content-xxl-evenly">
        <h1>Your Actions</h1>
        <p>See All</p>
      </Container>
      <Row className="py-2 px-5">
        <DashboardCard/>
      </Row>
      <Row className="py-2">
        <DashboardCard/>
      </Row>
      <Row className="py-2">
        <DashboardCard/>
      </Row>
          <Container>
            {prompt ? <>{prompt.content}</> : <></>}
          </Container>
    
    </div>
  )
}
