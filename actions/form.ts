"use server";

import prisma from "@/lib/prisma";
import { FormSchema, formSchema } from "@/schema/form";
import { currentUser } from "@clerk/nextjs";

class UserNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UserNotFoundError";
  }
}

export async function getFormStats() {
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundError("User not found");
  }

  const stats = await prisma.form.aggregate({
    where: {
      userId: user.id,
    },
    _sum: {
      visits: true,
      submissions: true,
    },
  });

  const visits = stats._sum.visits || 0;
  const submissions = stats._sum.submissions || 0;

  const submissionsRate = visits > 0 ? (submissions / visits) * 100 : 0;
  const bounceRate = 100 - submissionsRate;

  return {
    visits,
    submissions,
    submissionsRate,
    bounceRate,
  };
}

export type GetFormStats = Awaited<ReturnType<typeof getFormStats>>;

export async function createForm(data: FormSchema) {
  const valid = formSchema.safeParse(data);
  if (!valid.success) {
    throw new Error(valid.error.message);
  }

  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundError("User not found");
  }

  try {
    const form = await prisma.form.create({
      data: {
        ...data,
        userId: user.id,
      },
    });

    return form.id;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Something went wrong");
  }
}

export async function getForms() {
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundError("User not found");
  }

  const forms = await prisma.form.findMany({
    where: {
      userId: user.id,
    },
  });

  return forms;
}

export async function getForm(id: string) {
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundError("User not found");
  }

  const form = await prisma.form.findUnique({
    where: {
      id: Number(id),
    },
  });

  return form;
}
