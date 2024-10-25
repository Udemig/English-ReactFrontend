// helper.js
export const companyName = "Tech Solutions Inc.";

export const introducePerson = (firstName, lastName) => {
  if (typeof firstName !== 'string' || typeof lastName !== 'string') {
   // console.error('Both firstName and lastName should be strings.');
    return;
  }
  console.log(`Person: ${firstName} ${lastName}`);
};

export const greet = (greeting, name) => {
  console.log(`${greeting}, ${name}!`);
};
