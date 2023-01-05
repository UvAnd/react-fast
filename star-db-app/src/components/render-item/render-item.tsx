import { TItemDetails, TItemDetailsArray } from 'interfaces/interfaces';
import { ReactNode } from 'react';

interface IRenderItem {
  list: TItemDetailsArray;
  onItemSelected(id: number): void;
  renderItem(list: TItemDetails): ReactNode;
}

const RenderItem = ({ list, onItemSelected, renderItem }: IRenderItem): JSX.Element => {
  return (
    <>
      {list.map((item: TItemDetails) => {
        const { id } = item;
        const label = renderItem(item);
        return (
          <li key={id} className="list-group-item">
            <button type="button" onClick={() => onItemSelected(id)}>
              {label}
            </button>
          </li>
        );
      })}
    </>
  );
};

export default RenderItem;
