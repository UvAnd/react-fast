import { TItemDetails } from 'interfaces/interfaces';

interface IRecordProps {
  item?: TItemDetails;
  field: string;
  label: string;
}

export const Record = ({ item, field, label }: IRecordProps): JSX.Element => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item?.[field as keyof TItemDetails]}</span>
    </li>
  );
};

export default Record;
