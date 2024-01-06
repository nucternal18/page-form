import { getFormStats } from "@/actions/form";
import CreateFormButton from "@/components/create-form-button";
import FormCardSkeleton from "@/components/form-card-skeleton";
import FormCards from "@/components/form-cards";
import StatsCards from "@/components/stats-cards";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";

export default function Home() {
  return (
    <section className="container pt-4">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="text-4xl font-bold col-span-2">Your Forms</h2>
      <Separator className="my-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <CreateFormButton />
        <Suspense
          fallback={[1, 2, 3, 4].map((el) => (
            <FormCardSkeleton key={el} />
          ))}
        >
          <FormCards />
        </Suspense>
      </div>
    </section>
  );
}

async function CardStatsWrapper() {
  const stats = await getFormStats();
  return (
    <div className="flex flex-wrap justify-between mt-4">
      <StatsCards loading={false} data={stats} />
    </div>
  );
}
