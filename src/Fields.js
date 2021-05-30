export default [
    {
      fieldName: 'firstName',
      label: 'First Name',
      type: 'string'
    },
    {
      fieldName: 'lastName',
      label: 'Last Name',
      type: 'string'
    },
    {
      fieldName: 'gender',
      label: 'Gender',
      type: 'boolean',
      options: [
          {
            name: 'male',
            label: 'Male'
          },
          {
            name: 'female',
            label: 'Female'
          }
      ]
    },
    {
      fieldName: 'country',
      label: 'Country',
      type: 'list',
      options: [
        { name: 'AFG', label: 'Afghanistan' },
        { name: 'AUS', label: 'Australia' },
        { name: 'BGD', label: 'Bangladesh' },
        { name: 'BEL', label: 'Belgium' },
        { name: 'CAN', label: 'Canada' },
        { name: 'CHN', label: 'China' },
        { name: 'India', label: 'India' },
        { name: 'IDN', label: 'Indonesia' },
        { name: 'ITA', label: 'Italy' },
        { name: 'KWT', label: 'Kuwait' },
        { name: 'MYS', label: 'Malaysia' },
        { name: 'NPL', label: 'Nepal' },
        { name: 'PHL', label: 'Philippines' }
      ]
    }
];
