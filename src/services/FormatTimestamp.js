// TimestampService.js

export const formatTimestamp = (originalTimestamp, largeScreen) => {
  const parsedTimestamp = new Date(originalTimestamp);

  const day = String(parsedTimestamp.getDate()).padStart(2, '0');
  const month = String(parsedTimestamp.getMonth() + 1).padStart(2, '0');
  const year = String(parsedTimestamp.getFullYear());
  const hours = String(parsedTimestamp.getHours()).padStart(2, '0');
  const minutes = String(parsedTimestamp.getMinutes()).padStart(2, '0');

  if (largeScreen) {
    return `${year}.${month}.${day} ${hours}:${minutes}`;
  }
  else{
    return `${year} ${month}.${day} ${hours}H`;
  }
};
