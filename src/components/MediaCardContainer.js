import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useViewPort } from '../hooks/useViewPort';
import { fetchLoans } from '../store/slices/loansSlice';
import { MediaCard } from "./MediaCard";

export function MediaCardContainer() {
  const dispatch = useDispatch();
  const loans = useSelector(state => state.loans.loans)
  const {isMobile}  = useViewPort();
  
  useEffect(() => {
    dispatch(fetchLoans())
  }, [])

  
  return (
    <div className={`Flex-Row Media-Card-Container ${isMobile ? 'J-C' : 'J-S-B' }`}>
      {loans.length > 0 && loans.map((loan) => {
        return <MediaCard key={loan.id} loan={loan}/>
      }
      )}
    </div>
  )
}