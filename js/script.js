$(function() {
  // JQueryUI datepicker
  $("#admissionDate").datepicker({
    dateFormat: "dd.mm.yy"
  });

  // Додавання новини
  $("#newsForm").on("submit", function(e) {
    e.preventDefault();
    const title = $("#newsTitle").val();
    const content = $("#newsContent").val();
    $("#newsList").append(`
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${content}</p>
          </div>
        </div>
      </div>
    `);
    this.reset();
  });

  // Додавання пацієнта
  $("#patientForm").on("submit", function(e) {
    e.preventDefault();
    const name = $("#patientName").val();
    const diagnosis = $("#patientDiagnosis").val();
    const date = $("#admissionDate").val();
    $("#patientList").append(`
      <tr>
        <td>${name}</td>
        <td>${diagnosis}</td>
        <td>${date}</td>
      </tr>
    `);
    this.reset();
  });
});