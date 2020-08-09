const Database = require('./db')
const creatProffy = require('./creatProffy')

Database.then(async (db) => {

    proffyValue = {
        name: 'Rafael',
        avatar: 'https://avatars1.githubusercontent.com/u/39861526?s=460&u=dc28970efc6fd318d1e888eb224a36a948222b4c&v=4',
        whatsapp: '4002 8922',
        bio: 'nada aqui',
    }

    classValue = {
        subject: 1, 
        cost: "20",
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    await creatProffy(db, {proffyValue, classValue, classScheduleValues})

    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)
    //console.log(selectClassesSchedules)
})