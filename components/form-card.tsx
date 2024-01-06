import React from "react";
import Link from "next/link";
import { FormSchema } from "@/schema/form";
import { formatDistance } from "date-fns";
import { LuView } from "react-icons/lu";
import { FaWpforms, FaEdit } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface FormCardProps {
  form: FormSchema;
}

export default function FormCard({ form }: FormCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 justify-between text-muted-foreground font-medium">
          <span className="truncate font-bold">{form.name}</span>
          {form.published ? (
            <Badge>Published</Badge>
          ) : (
            <Badge variant={"destructive"}>Draft</Badge>
          )}
        </CardTitle>
        <CardDescription className="flex items-center justify-between text-muted-foreground text-sm">
          {formatDistance(form.createdAt as Date, new Date(), {
            addSuffix: true,
          })}
          {form.published ? (
            <span className="flex items-center gap-2">
              <LuView className="text-muted-foreground" />
              <span className="text-muted-foreground">
                {form.visits?.toLocaleString()}
              </span>
              <FaWpforms className="text-muted-foreground" />
              <span className="text-muted-foreground">
                {form.submissions?.toLocaleString()}
              </span>
            </span>
          ) : null}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[20px] truncate text-sm text-muted-foreground">
        {form.description || "No description"}
      </CardContent>
      <CardFooter>
        {form.published ? (
          <Button variant={'secondary'} asChild className="flex w-full mt-2 items-center text-md gap-4">
            <Link href={`/form/${form.id}`}>
              View submissions <BiRightArrowAlt />
            </Link>
          </Button>
        ) : (
          <Button variant={'secondary'} asChild className="flex w-full items-center mt-2 text-md gap-4">
            <Link href={`/builder/${form.id}`}>
              Edit form <FaEdit />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
