const prisma = require("./common");

const seed = async () => {
  const bookObj = [
    { title: "Bread Winners" },
    { title: "Tide Pods" },
    { title: "Notebook" },
    { title: "Coal Rippers" },
    { title: "Premium Plasics" },
    { title: "Baking Guide" },
    { title: "Standing with Allen" },
    { title: "Unfolded Towels" },
    { title: "Coffee for Losers" },
    { title: "Joker Face" },
  ];
  const bookArr = [];
  for (let i = 0; i < 10; i++) {
    bookArr.push(bookObj[i]);
  }
  await prisma.book.createMany({ data: bookArr });
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
