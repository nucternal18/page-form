import { GetFormStats } from "@/actions/form";
import React from "react";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";
import StatsCard from "./stats-card";

interface StatsCardProps {
  data?: GetFormStats;
  loading: boolean;
}

export default function StatsCards({ data, loading }: StatsCardProps) {
  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Visits"
        icon={<LuView className="text-blue-600" />}
        helper="All time form visits"
        value={data?.visits.toLocaleString()}
        loading={loading}
        className="shadow-md shadow-blue-600"
      />
      <StatsCard
        title="Total Submissions"
        icon={<FaWpforms className="text-yellow-600" />}
        helper="All time form submissions"
        value={data?.submissions.toLocaleString()}
        loading={loading}
        className="shadow-md shadow-yellow-600"
      />
      <StatsCard
        title="Submissions Rate"
        icon={<HiCursorClick className="text-green-600" />}
        helper="Visits that result in a form submission"
        value={data?.submissionsRate.toLocaleString() + "%" || "0%"}
        loading={loading}
        className="shadow-md shadow-green-600"
      />
      <StatsCard
        title="Bounce Rate"
        icon={<TbArrowBounce className="text-red-600" />}
        helper="Visits that leave without a form submission"
        value={data?.bounceRate.toLocaleString() + "%" || "0%"}
        loading={loading}
        className="shadow-md shadow-red-600"
      />
    </div>
  );
}
