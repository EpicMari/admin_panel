import moment from "moment";

// export const mountScripts = () => {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement("script");
//     script.src = "https://apis.google.com/js/api.js";
//     script.async = true;
//     script.defer = true;
//     script.onload = () => {
//       script.onload = () => {};
//       resolve();
//     };
//     script.onreadystatechange = () => {
//       if (script.readyState === "complete") script.onload();
//     };
//     document.body.appendChild(script);
//   });
// };

// export const mountScripts = () => {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement("script");
//     script.src = "https://accounts.google.com/gsi/client";
//     script.async = true;
//     script.defer = true;
//     script.onload = () => {
//       script.onload = () => {};
//       resolve();
//     };
//     script.onreadystatechange = () => {
//       if (script.readyState === "complete") script.onload();
//     };
//     document.body.appendChild(script);
//   });
// };

export const fetchEmails = async () => {
  const threadsPromisesArr = [];

  const gmailApi = window.gapi.client.gmail.users;
  const threadsList = await gmailApi.threads.list({
    userId: "me",
    maxResults: 500,
    includeSpamTrash: true,
  });

  threadsList.result.threads.forEach(({ id }) =>
    threadsPromisesArr.push(gmailApi.threads.get({ userId: "me", id }))
  );

  const threads = await Promise.all(threadsPromisesArr);

  return threads;
};

export const formatThreads = (threads) => {
  return threads.map(({ result }) => {
    const id = result.id;

    const date = moment(
      result.messages[0].payload.headers.find(
        (header) => header.name === "Date"
      ).value,
      "ddd, DD MMM YYYY"
    ).format("ddd, D MMM YYYY");

    const from = result.messages[0].payload.headers.find(
      (header) => header.name === "From"
    ).value;

    const subject = result.messages[0].payload.headers.find(
      (header) => header.name === "Subject"
    ).value;

    const messagesArr = result.messages;

    return {
      id,
      date,
      subject,
      messagesArr,
      isChecked: false,
      from,
    };
  });
};

export const countUnreadThreads = (threads) => {
  return threads.reduce((acc, curr) => {
    if (curr.result.messages[0].labelIds.includes("UNREAD")) {
      return acc + 1;
    }
    return acc;
  }, 0);
};
