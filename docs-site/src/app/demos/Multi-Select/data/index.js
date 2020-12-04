export const toppingOptions = [
    {
      name: "Pepperoni",
      id: "pepperoni-id",
      subOptions: [
        {
          name: "Spicy",
          id: "spicy-id",
          subOptions: [],
          selected: false,
        },
        {
          name: "Regular",
          id: "regular-id",
          subOptions: [],
          // selected: false,
        },
        {
          name: "Semi Spicy",
          id: "semi-id",
          subOptions: [],
          // selected: false,
        },
        {
          name: "Full Spicy",
          id: "full-id",
          subOptions: [],
          // selected: false,
        }
      ]
    },
    {
      name: "Chicken",
      id: "chicken-id",
      // selected: false,
      subOptions: [
        {
          name: "Buffalo",
          id: "buffalo-id",
          // selected: false,
          subOptions: [
            {
              name: "Mild",
              id: 'mild-id',
              // selected: false,
              subOptions: [],
            },
            {
              name: "Hot",
              id: 'hot-id',
              // selected: false,
              subOptions: [
                {
                  name: 'Jalapeño',
                  id: 'jalapeno-id',
                  // selected: false,
                  subOptions: [
                    {
                      name: 'DeepNest-1',
                      id: 'jalapeno-id-1',
                      // selected: false,
                      subOptions: []
                    },
                    {
                      name: 'DeepNest-2',
                      id: 'jalapeno-id-2',
                      // selected: false,
                      subOptions: []
                    },
                  ]
                },
                {
                  name: 'Cayenne',
                  id: 'cayenne-id',
                  // selected: false,
                  subOptions: []
                }
              ],
            },
          ]
        },
        {
          name: "BBQ",
          // selected: false,
          id: 'bbq-id',
          subOptions: [],
        }
      ]
    },
    {
      name: "Spinach",
      id: "Veg-id",
      // selected: false,
      subOptions: []
    },
    {
      name: "Item4",
      id: "item-4-id",
      // selected: true,
      subOptions: []
    },
    {
      name: "Item5",
      id: "item-5-id",
      // selected: false,
      subOptions: []
    }
]
