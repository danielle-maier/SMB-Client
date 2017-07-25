const url = "https://shielded-woodland-86146.herokuapp.com/messages";

$(document).ready(function() {
  $.get(url)
    .then((messageData) => {
      let posts = messageData;
      let messages = document.getElementById("messages");
      messages.innerHTML = displayPost(messageData);
    });
});

function displayPost(data) {
  let htmlCardArray = [];
  for (i = 0; i < data.length; i++) {
    htmlCardArray[i] = `<div class="card blue-grey lighten-4">
                        <div class="card-content black-text">
                        <span class="card-title"><i class="small material-icons">announcement</i>  ${data[i].title}</span>
                        <p>${data[i].messageBody}</p>
                        <p>By: ${data[i].name}</p>
                        <p>Posted: ${data[i].updatedAt}</p>
                        </div>
                        </div>`
  }
  return htmlCardArray;
}
