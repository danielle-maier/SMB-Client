const url = "https://shielded-woodland-86146.herokuapp.com/messages";

$(document).ready(function() {
  $.get(url)
    .then((messageData) => {
      let posts = messageData;
      let messages = document.getElementById("messages");
      messages.innerHTML = displayAllPosts(messageData);
    });
});

function displayPost(data,postId){
  return `<div class="card blue-grey lighten-4">
            <div class="card-content black-text">
              <span class="card-title"><i class="small material-icons">chat</i>   ${data[postId].id}</span>
              <h3>${data[postId].title}</h3>
              <p>${data[postId].messageBody}</p>
              <p>By: ${data[postId].name}</p>
              <p>Posted: ${data[postId].updatedAt}</p>
            </div>
          </div>`
}

function displayAllPosts(data) {
  let htmlCardArray = [];
  for (i = 0; i < data.length; i++) {
    htmlCardArray[i] = `<div class="card blue-grey lighten-4">
                          <div class="card-content black-text">
                            <span class="card-title"><i class="small material-icons">chat</i>   ${data[i].id}</span>
                            <h3>${data[i].title}</h3>
                            <p>${data[i].messageBody}</p>
                            <p>By: ${data[i].name}</p>
                            <p>Posted: ${data[i].updatedAt}</p>
                          </div>
                        </div>`
  }
  return htmlCardArray;
}
