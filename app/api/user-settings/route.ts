import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const user = await currentUser();

  // If the user is not logged in, redirect them to the sign-in page
  if (!user) {
    redirect("/sign-in");
  }

  // Fetch the user settings
  let userSetttings = await prisma.userSettings.findUnique({
    where: {
      userId: user.id,
    },
  });

  // If the user settings don't exist, create them
  if (!userSetttings) {
    userSetttings = await prisma.userSettings.create({
      data: {
        userId: user.id,
        currency: "USD",
      },
    });
  }

  // Revalidate the home page that uses the currency
  revalidatePath("/");
  return Response.json(userSetttings);

}