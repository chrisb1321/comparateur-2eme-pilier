/// <reference types="vite/client" />

declare module "*.css"

declare module "*.html?raw" {
  const content: string
  export default content
}

interface ImportMetaEnv {
  readonly VITE_LEAD_WEBHOOK?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
