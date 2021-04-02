import { Container, Row, Col } from 'reactstrap'

import TaskCard from './TaskCard'

const TaskList = ({ tasks, completeTask, removeTask, tasksRemaining }) => {
    return (
        <Container>
            <Row>
                <Col sm="12" md="4">
                    <h4 style={{ textAlign: 'center' }}>Office Boy ({tasksRemaining})</h4>
                    {tasks.map((task, index) => (
                        <TaskCard task={task} index={index} completeTask={completeTask} removeTask={removeTask} />
                    ))}
                </Col>
                <Col sm="12" md="4">
                    <h4 style={{ textAlign: 'center' }}>Security</h4>
                </Col>
                <Col sm="12" md="4">
                    <h4 style={{ textAlign: 'center' }}>Driver</h4>
                </Col>
            </Row>
        </Container>
    )
}

export default TaskList
