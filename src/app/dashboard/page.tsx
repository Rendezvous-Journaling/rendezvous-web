"use client"
import { useEffect, useState } from "react";
import PromptApi from "../apis/PromptApi";
import { Prompt} from "../types/PromptTypes";
import { Card, Col, Container, Row } from "react-bootstrap";
import { DashboardCard } from "../components/dashboardCard/dashboardCard";
import { UserContext, UserContextInterface } from "../context/UserProvider";
import React from "react";
import { Entry } from "../types/EntryTypes";
import EntryApi from "../apis/EntryApi";
import { StatsCard } from "../components/dashboardCard/statsCard";


export default function Page() {

  const [prompt, setPrompt] = useState<Prompt>();
  const [entries, setEntries] = useState<Entry[]>();
  const { idToken } = React.useContext(UserContext)as UserContextInterface

  useEffect(() => {
    PromptApi.getRandomPrompt(idToken).then(data => setPrompt(data));
    EntryApi.getAllEntries(idToken).then(data => setEntries(data));
  }, [idToken])


  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Welcome back!</h1>
      <p>{new Date().toLocaleDateString()}</p>

      <Container>
        <Card style={{border : "none",}}>
          <Card.Body className="d-flex align-items-center justify-content-between">
            <Card.Title className="px-2 text-muted">Check out today's prompt!</Card.Title>

            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#4D724D" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
            </svg>

          </Card.Body>
        </Card>
      </Container>
     
         
        <Container fluid className="bg-light p-3 mt-5">

        <Row className="py-5 mx-5">
          <Container className="d-flex justify-content-between align-items-center">
            <h1 className="fw-light">your stats.</h1>
            <p className="fw-light">SEE ALL</p>
          </Container>
          <Col>
            <StatsCard amount={entries ? entries.length : 0} description={"Entries written"} color="#d8e9d8"/>
            <StatsCard amount={entries ? entries.length : 0} description={"Entries written"} color="#AEC6CF"/>
          </Col>
          <Col>
            <StatsCard amount={entries ? entries.length : 0} description={"Entries written"} color="#F7CAC9"/>
            <StatsCard amount={entries ? entries.length : 0} description={"Entries written"} color="#DCBAA9"/>
          </Col>
        </Row>

        </Container>

            
        


      <Container className="py-5">
        <Container className="d-flex justify-content-between align-items-center">
          <h1 className="fw-light">your actions.</h1>
          <p className="fw-light">SEE ALL</p>
        </Container>
        <DashboardCard title={"PROMPTS"} text={"Feel like reflecting today?"} image={"https://png.pngtree.com/png-clipart/20210905/original/pngtree-human-brain-thinking-imagination-line-drawing-art-png-image_6700429.jpg"}/>
        <DashboardCard title={"ENTRIES"} text={"Need to look back?"} image={"https://png.pngtree.com/png-clipart/20211116/original/pngtree-superwoman-blonde-cartoon-hero-png-image_6935880.png"}/>
        {/* <DashboardCard title={"FRIENDS"} text={"Find more connections"} image={"https://png.pngtree.com/png-clipart/20230824/original/pngtree-remote-work-online-help-picture-image_8413895.png"}/> */}
      </Container>


      <Container>
        {prompt ? <>{prompt.content}</> : <></>}
      </Container>
    
    </div>
  )
}
