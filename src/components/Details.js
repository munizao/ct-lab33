import React from 'react';
import useDetails from '../hooks/use-details';
import Header from './Header';
import '../style/common.css';
import './Details.css';



const Details = () => {
  const details = useDetails();
  return (
    <>
      <Header subhead={'Character Details'}/>
      <main>
        <div>
          <img src={details.photoUrl} />
          <dl>
            <dt>Name:</dt>
            <dd>{details.name}</dd>
            <dt>Position:</dt>
            <dd>{details.position}</dd>
            <dt>First Episode:</dt>
            <dd>{details.first}</dd>
          </dl>
        </div>
      </main>
    </>
  );
};

export default Details;
