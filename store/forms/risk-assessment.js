export const strict = false
export const state = () => ({
  items: {
    groupsAffected: [{id: 1, name: 'Staff Members'}, {id: 2, name: 'Members Of Public'}],
    personsAffected: ['Dave Warren', 'Jordan Wright', 'Doug Hayward', 'Gareth Hopkins', 'Gareth Hopkins2', 'Gareth Hopkins3', 'Gareth Hopkins4'],
    hazard: [
      {
        id: 1,
        group: 'access',
        title: 'Walking Suits',
        label: '[access] Walking Suits',
        controls: [
          {
            id: 1,
            title: 'control 1 for walking suits'
          },
          {
            id: 2,
            title: 'control 2 for walking suits'
          }
        ]
      },
      {
        id: 2,
        group: 'access',
        title: 'Confined Spaces',
        controls: [
          {
            id: 1,
            title: 'control 1 for confined spaces'
          },
          {
            id: 2,
            title: 'control 2 for confined spaces'
          }
        ]
      },
      {
        id: 3,
        group: 'egress',
        title: 'egressing',
        controls: [
          {
            id: 1,
            title: 'control 1 for egressing'
          },
          {
            id: 2,
            title: 'control 2 for egressing'
          }
        ]
      }
    ],
    ppe: [
      {
        name: 'Standard Hard Hat',
        value: '1',
        image: 'http://dmatthews.portal.solutionhost.co.uk/images/safety_helmet.jpg'
      },
      {
        name: 'Eye Protection',
        value: '2',
        image: 'http://dmatthews.portal.solutionhost.co.uk/images/eye_protection.jpg'
      },
      {
        name: 'Ear Protection',
        value: '3',
        image: 'http://dmatthews.portal.solutionhost.co.uk/images/noise_sign.gif'
      },
      {
        name: 'Full Face Shield',
        value: '4',
        image: 'http://dmatthews.portal.solutionhost.co.uk/images/face_shield.jpg'
      },
      {
        name: 'Dust Mask',
        value: '5',
        image: 'http://dmatthews.portal.solutionhost.co.uk/images/gas_mask.jpg'
      },
      {
        name: 'Gloves',
        value: '7',
        image: 'http://dmatthews.portal.solutionhost.co.uk/images/hand_protection.jpg'
      },
      {
        name: 'Overalls',
        value: '8',
        image: 'http://dmatthews.portal.solutionhost.co.uk/images/protective_clothin.jpg'
      },
      {
        name: 'Footwear',
        value: '9',
        image: 'http://dmatthews.portal.solutionhost.co.uk/images/protective_footwear.jpg'
      },
      {
        name: 'Safety Harness',
        value: '10',
        image: 'http://dmatthews.portal.solutionhost.co.uk/images/safety-harness.jpg'
      },
      {
        name: 'Welding Visor',
        value: '11',
        image: 'http://dmatthews.portal.solutionhost.co.uk/images/welding_mask.jpg'
      },
      {
        name: 'High Visibility Vest',
        value: '12',
        image: 'http://dmatthews.portal.solutionhost.co.uk/images/hiviz.jpg'
      }
    ],
    customPpe: [
      {
        name: 'Standard Hard Hat',
        value: '21',
        image: 'http://dmatthews.portal.solutionhost.co.uk/images/safety_helmet.jpg'
      },
      {
        name: 'Eye Protection',
        value: '22',
        image: 'http://dmatthews.portal.solutionhost.co.uk/images/eye_protection.jpg'
      },
      {
        name: 'Ear Protection',
        value: '23',
        image: 'http://dmatthews.portal.solutionhost.co.uk/images/noise_sign.gif'
      },
      {
        name: 'Full Face Shield',
        value: '24',
        image: 'http://dmatthews.portal.solutionhost.co.uk/images/face_shield.jpg'
      },
      {
        name: 'Dust Mask',
        value: '25',
        image: 'http://dmatthews.portal.solutionhost.co.uk/images/gas_mask.jpg'
      },
      {
        name: 'Gloves',
        value: '27',
        image: 'http://dmatthews.portal.solutionhost.co.uk/images/hand_protection.jpg'
      },
      {
        name: 'Overalls',
        value: '28',
        image: 'http://dmatthews.portal.solutionhost.co.uk/images/protective_clothin.jpg'
      },
      {
        name: 'Footwear',
        value: '29',
        image: 'http://dmatthews.portal.solutionhost.co.uk/images/protective_footwear.jpg'
      },
      {
        name: 'Safety Harness',
        value: '210',
        image: 'http://dmatthews.portal.solutionhost.co.uk/images/safety-harness.jpg'
      },
      {
        name: 'Welding Visor',
        value: '211',
        image: 'http://dmatthews.portal.solutionhost.co.uk/images/welding_mask.jpg'
      },
      {
        name: 'High Visibility Vest',
        value: '212',
        image: 'http://dmatthews.portal.solutionhost.co.uk/images/hiviz.jpg'
      }
    ]
  },
  model: {},
  options: {}
})

export const mutations = {
  set (state, payload) {
    state.all = payload
  }
}

export const getters = {
  // getSchema (state) {
  //   return state.schema
  // },
  getModel (state) {
    return state.model
  },
  getItems (state) {
    return state.items
  }
}
