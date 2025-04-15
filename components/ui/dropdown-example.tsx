'use client'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./dropdown"

export function DropdownExample() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Select Option</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 