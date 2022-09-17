import prisma from "/prisma/client";
export default async (req, res) => {
  const {
    query: { id, name },
    method,
    body,
  } = req;

  switch (method) {
    case "GET":
      const post = await prisma.posts.findMany();
      res.send(JSON.stringify(post, null, 2));
      break;
    case "POST":
      /*
            const data = pick(body, ["name", "email", "enterprise_id"])
            const new_user = await prisma.user.create({data:data})
            console.log("New User: ", new_user)
            res.send(JSON.stringify(new_user, null, 2))
            */
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
