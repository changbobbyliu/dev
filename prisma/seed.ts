// run by `prisma db seed`

import { PrismaClient } from "@prisma/client";

// log queries
const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  console.log("Start seeding ...");
  await Promise.all([
    prisma.user.deleteMany(),
    prisma.userSettings.deleteMany(),
    prisma.post.deleteMany(),
    prisma.userLikedPost.deleteMany(),
  ]);

  const newUser = await prisma.user.create({
    data: {
      email: `test1@gmail.com`,
      role: "ADMIN",
      userSettings: {
        create: {
          emailUpdates: true,
        },
      },
    },
    // select is more powerful than include
    // select or include, only one or the other
    include: {
      userSettings: true, // by default, it's false
    },
  });

  console.dir("newUser", newUser);

  const newPost = await prisma.post.create({
    data: {
      updatedAt: new Date(),
      title: "My first post",
      content: "Hello world",
      authorId: newUser.id,
    },
  });

  const newLikedPost = await prisma.userLikedPost.create({
    data: {
      userId: newUser.id,
      postId: newPost.id,
    },
  });

  console.log("newLikedPost", newLikedPost);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
