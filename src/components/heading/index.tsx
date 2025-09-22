import type { ParentProps } from 'solid-js'

export function H1({ children, class: cls }: ParentProps & { class: string }) {
  return <h1 class={`w-fit text-3xl font-bold ${cls}`}>{children}</h1>
}

export function H2({ children }: ParentProps) {
  return (
    <h2 class='w-fit text-2xl font-bold before:content-["#"] before:mr-1 before:text-gray-800'>
      {children}
    </h2>
  )
}

export function H3({ children }: ParentProps) {
  return <h3 class='w-fit text-xl font-bold'>{children}</h3>
}
