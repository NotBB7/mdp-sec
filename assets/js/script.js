function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const strengthIndicator = document.getElementById("passwordStrength");
  
    // Vérification de la force du mot de passe
    let strength = 0;
    if (password.match(/[a-z]/)) {
      strength += 1;
    }
    if (password.match(/[A-Z]/)) {
      strength += 1;
    }
    if (password.match(/[0-9]/)) {
      strength += 1;
    }
    if (password.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/)) {
      strength += 1;
    }
  
    // Affichage de la force du mot de passe
    switch (strength) {
      case 0:
      case 1:
        strengthIndicator.textContent = "Dangereux";
        strengthIndicator.classList.remove("text-success", "text-warning");
        strengthIndicator.classList.add("text-danger");
        break;
      case 2:
        strengthIndicator.textContent = "Moyen";
        strengthIndicator.classList.remove("text-success", "text-danger");
        strengthIndicator.classList.add("text-warning");
        break;
      case 3:
        strengthIndicator.textContent = "Sécurisé";
        strengthIndicator.classList.remove("text-danger", "text-warning");
        strengthIndicator.classList.add("text-success");
        break;
      case 4:
        strengthIndicator.textContent = "Très sécurisé";
        strengthIndicator.classList.remove("text-danger", "text-warning");
        strengthIndicator.classList.add("text-success");
        break;
      default:
        strengthIndicator.textContent = "";
        break;
    }
  }
  