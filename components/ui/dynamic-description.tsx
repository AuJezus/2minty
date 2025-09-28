"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

export function DynamicDescription({ description }: { description: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedDescription =
    description.slice(0, description.indexOf(".")) + "...";

  return (
    <div>
      <Typography as="p" variant="base" className="hidden md:block">
        {description}
      </Typography>

      <div className="md:hidden">
        <Typography
          as="p"
          variant="base"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? description : truncatedDescription}
        </Typography>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary-foreground/70 hover:text-primary-foreground mt-2 h-auto p-0 text-sm"
        >
          {isExpanded ? "Mažiau" : "Daugiau"}
        </Button>
      </div>
    </div>
  );
}
