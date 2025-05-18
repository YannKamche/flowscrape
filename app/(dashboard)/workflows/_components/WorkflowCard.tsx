"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Workflow } from "@/lib/generated/prisma";
import { cn } from "@/lib/utils";
import { WorkflowStatus } from "@/types/workflow";
import { FileTextIcon, PlayIcon } from "lucide-react";
import React from "react";

function WorkflowCard({ workflow }: { workflow: Workflow }) {
  // isDraft is true if the status is draft otherwise it will be false
  const isDraft = workflow.status === WorkflowStatus.DRAFT;

  //   Defines the status Color
  const statusColors = {
    [WorkflowStatus.DRAFT]: "bg-yellow-400 text-yellow-600",
    [WorkflowStatus.PUBLISHED]: "bg-primary",
  };
  return (
    <Card className="border border-separate shwadow-sm rounded-lg overflow-hidden hover:shadow-md dark:shadow-primary/30">
      <CardContent className="p-4 flex items-center justify-between h-[100px]">
        <div
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center",
            statusColors[workflow.status as WorkflowStatus],
          )}
        >
          {/* Identify whether the workflow is a draft */}
          {isDraft ? (
            <FileTextIcon className="h-5 w-5" />
          ) : (
            <PlayIcon className="h-5 w-5 text-white" />
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default WorkflowCard;
