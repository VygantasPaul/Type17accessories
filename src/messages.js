export const messagesDisplay = (message,isSuccess) => {
  const messageWrapper = document.getElementById("response-message");
  const clearMessage = () => {
    messageWrapper.innerHTML = "";
  };
  const displayMessage = (message, isSuccess) => {
    messageWrapper.innerHTML = message;
    messageWrapper.style.color = isSuccess ? "green" : "red";
  };

  displayMessage(message, isSuccess);
}