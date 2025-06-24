import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { portfolioViews } from '../data/resumeData';
import { ResumeData } from '../types/types';

export const usePortfolioView = (): ResumeData => {
  const [searchParams] = useSearchParams();
  const view = searchParams.get('view');

  const portfolioData = useMemo(() => {
    switch (view) {
      case 'swe':
        return portfolioViews.swe;
      case 'csr':
        return portfolioViews.csr;
      default:
        return portfolioViews.default;
    }
  }, [view]);

  return portfolioData;
};
