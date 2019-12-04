

export function getAppointmentsForDay(state, day) {


const appointmentsId = state.days
    
.filter(e => e.name === day)
    
.map(e => e.appointments)
    
.reduce((acc, val) => acc.concat(val), []);

  
const appointment = [];
appointmentsId.forEach(e => {
    
// console.log(appointmentsId)
appointment.push(state.appointments[e]);
  
// console.log(appointment)
});

  
return appointment;
} 



export  function getInterview(state, interview) {
  
if(!interview) {
    
return null;
} 
  
else {

const student = interview.student;
const interviewer = state.interviewers[interview.interviewer];
const interviewObject = { student, interviewer};
    
    
    
// console.log(interviewObject)
return interviewObject;
}
}


export function getInterviewersForDay(state, day) {
  
const interviewersId = state.days
    
.filter(e => e.name === day)

.map(e => e.interviewers)

.reduce((acc, val) => acc.concat(val), []);

const interviewers = [];
//console.log(interviewers)

interviewersId.forEach(e => {


 interviewers.push(state.interviewers[e]);
//console.log(interviewers)  
});

  
return interviewers;
}

