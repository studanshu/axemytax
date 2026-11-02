const WorkJsonData = {
  hero: {
    title: "Our Work",
    subtitle: "Tax and compliance work, told through examples.",
    disclaimer:
      "Illustrative examples — the stories below are purely hypothetical scenarios with fictional clients, made up entirely. They are not client projects, not real cases, and no client names, measured results, or prices are claimed. They show the kind of work we do, and will be replaced with real client stories as the company grows.",
  },
  cases: [
    {
      tags: ["ITR Filing", "Freelancers"],
      title: "Freelance ITR, untangled",
      company: "Illustrative example — a fictional freelance illustrator in Bengaluru",
      challenge: [
        "A freelance illustrator earned from Indian clients and overseas clients, with receipts scattered across bank statements, payment apps, and email invoices. A prior-year return had never been filed, and advance tax felt like guesswork.",
        "The challenge was not just one return: it was reconciling a messy income picture across sources and years, then setting up a routine so the next year would not look the same.",
      ],
      built: [
        "A document checklist pulled every income record into one place, bank statements were reconciled against invoices, and the return was prepared with the foreign-income schedule included. A previous-year return was filed alongside the current one, and an advance-tax calendar was drawn up for the year ahead.",
      ],
      delivered: [
        "Current-year return filed",
        "Previous-year return filed",
        "Income reconciled across all sources",
        "Advance-tax calendar for the year ahead",
        "Checklist to keep next year tidy",
      ],
      builtWith: ["Fresh ITR Filing", "Previous Years ITR Filing", "Advance tax planning"],
      relatedService: {
        name: "Fresh ITR Filing",
        route: "/services/direct-taxation/fresh-itr-filing",
      },
    },
    {
      tags: ["GST", "Online sellers"],
      title: "GST for a multi-state online seller",
      company: "Illustrative example — fictional founders of a small online home-fragrance store",
      challenge: [
        "A small online store started selling to customers in other states and suddenly faced questions it had never dealt with: whether it needed GST registration, how monthly returns worked, and whether the tax paid on packaging and raw materials could be claimed back.",
        "The founders were spending their evenings on compliance forums instead of on the business, and every new state order added a fresh doubt.",
      ],
      built: [
        "GST registration was completed, a monthly return workflow was set up with a fixed document routine, input tax credit on purchases was reconciled against supplier invoices, and the invoice format was corrected so every bill carried the details a return needs.",
      ],
      delivered: [
        "GST registration completed",
        "Monthly return workflow in place",
        "Input tax credit reconciled",
        "Invoice format corrected",
        "Return calendar for the year",
      ],
      builtWith: ["GST Registration", "GST Filing", "Input tax credit reconciliation"],
      relatedService: {
        name: "GST Filing",
        route: "/services/indirect-taxation/gst-filing",
      },
    },
    {
      tags: ["TDS", "NRI property"],
      title: "NRI property sale, TDS handled",
      company: "Illustrative example — a fictional NRI selling an inherited apartment in India",
      challenge: [
        "An NRI based abroad was selling an inherited apartment in India to a resident buyer. The buyer did not know how much tax to deduct on the purchase, the seller wanted to apply for a lower deduction, and both sides needed paperwork that would hold up afterwards — including the certificate for repatriating the proceeds.",
        "One wrong step in the sequence could have stalled the registration or left the seller unable to move the money.",
      ],
      built: [
        "The TDS position on the purchase was worked out for the buyer, a lower-deduction application was prepared, Form 16B was issued after the deduction, and the repatriation certificate set was assembled so the proceeds could move through banking channels.",
      ],
      delivered: [
        "TDS on the purchase deducted and documented",
        "Lower-deduction application prepared",
        "Form 16B issued",
        "Repatriation certificate set assembled",
        "Paperwork sequenced around registration",
      ],
      builtWith: [
        "TDS on Purchase of Property from NRI",
        "Form 16A & 16B",
        "Repatriation Certificate",
      ],
      relatedService: {
        name: "TDS on Purchase of Property from NRI",
        route: "/services/tds/purchase-of-property-from-nri",
      },
    },
  ],
  cta: {
    title: "Have a similar situation?",
    text: "Tell us where you are stuck — an unfiled return, a new registration, a property transaction — and we will help you work out the next step.",
  },
};

export default WorkJsonData;
