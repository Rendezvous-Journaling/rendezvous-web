import { Card, Container } from "react-bootstrap";
import styles from './dashboardCard.module.css'

interface DashboardCardProps {
    title: string,
    text: string,
    image: string,
}

export const DashboardCard: React.FC<DashboardCardProps> = ( {title, text, image}) => {

    return (
        
        <Card className={`${styles.dashCard} m-3`} >
          
            <Card.Body className="d-flex align-items-center justify-content-around">
                
                <Card.Img src={image} className="p-2" style={{height : '6rem', width: '6rem'}} />
                
                <Container className="text-start">
                    <Card.Title className="fw-bold">{title}</Card.Title>
                    <Card.Text className="text-secondary">{text}</Card.Text>
                </Container>

                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#4D724D" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                </svg>
                
            </Card.Body>
           
        </Card>
            
       
    );
}