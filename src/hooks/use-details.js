import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { detailsAPI } from '../services/last-airbender-api';

const useDetails = () => {
  const [details, setDetails] = useState({name: 'Aang'});
  const params = useParams(); 
  const fetchDetails = () => {
    detailsAPI(params.charId)
      .then((res) => {
        setDetails(res);
      });  
  };

  useEffect(() => {
    fetchDetails();    
  }, []);

  return details;
};

export default useDetails;
