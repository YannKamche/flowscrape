"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Workflow } from "@/lib/generated/prisma";
import { WorkflowStatus } from "@/types/workflow";
import { FileTextIcon, PlayIcon } from "lucide-react";
import React from "react";

function WorkflowCard({ workflow }: { workflow: Workflow }) {
  const isDraft = workflow.status === WorkflowStatus.DRAFT;
  return (
    <Card className="border border-separate shwadow-sm rounded-lg overflow-hidden hover:shadow-md dark:shadow-primary/30">
      <CardContent>
        <div>
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
