import React from 'react';
import useDetails from '../hooks/use-details';

const Details = () => {
  const details = useDetails();
  return (
    <dl>
      <dt>Name</dt>
      <dd>{details.name}</dd>
    </dl>
  );
};

export default Details;
