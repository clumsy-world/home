import { onMount } from 'solid-js'
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-markdown'

Prism.languages.clum = {
  'define-line': {
    pattern: /^#.*$/m,
    greedy: true,
    inside: {
      'function-definition': {
        pattern: /^#\s*\w+/,
        inside: {
          'hash-symbol': /^#/,
          'function-name': /\w+$/
        }
      },
      'parameter-name': /\b\w+(?=\s*:)/,
      'arrow': /->/,
      'builtin-type': /\b(?:i8|i16|i32|i64|i128|u8|u16|u32|u64|u128|f32|f64|char|bool)\b/,
      'type': /\b[A-Z][a-zA-Z0-9]*\b/,
      'punctuation': /[,:]/,
      'string': /'(?:[^'\\]|\\.)*'/,
      'number': /\b\d+(?:\.\d+)?\b/,
    },
    alias: 'define-block'
  },
  comment: /\/\/.*/,
  string: /'(?:[^'\\]|\\.)*'/,
  keyword: /\b(?:\?|:else|:gt|:lt|:eq|=>|->|<-)\b/,
  operator: /\|>|!|@/,
  type: /\b[A-Z][a-zA-Z0-9]*\b/,
  'primitive-type': {
    pattern: /\b(?:i8|i16|i32|i64|i128|u8|u16|u32|u64|u128|f32|f64|char|bool)\b/,
    alias: 'builtin-type'
  },
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
const testCode = "# fn a: i32, b: i32 -> i32";
const highlighted = Prism.highlight(testCode, Prism.languages.clum, 'clum');
console.log('Highlighted HTML:', highlighted);