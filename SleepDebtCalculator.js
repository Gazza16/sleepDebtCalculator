
const getSleepHours = (day) => {
// The returned values on this function are the number of hours
// that were actually slept


  if (day === 'Monday') {
    return 8;
  } else if (day === 'Tuesday') {
    return 8;
  } else if (day === 'Wednesday') {
    return 7;
  } else if (day === 'Thursday') {
    return 9;
  } else if (day === 'Friday') {
    return 8;
  } else if (day === 'Saturday') {
    return 8;
  } else if (day === 'Sunday') {
    return 5;
  }
}

const getActualSleepHours = () =>
getSleepHours('Monday') +
getSleepHours('Tuesday') +
getSleepHours('Wednesday') +
getSleepHours('Thursday') +
getSleepHours('Friday') +
getSleepHours('Saturday') +
getSleepHours('Sunday') ;


const getIdealSleepHours = () => {
  const idealHours = 8
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
   console.log('User go the perfect amount of sleep');
 } else if (actualSleepHours > idealSleepHours) {
   console.log('User got more sleep than needed');
 } else {
   console.log(`You got ${idealSleepHours - actualSleepHours} hour(s) less sleep than you needed this week.`);
 }
}

console.log(calculateSleepDebt(5))
