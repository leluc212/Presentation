import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => ({
  theme: 'base',
  themeVariables: {
    fontFamily: 'Be Vietnam Pro, sans-serif',
    fontSize: '14px',
    background: '#f6f7fb',
    primaryColor: '#eef0ff',
    primaryBorderColor: '#8f9bff',
    primaryTextColor: '#2b3245',
    secondaryColor: '#e8f7f5',
    tertiaryColor: '#ffffff',
    lineColor: '#9aa1b5',
    edgeLabelBackground: '#f6f7fb',
    clusterBkg: '#ffffff',
    clusterBorder: '#d9ddff',
    nodeBorder: '#8f9bff',
  },
}))
