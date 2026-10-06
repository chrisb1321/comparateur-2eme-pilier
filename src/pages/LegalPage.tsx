import legalHtml from "../content/legal.html?raw"

export const LegalPage = () => <main dangerouslySetInnerHTML={{ __html: legalHtml }} />
