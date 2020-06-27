const FormatDate = (stringDate: string) => {
  var options = {year: 'numeric', month: 'long', day: 'numeric'};
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const _MS_PER_HOUR = 1000 * 60 * 60;
  const date = new Date(stringDate);
  const today = new Date();
  const utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  const utc2 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const difference = Math.floor((utc2 - utc1) / _MS_PER_DAY);

  const result =
    difference < 7
      ? difference === 1
        ? 'a day ago'
        : difference + ' days ago'
      : difference === 7
      ? 'a week ago'
      : date.toLocaleString('en-US', options);

  return result;
};

export default FormatDate;
