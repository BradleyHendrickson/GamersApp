import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export function CardDropArea(props) {
    return(
    <Container>
        <Droppable
                className="d-flex align-items-center justify-content-center"
                droppableId={`droppableid`}
            >
                {(provided) => (
                    <div
                        className="d-flex align-items-center justify-content-center"
                        style={{
                            minHeight: '20rem'
                        }}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <h3
                            style={{
                                color: 'gainsboro',
                                margin: 'auto'
                            }}
                        >
                            Drop Cards Here
                        </h3>
                        <div
                            style={{
                                display: 'none'
                            }}
                        >
                            {provided.placeholder}
                        </div>
                    </div>
                )}
            </Droppable>                   
    </Container>
    )
}