export const fetchQuery =  `{
  lend {
    loans(limit: 12, offset: 0) {
      values {
        id
        name
        loanAmount
        loanFundraisingInfo {
          fundedAmount
        }
        image {
          url(customSize: "w480h300")
        }
        whySpecial
      }
    }
  }
}`