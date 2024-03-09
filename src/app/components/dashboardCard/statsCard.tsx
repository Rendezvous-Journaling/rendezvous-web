import { Card } from "react-bootstrap"
import styles from './dashboardCard.module.css'

interface StatCardProps {
    amount: number,
    description: string,
    color: string
}

export const StatsCard : React.FC<StatCardProps> = ({amount, description, color}) => {

    return(
        <Card className={`${styles.statCard} mx-2 my-4 p-3`} style={{backgroundColor : color }}>
            <Card.Body className="text-center">
                <Card.Title className={`fw-bold`}>{amount}</Card.Title>
                <Card.Text className={`fw-light text-muted`}>{description}</Card.Text>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                </svg>
            </Card.Body>
        </Card>
    )
}