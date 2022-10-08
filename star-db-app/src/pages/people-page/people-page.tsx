import React, { useState } from 'react';
import ItemList from '../../components/item-list';
import PersonDetails from '../../components/person-details';


const PeoplePage = ():JSX.Element => {
  const [selectedPerson, setSelectedPerson] = useState<number | null>(null);

  const onOpenPerson = (id: number) => {
    setSelectedPerson(id);
  }

  return (
    <div className="row mb2">
      <div className="col-md-6">
        <ItemList onOpenPerson={onOpenPerson} />
      </div>
      <div className="col-md-6">
        <PersonDetails selectedPerson={selectedPerson} />
      </div>
    </div>
  );
};

export default PeoplePage;
