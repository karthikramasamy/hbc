/**
 * Create PIIRecord Transaction
 * @param {org.hbc.piirecord.CreatePIIRecord} piiRecordData
 * @transaction
 */
function CreatePIIRecord(piiRecordData) {
    // 1. Get the asset registry
    return getAssetRegistry('org.hbc.piirecord.PIIRecord')
        .then(function (piiRegistry) {
            // Now add the pii record

            // 2. Get resource factory
            var factory = getFactory();
            var NS = 'org.hbc.piirecord';

            // 3. Create the Resource instance
            var hbc_patient_id = 'hbc_rec_' + Math.round(Math.random() * 1000)

            var piiRecord = factory.newResource(NS, 'PIIRecord', hbc_patient_id);
            piiRecord.hbc_patient_id = hbc_patient_id;
            piiRecord.hbc_provider_id = piiRecordData.hbc_provider_id;
            piiRecord.patient_number = piiRecordData.patient_number;
            piiRecord.ssn = piiRecordData.ssn;
            piiRecord.first_name = piiRecordData.first_name;
            piiRecord.first_name = piiRecordData.first_name;

            piiRecord.first_name = piiRecordData.first_name;
            piiRecord.last_name = piiRecordData.last_name;
            piiRecord.dob = piiRecordData.dob;
            piiRecord.address = piiRecordData.address;
            piiRecord.city = piiRecordData.city;
            piiRecord.state = piiRecordData.state;
            piiRecord.zip = piiRecordData.zip;
            piiRecord.race = piiRecordData.race;
            piiRecord.gender = piiRecordData.gender;
            piiRecord.age = piiRecordData.age;
            piiRecord.weight = piiRecordData.weight;
            piiRecord.race = piiRecordData.race;

            // 6. Emit the event PIIRecordCreated
            var event = factory.newEvent(NS, 'PIIRecordCreated');
            event.hbc_patient_id = hbc_patient_id;
            emit(event);

            return piiRegistry.addAll([piiRecord]);
        });
}


/**
 * Create PatientRecord Transaction
 * @param {org.hbc.patientrecord.CreatePatientRecord} patientRecordData
 * @transaction
 */
function CreatePatientRecord(patientRecordData) {
    // 1. Get the asset registry
    return getAssetRegistry('org.hbc.patientrecord.PatientRecord')
        .then(function (patientRecordRegistry) {
            // Now add the patient record

            // 2. Get resource factory
            var factory = getFactory();
            var NS = 'org.hbc.patientrecord';

            // 3. Create the Resource instance

            var hbc_record_id = 'hbc_rec_' + Math.round(Math.random() * 1000);

            var patientRecord = factory.newResource(NS, 'PatientRecord', hbc_record_id);
            patientRecord.hbc_record_id = hbc_record_id;
            patientRecord.hbc_patient_id = patientRecordData.hbc_patient_id;
            patientRecord.encounter_id = patientRecordData.encounter_id;    // FIXME -- should be generated?
            patientRecord.hbc_provider_id = patientRecordData.hbc_provider_id;
            patientRecord.patient_number = patientRecordData.patient_number; // FIXME -- should match with PII patient
            patientRecord.race = patientRecordData.race;
            patientRecord.gender = patientRecordData.gender;
            patientRecord.age = patientRecordData.age;
            patientRecord.weight = patientRecordData.weight;
            patientRecord.age = patientRecordData.age;
            patientRecord.admission_type_id = patientRecordData.admission_type_id;
            patientRecord.discharge_disposition_id = patientRecordData.discharge_disposition_id;
            patientRecord.admission_source_id = patientRecordData.admission_source_id;
            patientRecord.time_in_hospital = patientRecordData.time_in_hospital;
            patientRecord.payer_code = patientRecordData.payer_code;
            patientRecord.medical_specialty = patientRecordData.medical_specialty;
            patientRecord.num_lab_procedures = patientRecordData.num_lab_procedures;

            patientRecord.num_procedures = patientRecordData.num_procedures;
            patientRecord.num_medications = patientRecordData.num_medications;
            patientRecord.number_outpatient = patientRecordData.number_outpatient;
            patientRecord.number_emergency = patientRecordData.number_emergency;
            patientRecord.number_inpatient = patientRecordData.number_inpatient;
            patientRecord.diag_1 = patientRecordData.diag_1;
            patientRecord.diag_2 = patientRecordData.diag_2;
            patientRecord.diag_3 = patientRecordData.diag_3;
            patientRecord.number_diagnoses = patientRecordData.number_diagnoses;

            patientRecord.max_glu_serum = patientRecordData.max_glu_serum;
            patientRecord.A1Cresult = patientRecordData.A1Cresult;
            patientRecord.metformin = patientRecordData.metformin;
            patientRecord.repaglinide = patientRecordData.repaglinide;
            patientRecord.nateglinide = patientRecordData.nateglinide;
            patientRecord.chlorpropamide = patientRecordData.chlorpropamide;

            patientRecord.glimepiride = patientRecordData.glimepiride;
            patientRecord.acetohexamide = patientRecordData.acetohexamide;
            patientRecord.glipizide = patientRecordData.glipizide;

            patientRecord.glyburide = patientRecordData.glyburide;
            patientRecord.tolbutamide = patientRecordData.tolbutamide;
            patientRecord.pioglitazone = patientRecordData.pioglitazone;

            patientRecord.rosiglitazone = patientRecordData.rosiglitazone;
            patientRecord.acarbose = patientRecordData.acarbose;
            patientRecord.miglitol = patientRecordData.miglitol;

            patientRecord.troglitazone = patientRecordData.troglitazone;
            patientRecord.tolazamide = patientRecordData.tolazamide;
            patientRecord.examide = patientRecordData.examide;

            patientRecord.citoglipton = patientRecordData.citoglipton;
            patientRecord.insulin = patientRecordData.insulin;
            patientRecord.glyburide_metformin = patientRecordData.glyburide_metformin;

            patientRecord.glipizide_metformin = patientRecordData.glipizide_metformin;


            patientRecord.glimepiride_pioglitazone = patientRecordData.glimepiride_pioglitazone;
            patientRecord.metformin_rosiglitazone = patientRecordData.metformin_rosiglitazone;
            patientRecord.metformin_pioglitazone = patientRecordData.metformin_pioglitazone;

            patientRecord.change = patientRecordData.change;
            patientRecord.diabetesMed = patientRecordData.diabetesMed;

            patientRecord.readmitted = patientRecordData.readmitted;


            // 4. Set the relationship
            // piiRecord.flightNumber = flightData.flightNumber;

            // 5. Create a new concept using the factory & set the data in it
            // var route = factory.newConcept(NS,"Route");

            // route.origin = flightData.origin;
            // route.destination = flightData.destination;
            // route.schedule = flightData.schedule;
            // flight.route = route;
            // flight.aliasFlightNumber = [];

            // 6. Emit the event FlightCreated
            var event = factory.newEvent(NS, 'PatientRecordCreated');
            // event.flightId = flightId;
            event.hbc_record_id = hbc_record_id;
            emit(event);

            return patientRecordRegistry.addAll([patientRecord]);
        });
}

/****

 */