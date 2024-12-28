
// import sql from "./db.js"

// const createDb = async()=>{
//     try {
        
//         await sql`CREATE TABLE IF NOT EXISTS doctor (doctor_name TEXT, doctor_id SERIAL PRIMARY KEY, doctor_age INTEGER , handling_patient TEXT)`
//         await sql`CREATE TABLE IF NOT EXISTS patient (person_name TEXT NOT NULL, person_id SERIAL PRIMARY KEY, person_age INT ,patient_disease TEXT , handling_doctor TEXT, handling_doctor_id INTEGER  ,CONSTRAINT patient_cured FOREIGN KEY (handling_doctor_id)
//         REFERENCES doctor(doctor_id)) `
//         // await sql`INSERT INTO my_table ${ sql([{ aTest: 2, bTest: 2 }]) }`
//         // await sql`INSERT INTO patient ${sql([{person_name : "Abhishek Manral" , person_age : 21 , person_id : 1 , patient_disease : "none" , handling_doctor : "Abhiman"}])}`
//         // const data = await sql`SELECT ${ sql('aTest', 'bTest') } FROM camel_case`
//         // const d1 = await sql`DROP TABLE patient`;
//         // console.log(d1)
//         // const d2 = await sql`DROP TABLE doctor`;
//         // console.log(d2)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// export default createDb