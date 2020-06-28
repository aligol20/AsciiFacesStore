/**
 * A function for converting the string date to relative time.
 * @param stringDate - Value comes from server, every product has a product date.
 */
const FormatDate = (stringDate: string) => {
  // For formatting the real date, we need an object as followed:
  var options = {year: 'numeric', month: 'long', day: 'numeric'};
  // Converts millisconds to day
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Gets product date from input.
  const date = new Date(stringDate);
  // Gets today date.
  const today = new Date();
  // Converts product date to milliseconds
  const utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  // Converts today date to milliseconds
  const utc2 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  // A difference between product date and today
  const difference = Math.floor((utc2 - utc1) / _MS_PER_DAY);
  const result =
    // checks if difference is lower than 7:
    difference < 7
      ? // If difference is equeal 1:
        difference === 1
        ? 'a day ago'
        : // else :
          difference + ' days ago'
      : // else if difference is equal 7:
      difference === 7
      ? 'a week ago'
      : //else if difference is greater than 7:
        date.toLocaleString('en-US', options);

  return result;
};

export default FormatDate;
