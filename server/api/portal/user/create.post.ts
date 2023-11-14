import crypto from "crypto";
import { PrismaClient } from "@prisma/client";
// import { getServerSession } from "#auth";

export default defineEventHandler(async (event) => {
  //   const session = await getServerSession(event);
  //   if (!session) {
  //     return { status: "unauthenticated!" };
  //   }

  const prisma = new PrismaClient();
  const body = await readBody(event);

  const hash = crypto.createHash("sha256", body.password).digest("hex");

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: hash,
    },
  });

  return user;
});
