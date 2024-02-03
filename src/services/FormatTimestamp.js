export const formatTimestamp = (originalTimestamp) => {

  const parsedTimestamp = new Date(originalTimestamp);
  // Adjust the parsed timestamp to the user's timezone
  const userTimezoneOffset = new Date().getTimezoneOffset(); // Get user's timezone offset in minutes
  const adjustedTimestamp = new Date(parsedTimestamp.getTime() - userTimezoneOffset * 60000);

  // Calculate time differences
  const currentTimestamp = new Date();
  const timeDifference = currentTimestamp - adjustedTimestamp;
  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);

  if (hoursDifference < 24 && adjustedTimestamp.getDate() === currentTimestamp.getDate()) {
    // If uploaded within the same day, show hours and minutes ago
    return `${hoursDifference}h ${minutesDifference % 60}m ago`;
  } else if (adjustedTimestamp.getFullYear() === currentTimestamp.getFullYear()) {
    // If uploaded within the same year, show month, day, and hour
    return `${adjustedTimestamp.toLocaleString('default', { month: 'short' })} ${adjustedTimestamp.getDate()} ${adjustedTimestamp.getHours()}:${adjustedTimestamp.getMinutes()}`;
  } else {
    // If uploaded in a different year, show year, month, day, hour, and minute
    return `${adjustedTimestamp.getFullYear()}.${String(adjustedTimestamp.getMonth() + 1).padStart(2, '0')}.${String(adjustedTimestamp.getDate()).padStart(2, '0')} ${adjustedTimestamp.getHours()}:${adjustedTimestamp.getMinutes()}`;
  }
};
