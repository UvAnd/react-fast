import { ITabHeadings } from '../../interfaces/todo-interfaces';
import './item-status-filter.css';

interface ITabHeadingProps {
  tabHeadings: ITabHeadings[];
  setStatusFilter(title: string): void;
  statusFilter: string;
}

type TTab =  Omit<ITabHeadings, 'name'>;

const ItemStatusFilter = ({tabHeadings, setStatusFilter, statusFilter}: ITabHeadingProps): JSX.Element => {

  return (
    <div className="btn-group">
      {tabHeadings.map(({id, title}: TTab) => {
        const tabClassName = `btn ${statusFilter ===  title ? 'btn-info' : 'btn-outline-secondary'}`;
        console.log(id);
        return (
          <button key={id} type="button" className={tabClassName} onClick={() => setStatusFilter(title)}>{title}</button>
        )
      })}
    </div>
  );
};

export default ItemStatusFilter;
