import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { Draggable } from 'react-beautiful-dnd';

export function GameCard(props) {
	return (
		<Draggable
			key={props.card.id}
			draggableId={props.card.id}
			index={props.index}
		>
			{(provided, snapshot) => (
				<Card
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					className="dontselect"
				>
					<Card.Body
						className="font-face-maragsa"
						style={{ width: '20rem' }}
					>
						<Card.Title
							style={{
								textAlign: 'center',
								fontSize: '40px'
							}}
						>
							{props.card.name}
						</Card.Title>
						<Card.Img src={props.card.image} />
						<Card.Text
							className="noselect"
							style={{
								textAlign: 'center',
								fontSize: '20px',
								marginTop: '20px'
							}}
						>
							{props.card.text}
						</Card.Text>
					</Card.Body>
					<Card.Footer className="font-face-maragsa">
						<Row>
							<Col>
								<h1 style={{ fontSize: '60px' }}>
									{props.card.damage}
								</h1>
							</Col>
							<Col>
								<h1
									style={{ fontSize: '60px' }}
									className="float-right"
								>
									{props.card.cost}
								</h1>
							</Col>
						</Row>
					</Card.Footer>
				</Card>
			)}
		</Draggable>
	);
}
