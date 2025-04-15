import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex items-center gap-2 rounded-md bg-black/20 backdrop-blur-sm px-4 py-2 text-sm font-light text-white border border-white/10 hover:bg-white/10 transition-all duration-300",
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown className="h-4 w-4 opacity-50" />
  </DropdownMenuPrimitive.Trigger>
))
DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-white/10 bg-black/80 backdrop-blur-sm p-1 text-white shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-white/10 focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} 