import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  const ffh = await db.user.create({
    data: {
      username: "febrifahmi",
      first_name: "Febri Fahmi",
      last_name: "Hakim",
      email: "dummyemail@email.com",
      profpic: "",
      about: "Lorem ipsum dolor sit amet.",
      passHash: "$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u"
    }
  });
  await Promise.all(
    getPosts().map((post) => {
      const data = { user_id: ffh.id, ...post };
      return db.post.create({ data });
    })
  );
}

seed();

function getPosts() {
  return [
    {
      title: "Road worker",
      lead: `Test test`,
      body: "I never wanted to believe that my Dad was stealing from his job as a road worker. But when I got home, all the signs were there."
    },
    {
      title: "Road worker",
      lead: `Test test`,
      body: "I never wanted to believe that my Dad was stealing from his job as a road worker. But when I got home, all the signs were there."
    }
  ];
}
