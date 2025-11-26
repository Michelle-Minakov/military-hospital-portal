
// Додавання довідки
$("#addDocBtn").on("click", function() {
  const docName = $("#newDoc").val();
  if (docName) {
    $("#docsList").append(`<li class="list-group-item">${docName}</li>`);
    $("#newDoc").val("");
  }
 
});

