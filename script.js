const physicians = [
  { name: 'Dr. Musa', availableTimes: ['09:00', '11:00', '14:00'] },
  { name: 'Dr. Kunle', availableTimes: ['10:00', '13:00', '15:30'] },
  { name: 'Dr. Amara', availableTimes: ['08:30', '12:00', '16:00'] },
];

const symptomsDiagnosis = {
  'cough, fever, headache': { diagnosis: 'Flu', medication: 'Paracetamol' },
  'sore throat, fever': { diagnosis: 'Tonsillitis', medication: 'Amoxicillin' },
  'stomach ache, nausea, vomiting': {
    diagnosis: 'Food Poisoning',
    medication: 'Antacid',
  },
};

window.onload = function () {
  const physicianSelect = document.getElementById('physicianSelect');
  physicians.forEach((physician, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `${
      physician.name
    } (Available: ${physician.availableTimes.join(', ')})`;
    physicianSelect.appendChild(option);
  });
};

function bookAppointment() {
  const physicianIndex = document.getElementById('physicianSelect').value;
  const appointmentDate = document.getElementById('appointmentDate').value;
  const appointmentTime = document.getElementById('appointmentTime').value;

  if (!appointmentDate || !appointmentTime) {
    alert('Please select a date and time for the appointment.');
    return;
  }

  const selectedPhysician = physicians[physicianIndex];
  const receipt = `Appointment booked with ${selectedPhysician.name} on ${appointmentDate} at ${appointmentTime}.`;

  const appointmentReceipt = document.getElementById('appointmentReceipt');
  appointmentReceipt.textContent = receipt;
  appointmentReceipt.classList.remove('hidden');
}

function getDiagnosis() {
  const symptoms = document.getElementById('symptomsInput').value.toLowerCase();
  const diagnosisResult = document.getElementById('diagnosisResult');

  if (!symptoms) {
    alert('Please enter your symptoms.');
    return;
  }

  const result = Object.keys(symptomsDiagnosis).find((key) =>
    symptoms.includes(key)
  );
  if (result) {
    const diagnosis = symptomsDiagnosis[result];
    diagnosisResult.textContent = `Diagnosis: ${diagnosis.diagnosis}. Medication: ${diagnosis.medication}.`;
  } else {
    diagnosisResult.textContent =
      'No matching diagnosis found. Please consult a physician.';
  }

  diagnosisResult.classList.remove('hidden');
}
document.getElementById('menuButton').addEventListener('click', function () {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('hidden');
});
