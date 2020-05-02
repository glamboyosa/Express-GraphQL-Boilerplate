exports.test = {
  test: () => {
    return [
      {
        name: 'your name',
        lastName: 'your last name',
        phoneNumber: 'your phone number',
      },
    ];
  },
  addUserDetails: ({ name, lastName, phoneNumber }) => {
    return {
      name,
      lastName,
      phoneNumber,
    };
  },
};
