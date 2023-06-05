class PrismManager {
  init(prism) {
    prism.languages.pug = {
      "plain-text": {
        pattern:
          /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]).+/m,
        lookbehind: true,
      },
      comment: {
        pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ].+)*/m,
        lookbehind: true,
      },
      attrpug: {
        pattern: /\(([^)]+)\)/,
        inside: {
          punctuation: /[!(),]+/,
          string: /"(.*)"/,
        },
      },
      tagpug: {
        pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
        lookbehind: true,
      },
    }
  }
}

export const PRISM_MANAGER = new PrismManager()
