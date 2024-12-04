import { render, screen } from '@testing-library/react';
import Home from '../../src/app/page';

describe('Home Component', () => {
  it('should render the main elements correctly', () => {
    render(<Home />);

    // Check if the Next.js logo is displayed
    const nextLogo = screen.getByAltText('Next.js logo');
    expect(nextLogo).toBeInTheDocument();

    // Check if the "Get started by editing src/app/page.tsx" text is present
    const getStartedText = screen.getByText((content: any, element) => {
      return (
        content.includes('Get started by editing') &&
        element?.textContent?.includes('src/app/page.tsx')
      );
    });
    expect(getStartedText).toBeInTheDocument();

    // Check if the "Deploy now" button is present
    const deployNowButton = screen.getByText('Deploy now');
    expect(deployNowButton).toBeInTheDocument();

    // Check if the footer links are present
    const learnLink = screen.getByText('Learn');
    expect(learnLink).toBeInTheDocument();

    const examplesLink = screen.getByText('Examples');
    expect(examplesLink).toBeInTheDocument();

    const goToNextLink = screen.getByText('Go to nextjs.org →');
    expect(goToNextLink).toBeInTheDocument();
  });
});
