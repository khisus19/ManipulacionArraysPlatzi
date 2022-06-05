// Some() method
const numbers = [1, 2, 3, 4];

// some() with a for loop
let result = false;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element %2 === 0) {
        result = true;
        break;
    }
}
// console.log(result);

// some() method
const result2 = numbers.some(item => item % 2 === 0);
// console.log("Result: ", result2);

// With objects
const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 2322,
        delivered: false,
    },
];

const result3 = orders.some(item => item.delivered);
// console.log("Objects: " + result3);

// Using some() for checking dates
// Using date-fns library "https://date-fns.org/"
const dates = [
    {
      startDate: new Date(2021, 1, 1, 10), //01/01/2021 10:00 am
      endDate: new Date(2021, 1, 1, 11), // 11:00 am
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15), // 03:00 pm
      endDate: new Date(2021, 1, 1, 15, 30), // 03:30 pm
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20), // 08:00 pm
      endDate: new Date(2021, 1, 1, 21), // 09:00 pm
      title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 1, 20, 30),
}

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    })
}

console.log('Is overlaping?: ', isOverlap(newAppointment));