import { rest } from 'msw';
import { routes } from '../../routes';
import { SERVER_URL } from '../../misc';

const handlers = [
  // GET /iphones with two devices
  rest.get(SERVER_URL + routes.IPHONES, (_, res, ctx) => res(
    ctx.json({
      data: [
        {
          name: 'iPhone 12 Pro',
          brand: 'Apple',
          price: '1399'
        },
        {
          name: 'iPhone 12',
          brand: 'Apple',
          price: '979'
        },
      ]
    })
  )),
  // GET /watches with no data
  rest.get(SERVER_URL + routes.WATCHES, (_, res, ctx) => res(
    ctx.json({
      data: null,
    })
  ))
];

export default handlers;
