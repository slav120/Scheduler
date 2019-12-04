
import React from 'react';

import 'components/Application.scss';

import DayList from 'components/DayList';

import Appointment from 'components/Appointment';

import { getAppointmentsForDay, getInterview, getInterviewersForDay } from '../helpers/selectors';

import useApplicationData from 'hooks/useApplicationData';




// const appointments = [
//   {
//     id: 1,
//     time: "12pm",
//   },
//   {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: {
//         id: 1,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   {
//     id: 3,
//     time: "2pm",
//     interview: {
//       student: "Beth Midller",
//       interviewer: {
//         id: 3,
//         name: "Mildred Nazir",
//         avatar: "https://i.imgur.com/T2WwVfS.png",
//       }
//     }
//   },
//   {
//     id: 4,
//     time: "3pm",
//   },
//   {
//     id: 5,
//     time: "4pm",
//     interview: {
//       student: "Janett MacGiver",
//       interviewer: {
//         id: 5,
//         name: "Sven Jones",
//         avatar: "https://i.imgur.com/twYrpay.jpg",
//       }
//     }
//   }
// ];


export default function Application() {
	
const { state, setDay, bookInterview, cancelInterview, getSpotsForDay } = useApplicationData();

	
return (
		
		
<main className="layout">
<section className="sidebar">
				
<img className="sidebar--centered" src="images/logo.png" alt="Interview Scheduler" />
<hr className="sidebar__separator sidebar--centered" />

<nav className="sidebar__menu">

<DayList
 days={state.days}
 day={state.day}
 setDay={setDay}
 appointments={state.appointments}
 getSpotsForDay={getSpotsForDay}
 selectedDay={state.day}
/>
				
</nav>
				

<img className="sidebar__lhl sidebar--centered" src="images/lhl.png" alt="Lighthouse Labs" />
</section>

<section className="schedule">
				
{getAppointmentsForDay(state, state.day).map((appointment) => {
const interviewers = getInterviewersForDay(state, state.day);
const interview = getInterview(state, appointment.interview);
					
return (
						
<Appointment
 key={appointment.id}
 id={appointment.id}
 time={appointment.time}
 interview={interview}
 interviewers={interviewers}
 bookInterview={bookInterview}
 appointments={state.appointments}
 cancelInterview={cancelInterview}
 days={state.days}
/>
					
);})}
				
<Appointment key="last" time="5pm" />
</section>
</main>
	
);}