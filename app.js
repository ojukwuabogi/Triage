let patientList = [
    'Paul',
    'Jan',
    'Tri',
    'Maryam'
  ]
  //This Prompt the patient and add name //
  alert (patientList);
  const command = prompt('Welcome to the ER Triage log in Portal: Please make a choice options are::: Add, update, delete, reorder');
  function option () {
    
    if (command == 'add') {
  
      let Patient = prompt('Patient Name?');
      patientList.push(Patient);
      alert(patientList);
    }
  
  //This section Updates the list//
    if (command == 'update') {
      let Patient = prompt('Patient Name?');
      for (let i = 0; i < patientList.length; i++) {
        if (Patient == patientList[i]) {
          let NewPatient = prompt('New Patient Name??');
          patientList.splice(i, 1, NewPatient);
          alert(patientList);
        }
      }
    }
  }
  
  //Section that deletes a name from list//
  if (command == 'delete') {
    let Patient = prompt('Patient Name you want to delete?');
    for (let i = 0; i < patientList.length; i++) {
      if (Patient == patientList[i]) {
        patientList.splice(i,1);
        alert(patientList);
      }
    }
  }
  
  //Thi is the reorder list section//
  if (command === 'reorder') {
    let Patient = prompt('Patient Name to move up the list?');
    let reorderPatient = prompt(' Patient Name to move down the list?');
    index1 = patientList.indexOf(Patient);
    index2 = patientList.indexOf(reorderPatient);
    patientList[index1] = reorderPatient;
    patientList[index2] = Patient;
    alert(patientList);
    }
    
  option ();