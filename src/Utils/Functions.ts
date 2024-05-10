

const ValidateRegex = (text: string, regex: RegExp): boolean => regex.test(text);

const getDate = () => {
  const today = new Date();
  let day = String(today.getDate()).padStart(2, '0');
  let month = String(today.getMonth() + 1).padStart(2, '0');
  let year = today.getFullYear();

  return month + '/' + day + '/' + year;
}

const getTime = () => {
  const today = new Date();
  let hour = String(today.getHours()).padStart(2, '0');
  let minute = String(today.getMinutes() + 1).padStart(2, '0');

  return hour + ':' + minute;
}


export { ValidateRegex, getDate, getTime }