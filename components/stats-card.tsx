import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

interface StatsCardProps {
  title: string;
  icon: React.ReactNode;
  helper: string;
  value?: string;
  loading: boolean;
  className: string;
}

export default function StatsCard({
  title,
  icon,
  helper,
  value,
  loading,
  className,
}: StatsCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xs text-muted-foreground font-medium">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-xl font-cold">
          {loading ? (
            <Skeleton>
              <span className="opacity-0">0</span>
            </Skeleton>
          ) : (
            value
          )}
        </div>
        <p className="text-xs text-muted-foreground pt-1">{helper}</p>
      </CardContent>
    </Card>
  );
}
