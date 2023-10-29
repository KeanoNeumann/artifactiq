import { defineEventHandler } from "h3";
import { useServerStripe } from "#stripe/server";
import { getServerSession } from "#auth";

export default defineEventHandler(async (event) => {
  const stripe = await useServerStripe(event);
  const session = await getServerSession(event);

  if (!session) {
    return { status: "unauthenticated!" };
  }

  console.info("Stripe instance:", stripe);

  stripe.customers
    .create({
      email: "customer@example.com",
    })
    .then((customer) => {
      console.log(customer.id);
      return {
        version: customer.id,
      };
    })
    .catch((error) => console.error(error));
});
