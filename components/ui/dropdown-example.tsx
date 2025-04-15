'use client'

import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./dropdown"

export function DropdownExample() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Navigation</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href="/" className="w-full">
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/platform" className="w-full">
            Platform
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/about" className="w-full">
            About
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 