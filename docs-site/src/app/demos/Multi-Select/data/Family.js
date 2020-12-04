export const familyTree = [
    {
      name: "Pulse",
      id: "pulse-id",
      selected: false,
      subOptions: [
        {
          name: "Cosmo",
          id: "cosmo-id",
          subOptions: [
            {
                name: "My_pedia",
                id: "my-pedia-id",
                subOptions: [],
            },
          ],
        },
        {
          name: "Letura",
          id: "regular-id",
          subOptions: [],
        },
      ]
    },
    {
      name: "Wall Street English",
      id: "wse-id",
      selected: false,
      subOptions: [
        {
          name: "NSE",
          id: "nse-id",
          selected: false,
          subOptions: [
            {
              name: "Learning Service",
              id: 'ls-id',
              selected: false,
              subOptions: [
                {
                    name: "Digital Classroom",
                    id: 'DC-id',
                    selected: false,
                    subOptions: [],
                },
                {
                    name: "Activity Player",
                    id: 'IAP-id',
                    selected: false,
                    subOptions: [],
                },
              ],
            },
            {
              name: "Teaching Service",
              id: 'ts-id',
              selected: false,
            },
          ]
        },
        {
          name: "Marketting",
          id: 'marketting-id',
          selected: false,
          subOptions: [],
        }
      ]
    },
]
