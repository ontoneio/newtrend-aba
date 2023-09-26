export default {
        structure: (S) =>
          S.list()
            .title("Content")
            .items([
  
              // Our singleton type has a list item with a custom child
              S.listItem()
                .title("Home Page")
                .id("homepage")
                .child(
                  // Instead of rendering a list of documents, we render a single
                  // document, specifying the `documentId` manually to ensure
                  // that we're editing the single instance of the document
                  S.document()
                    .schemaType("homepage")
                    .documentId("homepage")
                ),
  
              // Regular document types
              // S.documentTypeListItem("post").title("Blog Posts"),
            ]),
}