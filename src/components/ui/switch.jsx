"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const Switch =
   React.forwardRef <
   React.ElementRef <
   typeof SwitchPrimitive.Root >
   (({ className, thumbClassName, ...props }, ref) => {
      return (
         <SwitchPrimitive.Root
            ref={ref}
            data-slot="switch"
            className={cn(
               // Layout
               "group relative inline-flex h-5 w-9 shrink-0 items-center rounded-full border",
               // Base colors
               "bg-input data-[state=checked]:bg-primary border-transparent",
               "dark:data-[state=unchecked]:bg-input/80",
               // Transitions/interaction
               "transition-colors duration-200 ease-out",
               "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring",
               "disabled:cursor-not-allowed disabled:opacity-50",
               // High contrast (optional, harmless if not using forced-colors)
               "forced-colors:outline forced-colors:outline-1 forced-colors:outline-[CanvasText]",
               className,
            )}
            {...props}
         >
            <SwitchPrimitive.Thumb
               data-slot="switch-thumb"
               className={cn(
                  // Size & shape
                  "pointer-events-none block size-4 rounded-full shadow",
                  // Colors
                  "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground",
                  // Motion
                  "will-change-transform transition-transform duration-200 ease-out motion-reduce:transition-none",
                  // Positioning (LTR)
                  "translate-x-0 data-[state=checked]:translate-x-[calc(100%-2px)]",
                  // RTL correction
                  "rtl:data-[state=checked]:-translate-x-[calc(100%-2px)] rtl:translate-x-0",
                  // Press feedback (applies when Root is active)
                  "group-active:scale-95",
                  thumbClassName,
               )}
            />
         </SwitchPrimitive.Root>
      );
   });
Switch.displayName = "Switch";

export { Switch };
