import { Helmet } from 'react-helmet-async';
import { usePortfolioView } from '../hooks/usePortfolioView';

const MetaManager = () => {
  const { name, title, professionalSummary } = usePortfolioView();

  const pageTitle = `${name} | ${title}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={professionalSummary.join(' ')} />
    </Helmet>
  );
};

export default MetaManager;
