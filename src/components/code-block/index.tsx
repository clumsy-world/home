import { onMount } from 'solid-js'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-markdown'

Prism.languages.clum = {
  comment: /\/\/.*/,
  string: /'(?:[^'\\]|\\.)*'/,
  keyword: /\b(?:\?|:else|:gt|:lt|:eq|=>|<-)\b/,
  operator: /\|>|!|#|@/,
  function: /\b[a-z][a-z0-9-]*(?=\s*\()/,
  type: /\b[A-Z][a-zA-Z0-9]*\b/,
  number: /\b\d+(?:\.\d+)?\b/,
  punctuation: /[(),:]/,
}

type Props = {
  lang: string
  code: string
}

export function CodeBlock(props: Props) {
  let codeRef!: HTMLElement

  onMount(() => {
    Prism.highlightElement(codeRef)
  })
  return (
    <pre class={`language-${props.lang || 'clum'}`}>
      <code ref={codeRef} class={`language-${props.lang}`}>
        {props.code}
      </code>
    </pre>
  )
}
