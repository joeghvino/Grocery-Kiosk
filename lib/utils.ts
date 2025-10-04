import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge' //this is used to merge tailwind classes for example: "px-4 px-2" will become "px-2"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
