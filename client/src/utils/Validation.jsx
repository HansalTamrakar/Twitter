function ValidateEmailAndPassword(email, password) {
  const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  const passValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/.test(
    password
  );
  if (!emailValid) {
    return "Email is not valid";
  }
  if (!passValid) {
    return "Password is not valid";
  }
}
export default ValidateEmailAndPassword;
