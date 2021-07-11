import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from 'reactjs-popup';
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

class EventComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			events: [],
		};
	}

	componentDidMount() {
		fetch('https://localhost:44375/api/events/')
			.then((res) => res.json())
			.then((result) => {
				this.setState({ events: result });
			});
	}
	render() {
		return (
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h2>Event</h2>
					</div>
				</div>

				<div class="row">
					<table class="table">
						<thead>
							<tr>
								<th>Name</th>
								<th>Description</th>
								<th>Timezone</th>
								<th>StartDate</th>
								<th>EndDate</th>
							</tr>
						</thead>
						<tbody>
							{this.state.events.map((events) => (
								<tr key={events.eventId}>
									<td>{events.eventName}</td>
									<td>{events.eventDescription}</td>
									<td>{events.eventTimezone}</td>
									<td>{events.startDate}</td>
									<td>{events.endDate}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

const element = <EventComponent></EventComponent>;
ReactDOM.render(element, document.getElementById('root'));
