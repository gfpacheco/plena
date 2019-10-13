export default {
  index: {
    message: 'Hi! Is there anything bothering you today?',
    options: [
      {
        message: 'Yes',
        goTo: 'one',
      },
      {
        message: 'Many',
        goTo: 'many',
      },
      {
        message: 'No',
        goTo: 'end',
      },
    ],
  },
  many: {
    message: "I see, but let's focus on one thing at a time, shall we?",
    options: [
      {
        message: 'Ok',
        goTo: 'one',
      },
    ],
  },
  one: {
    message: 'Does it affect you directly or someone else that you care about?',
    options: [
      {
        message: 'Me',
        goTo: 'anythingNow',
      },
      {
        message: 'Someone I care',
        goTo: 'peopleClose',
      },
    ],
  },
  peopleClose: {
    message:
      "Sometimes it's even worse when something is wrong with people close to us. Is there anything that you can do right now to make it better?",
    options: [
      {
        message: 'Yes',
        goTo: 'quick',
      },
      {
        message: 'No',
        goTo: 'anythingLater',
      },
    ],
  },
  anythingNow: {
    message: 'Is there anything that you can do right now to make it better?',
    options: [
      {
        message: 'Yes',
        goTo: 'quick',
      },
      {
        message: 'No',
        goTo: 'anythingLater',
      },
    ],
  },
  quick: {
    message: 'Will it take more than two minutes to do?',
    options: [
      {
        message: 'Yes',
        goTo: 'note',
      },
      {
        message: 'No',
        goTo: 'doIt',
      },
    ],
  },
  doIt: {
    message: "Go ahead and do it! You'll feel much better after taking action on it",
    options: [
      {
        message: 'I did!',
        goTo: 'awesome',
      },
      {
        message: 'Not now',
        goTo: 'note',
      },
    ],
  },
  anythingLater: {
    message: 'Is there anything that you can do in a near future to change that?',
    options: [
      {
        message: 'Yes',
        goTo: 'note',
      },
      {
        message: 'No',
        goTo: 'impact',
      },
    ],
  },
  note: {
    message: 'Ok, take note or setup a reminder to do it later',
    options: [
      {
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
        message: 'Yes',
        goTo: 'quick',
      },
      {
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
        message: 'I will',
        goTo: 'awesome',
      },
    ],
  },
  awesome: {
    message: 'Awesome, one less thing to worry about. Now you have room to focus on other stuff',
    options: [
      {
        message: 'Thanks',
        goTo: 'else',
      },
    ],
  },
  else: {
    message: 'Is there anything else you wanna talk about?',
    options: [
      {
        message: 'Yes',
        goTo: 'one',
      },
      {
        message: 'Many',
        goTo: 'many',
      },
      {
        message: 'No',
        goTo: 'end',
      },
    ],
  },
  end: {
    message: "Great, let's make it a good day!",
    options: [
      {
        message: 'Start over',
        goTo: 'index',
      },
    ],
  },
};
