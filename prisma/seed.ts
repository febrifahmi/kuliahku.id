import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getPosts().map((post) => {
      return db.post.create({ data: post });
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