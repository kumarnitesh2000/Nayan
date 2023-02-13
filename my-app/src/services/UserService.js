const URL = "";
export async function getAllUsers() {
  try {
    const response = await fetch(URL + "/api/events");
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function createUser(event) {
  console.log(event);
  var myHeaders = new Headers();
  var formdata = new FormData();

  formdata.append("image", event.image, event.image.name);
  formdata.append("event", event.event);
  formdata.append("eventDescription", event.eventDescription);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
  };
  const response = await fetch(URL + "/api/event", requestOptions);
  return await response.json();
}
