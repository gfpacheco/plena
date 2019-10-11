export default {
  index: {
    message: 'Hi! Is there anything bothering you today?',
    options: [
      {
        id: 'yes',
        message: 'Yes',
        goTo: 'one',
      },
      {
        id: 'many',
        message: 'Many',
        goTo: 'many',
      },
      {
        id: 'no',
        message: 'No',
        goTo: 'end',
      },
    ],
  },
  many: {
    message: "I see, but let's focus on one thing at a time, shall we?",
    options: [
      {
        id: 'ok',
        message: 'Ok',
        goTo: 'one',
      },
    ],
  },
  one: {
    message: 'Does it have a direct effect over you?',
    options: [
      {
        id: 'yes',
        message: 'Yes',
        goTo: 'anythingNow',
      },
      {
        id: 'no',
        message: 'No',
        goTo: 'peopleClose',
      },
    ],
  },
  peopleClose: {
    message: "Sometimes it's even worse when something is wrong with people close to us",
    options: [
      {
        id: 'right',
        message: 'Right?!',
        goTo: 'anythingNow',
      },
    ],
  },
  anythingNow: {
    message: 'Is there anything that you can do right now to make it better?',
    options: [
      {
        id: 'yes',
        message: 'Yes',
        goTo: 'quick',
      },
      {
        id: 'no',
        message: 'No',
        goTo: 'anythingLater',
      },
    ],
  },
  quick: {
    message: 'Will it take more than two minutes to do?',
    options: [
      {
        id: 'yes',
        message: 'Yes',
        goTo: 'note',
      },
      {
        id: 'no',
        message: 'No',
        goTo: 'doIt',
      },
    ],
  },
  doIt: {
    message: "Go ahead and do it! You'll feel much better after taking action on it",
    options: [
      {
        id: 'did',
        message: 'I did!',
        goTo: 'quick',
      },
      {
        id: 'no',
        message: 'Not now',
        goTo: 'note',
      },
    ],
  },
  anythingLater: {
    message: 'Is there anything that you can do in a near future to change that?',
    options: [
      {
        id: 'yes',
        message: 'Yes',
        goTo: 'note',
      },
      {
        id: 'no',
        message: 'No',
        goTo: 'impact',
      },
    ],
  },
  note: {
    message: 'Ok, take note or setup a reminder to take action on it later',
    options: [
      {
        id: 'did',
        message: 'I did',
        goTo: 'awesome',
      },
    ],
  },
  impact: {
    message:
      "Worrying about it won't be of any help. Is there anything else you can do to decrease the impact of that?",
    options: [
      {
        id: 'yes',
        message: 'Yes',
        goTo: 'quick',
      },
      {
        id: 'no',
        message: 'No',
        goTo: 'stop',
      },
    ],
  },
  stop: {
    message:
      "I'm sorry, but the only thing left to do is to stop thinking about it and focus on stuff you can take action on",
    options: [
      {
        id: 'will',
        message: 'I will',
        goTo: 'awesome',
      },
      {
        id: 'no',
        message: 'No',
        goTo: 'stop',
      },
    ],
  },
  awesome: {
    message: 'Awesome, now you have room to focus on other stuff',
    options: [
      {
        id: 'thanks',
        message: 'Thanks',
        goTo: 'else',
      },
    ],
  },
  else: {
    message: 'Is there anything else you wanna talk about?',
    options: [
      {
        id: 'yes',
        message: 'Yes',
        goTo: 'affect',
      },
      {
        id: 'many',
        message: 'Many',
        goTo: 'many',
      },
      {
        id: 'no',
        message: 'No',
        goTo: 'end',
      },
    ],
  },
  end: {
    message: "Great, let's make it a good day!",
    options: [
      {
        id: 'thanks',
        message: 'Thanks!',
      },
    ],
  },
};
