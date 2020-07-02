export function scrollBottom(id) {
  var elmnt = document.getElementById(id);
  elmnt.scrollTop = elmnt.scrollHeight;
}

export function getInitials(firstName, lastName) {
  return firstName.split("")[0] + lastName.split("")[0];
}
