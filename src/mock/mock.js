export const Destinations = [
  {
    'id': 1,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'name': 'Munhen',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.123456789',
        'description': 'Lorem ipsum dolor sit amet'
      }
    ]
  },
  {
    'id': 2,
    'description': 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'name': 'Amsterdam',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.987654321',
        'description': 'Sed do eiusmod tempor incididunt'
      }
    ]
  },
  {
    'id': 3,
    'description': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'name': 'Washington',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.456789123',
        'description': 'Ut enim ad minim veniam'
      }
    ]
  }
];

export const OffersByType = [
  {
    'type': 'taxi',
    'offers': [
      {
        'id': 1,
        'title': 'Upgrade to a business class',
        'price': 120
      },
      {
        'id': 2,
        'title': 'Get a free ride',
        'price': 0
      }
    ]
  },
  {
    'type': 'bus',
    'offers': [
      {
        'id': 3,
        'title': 'Buy one ticket, get one free',
        'price': 50
      },
      {
        'id': 4,
        'title': 'Enjoy wifi on board',
        'price': 10
      }
    ]
  },
  {
    'type': 'train',
    'offers': [
      {
        'id': 5,
        'title': 'Save 10% with a round trip ticket',
        'price': 90
      },
      {
        'id': 6,
        'title': 'Get a complimentary snack',
        'price': 20
      }
    ]
  },
  {
    'type': 'flight',
    'offers': [
      {
        'id': 7,
        'title': 'Book now and get a free upgrade',
        'price': 200
      },
      {
        'id': 8,
        'title': 'Earn double miles with this flight',
        'price': 150
      }
    ]
  }
];

export const Points = [
  {
    'basePrice': 1100,
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': 1,
    'id': '1',
    'isFavorite': false,
    'offers': [3, 4],
    'type': 'bus'
  },
  {
    'basePrice': 1500,
    'dateFrom': '2019-07-11T12:00:00.000Z',
    'dateTo': '2019-07-12T15:00:00.000Z',
    'destination': 2,
    'id': '2',
    'isFavorite': true,
    'offers': [5, 6],
    'type': 'train'
  },
  {
    'basePrice': 2000,
    'dateFrom': '2019-07-12T16:00:00.000Z',
    'dateTo': '2019-07-13T18:00:00.000Z',
    'destination': 3,
    'id': '3',
    'isFavorite': false,
    'offers': [7, 8],
    'type': 'flight'
  }
];
