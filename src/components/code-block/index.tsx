import { onMount } from 'solid-js'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

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
  code: string
  lang?: string
}

export function CodeBlock(props: Props) {
  let codeRef: HTMLElement

  onMount(() => {
    if (codeRef) {
      Prism.highlightElement(codeRef)
    }
  })

  return (
    <pre class={`language-${props.lang || 'clum'}`}>
      <code ref={codeRef} class={`language-${props.lang || 'clum'}`}>
        {props.code}
      </code>
    </pre>
  )
}
