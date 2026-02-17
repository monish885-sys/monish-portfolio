"use client";

import { Button } from "@/components/ui/button";
import { Code2, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface CEOViewToggleProps {
  isBusinessView: boolean;
  onToggle: () => void;
  className?: string;
}

export function CEOViewToggle({
  isBusinessView,
  onToggle,
  className,
}: CEOViewToggleProps) {
  return (
    <div
      className={cn(
        "inline-flex rounded-lg border border-slate-600 bg-card/60 p-1",
        className
      )}
    >
      <Button
        variant={!isBusinessView ? "default" : "ghost"}
        size="sm"
        onClick={onToggle}
        className="gap-2"
      >
        <Code2 className="h-3.5 w-3.5" />
        Technical
      </Button>
      <Button
        variant={isBusinessView ? "default" : "ghost"}
        size="sm"
        onClick={onToggle}
        className="gap-2"
      >
        <TrendingUp className="h-3.5 w-3.5" />
        Business
      </Button>
    </div>
  );
}
