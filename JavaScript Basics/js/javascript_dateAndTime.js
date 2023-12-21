let d;

d = new Date(); // 2023-09-08T10:03:36.081Z object

d = new Date(2021, 6, 10); // 2021-07-09T22:00:00.000Z object (MONTH starts at 0)

d = new Date("2021-07-10"); // 2021-07-10T00:00:00.000Z object

d = new Date("07/10/2021 12:30:00"); // 2021-07-10T10:30:00.000Z object

d = new Date("2021-07-10 12:30:00"); // 2021-07-09T23:30:00.000Z object

// ** KNOWN ISSUE, THE RESULT GETS OFF BY A DAY SOMETIMES - https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

d = Date.now(); // 1694213279602 number [timestamp]

console.log(d, typeof d);
