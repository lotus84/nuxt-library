export default defineEventHandler(() => {
  return [
    {
      id: 1,
      email: "member@library.com",
      firstName: "Anna",
      lastName: "Petrova",
      image: "https://placekitten.com/200/200",
      username: "member1",
      role: "member",
    },
    {
      id: 2,
      email: "librarian@library.com",
      firstName: "Ivan",
      lastName: "Sidorov",
      image: "https://placekitten.com/300/300",
      username: "librarian1",
      role: "librarian",
    },
  ];
});
