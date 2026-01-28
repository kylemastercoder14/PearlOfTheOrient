"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUpFromLineIcon, FileQuestionIcon, MessageSquareTextIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ToolsComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the compact state after scrolling 100px
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-20 right-0 z-40">
      <Card className="p-0! rounded-none">
        <CardContent className="p-0!">
          <div className="space-y-2 p-1">
            <Button
              variant="ghost"
              className="rounded-none w-full text-xs h-14 flex flex-col"
            >
              <MessageSquareTextIcon className="size-5" />
              Messenger
            </Button>
            <Separator />
            <Link href="/survey" target="_blank">
              <Button
                variant="ghost"
                className="rounded-none w-full text-xs h-14 flex flex-col"
              >
                <FileQuestionIcon className="size-5" />
                Survey
              </Button>
            </Link>
            {isScrolled && (
              <>
                <Separator />
                <Button
                  variant="ghost"
                  className="rounded-none w-full text-xs h-14 flex flex-col"
                  onClick={scrollToTop}
                >
                  <ArrowUpFromLineIcon className="size-5" />
                  Back to Top
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
