import Head from 'next/head';
import { CardDropArea } from '../components/CardDropArea';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { GameCard } from '../components/GameCard';
import { Container } from 'react-bootstrap';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import { arrayMoveImmutable } from 'array-move';

let gameCards = [
	{
		id: 'card-1',
		name: 'Skeleton',
		text: 'A warrior made of bones, workhorse of sorcerers throughout Europe.',
		image: './images/skeleton.png',
		damage: 2,
		cost: 2
	},
	{
		id: 'card-2',
		name: 'Lesser Skeleton',
		text: 'Doer of the dirty work.',
		image: './images/skeleton2.png',
		damage: 2,
		cost: 2
	}
];

export default function Home() {
	const [state, setState] = useState({ stateGameCards: gameCards });

	function onDragEndHandler(result) {
		if (result.destination && result.source) {
			state.stateGameCards = arrayMoveImmutable(
				state.stateGameCards,
				result.source.index,
				result.destination.index
			);
			setState({ ...state });
		}
	}

	return (
		<Row>
			<Col lg={12}>
				<div>
					<h1>Cards</h1>
					<DragDropContext onDragEnd={onDragEndHandler}>
						<Droppable
							droppableId="cards"
							direction="horizontal"
							style={{ display: 'flex' }}
						>
							{(provided) => (
								<div
									style={{
										display: 'flex',
										width: '100%',
										height: '100%'
									}}
									className="cardlist"
									{...provided.droppableProps}
									ref={provided.innerRef}
								>
									{state.stateGameCards.map((card, index) => {
										return (
											<GameCard
												card={card}
												index={index}
												key={card.id}
											/>
										);
									})}
									{provided.placeholder}
								</div>
							)}
						</Droppable>
					</DragDropContext>
				</div>
			</Col>
		</Row>
	);
}
