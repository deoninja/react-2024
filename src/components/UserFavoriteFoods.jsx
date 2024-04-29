import { createElement } from 'react';

export function UserFavoriteFoods() {
  return createElement(
    'section',
    null,
    <span>Favorite Foods:</span>,
    <br />,
    <ul>
      <li>Sushi</li>
      <li>Pizza</li>
      <li>Adobo</li>
    </ul>
  );
}
