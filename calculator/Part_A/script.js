function validateEmail(email) {
  const regex = /^[A-Za-z0-9._%+-]+@northeastern\.edu$/;
  return regex.test(email);
}

function validateUsername(username) {
  const regex = /^[a-zA-Z0-9_]{5,20}$/;
  return regex.test(username);
}

function validatePassword(password) {
  const regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
  return regex.test(password);
}

function validateConfirmPassword(confirmPassword, password) {
  return confirmPassword === password;
}

$(document).ready(function () {
  function areAllFieldsValid() {
    const email = $("#login-form input[name='email']").val();
    const username = $("#login-form input[name='username']").val();
    const password = $("#login-form input[name='password']").val();
    const confirmPassword = $(
      "#login-form input[name='confirm_password']"
    ).val();

    return (
      validateEmail(email) &&
      validateUsername(username) &&
      validatePassword(password) &&
      validateConfirmPassword(confirmPassword, password)
    );
  }

  function toggleLoginButtonState() {
    $("#login-button").prop("disabled", !areAllFieldsValid());
  }

  $("input[name='email']").on("input", function () {
    const email = $(this).val();
    if (!email || !validateEmail(email)) {
      $("#error_email").show();
    } else {
      $("#error_email").hide();
    }
    toggleLoginButtonState();
  });

  $("input[name='username']").on("input", function () {
    const username = $(this).val();
    if (!username || !validateUsername(username)) {
      $("#error_username").show();
    } else {
      $("#error_username").hide();
    }
    toggleLoginButtonState();
  });

  $("input[name='password']").on("input", function () {
    const password = $(this).val();
    if (!password || !validatePassword(password)) {
      $("#error_password").show();
    } else {
      $("#error_password").hide();
    }
    toggleLoginButtonState();
  });

  $("input[name='confirm_password']").on("input", function () {
    const confirmPassword = $(this).val();
    const password = $("input[name='password']").val();
    if (
      !confirmPassword ||
      !validateConfirmPassword(confirmPassword, password)
    ) {
      $("#error_confirmPassword").show();
    } else {
      $("#error_confirmPassword").hide();
    }
    toggleLoginButtonState();
  });

  $("#login-form").submit(function (event) {
    event.preventDefault();

    const email = $("#login-form input[name='email']").val();
    const username = $("#login-form input[name='username']").val();
    const password = $("#login-form input[name='password']").val();
    const confirmPassword = $(
      "#login-form input[name='confirm_password']"
    ).val();

    if (!validateEmail(email)) {
      $("#error_email").show();
    }
    if (!validateUsername(username)) {
      $("#error_username").show();
    }
    if (!validatePassword(password)) {
      $("#error_password").show();
    }
    if (!validateConfirmPassword(confirmPassword, password)) {
      $("#error_confirmPassword").show();
    }

    if (
      !$("#error_email").is(":visible") &&
      !$("#error_username").is(":visible") &&
      !$("#error_password").is(":visible") &&
      !$("#error_confirmPassword").is(":visible")
    ) {
      $(
        "#error_email, #error_username, #error_password, #error_confirmPassword"
      ).hide();
      sessionStorage.setItem("usernameLog", username);
      window.location.href = "calculator.html";
    }
  });
  const storedUsername = sessionStorage.getItem("usernameLog");

  if (storedUsername) {
    $("#username-display").text(storedUsername);
  }

  function clearError(field) {
    $(`#${field}-error`).text("");
  }
  function validateNumberField(value) {
    if (isNaN(value)) {
      return "Please enter a valid number.";
    }
    if (!isFinite(value)) {
      return "Number is too large or too small.";
    }
    return "";
  }
  function displayError(field, message) {
    $(`#${field}-error`).text(message);
  }
  const performOperation = (operation) => {
    clearError("number1");
    clearError("number2");
    clearError("result");

    const n1 = parseFloat($("#number1").val());
    const n2 = parseFloat($("#number2").val());

    const validationError1 = validateNumberField(n1);
    const validationError2 = validateNumberField(n2);

    if (validationError1) {
      displayError("number1", validationError1);
    }

    if (validationError2) {
      displayError("number2", validationError2);
    }

    if (!validationError1 && !validationError2) {
      let result;

      switch (operation) {
        case "add":
          result = n1 + n2;
          break;
        case "subtract":
          result = n1 - n2;
          break;
        case "multiply":
          result = n1 * n2;
          break;
        case "divide":
          if (n2 === 0) {
            displayError("result", "Cannot divide by zero.");
          } else {
            result = n1 / n2;
          }
          break;
        default:
          displayError("result", "Invalid operation.");
          return;
      }

      if (!isNaN(result) && isFinite(result)) {
        $("#result").val(result);
      } else {
        displayError("result", "Error in calculation.");
      }
    }
  };
  function clearFields() {
    $("#number1").val("");
    $("#number2").val("");
    $("#result").val("");
  }

  $(".operation-btn").click(function () {
    const operation = $(this).data("operation");
    performOperation(operation);
  });
  $("#clear-button").click(function () {
    clearFields();
  });

  toggleLoginButtonState();
});
