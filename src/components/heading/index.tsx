import type { ParentProps } from 'solid-js'

export function H1({ children }: ParentProps) {
  return <h1 class='bg-red-200'>{children}</h1>
}
