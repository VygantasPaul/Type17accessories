export const formattedDateShow = (accessory) => {
  const unixTimestamp = accessory.createdAt; 
  const date = new Date(unixTimestamp * 1000); 
  const formattedDate = date.toLocaleString(); 
  const dateformat = formattedDate.split(',');
  return dateformat[0];
}