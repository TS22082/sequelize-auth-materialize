$(document).ready(function () {
  const loginForm = $("#loginForm");
  const emailInput = $("#emailInput");
  const pwInput = $("#pwInput");

  loginForm.on("submit", function (e) {
    e.preventDefault();

    const User = {
      email: emailInput.val().trim(),
      password: pwInput.val().trim(),
    };

    $.ajax({
      type: "POST",
      url: "/api/login",
      data: User,
    }).then(() => {
      window.location.replace("/members");
    });
  });
});
