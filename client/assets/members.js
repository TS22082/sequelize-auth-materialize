$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "/api/user_data",
  }).then((user) => $("#userId").text(`User id: ${user.id}`));
});
