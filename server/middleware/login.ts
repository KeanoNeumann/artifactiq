// file: ~/server/middleware/auth.ts
import { getServerSession } from "#auth";

export default eventHandler(async (event) => {
  if (event.node.req.url?.startsWith("/portal")) {
    const session = await getServerSession(event);
    console.log(session);
    if (!session) {
      await sendRedirect(event, "/login", 302);
    }
  }
});
