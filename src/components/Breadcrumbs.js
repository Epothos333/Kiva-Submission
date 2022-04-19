import React from 'react';
import { useViewPort } from '../hooks/useViewPort';

export function Breadcrumbs() {
  const { isMobile } = useViewPort();
  return (
    <div>
      <p className='Bread-Crumbs'>All Loans {'>'} Agriculture</p>
      <h1 className='Page-Title'>Agriculture</h1>
      {!isMobile &&
        <p className='Page-Description'>Farmers face many challenges like unpredictable weather and market prices, and are often forced to choose between investing in their crops and fulfilling basic needs for their families. Your support keeps their crops growing and their livelihoods stable.</p>
      }
    </div>
  )
}