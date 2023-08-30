export default defineEventHandler(() => {
  return [
    {
      id: 1,
      email: "member@library.com",
      firstName: "Юля",
      lastName: "Петрова",
      image: "https://placekitten.com/200/200",
      role: "member",
    },
    {
      id: 2,
      email: "librarian@library.com",
      firstName: "Владимир",
      lastName: "Сидоров",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/76/Arcimboldo_Librarian_Stokholm.jpg",
      role: "librarian",
    },
  ];
});
