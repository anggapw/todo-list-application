import { Card, CardText, Container } from 'reactstrap'

const TaskCard = ({ task, index, removeTask, completeTask }) => {
    return (
        <Container className="mb-3">
            <Card body inverse color={task.completed ? 'success' : 'danger'}>
                <CardText>{task.title}</CardText>
                <p></p>
                <div className="Card-btn">
                    <i className="fas fa-check-circle fa-2x fa-fw" onClick={() => completeTask(index)}></i>
                    <i className="fas fa-trash-alt fa-2x fa-fw" onClick={() => removeTask(index)}></i>
                </div>
            </Card>
        </Container>
    )
}

export default TaskCard
