import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { App } from './App';

const CONTACT_EMAIL = 'help@adoptdontshop.app';

describe('Landing page', () => {
  it('leads with the brand and the core promise', () => {
    render(<App />);

    expect(screen.getAllByText(/adopt don.t shop/i).length).toBeGreaterThan(0);

    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toHaveTextContent(/rescue pet/i);
  });

  it('routes every call to action to the contact mailbox', () => {
    render(<App />);

    const mailtoLinks = screen
      .getAllByRole('link')
      .filter(link => link.getAttribute('href')?.startsWith('mailto:'));

    expect(mailtoLinks.length).toBeGreaterThan(0);
    mailtoLinks.forEach(link => {
      expect(link.getAttribute('href')).toContain(`mailto:${CONTACT_EMAIL}`);
    });
  });

  it('offers a dedicated route for rescue organisations', () => {
    render(<App />);

    const rescueLinks = screen.getAllByRole('link', { name: /rescue|launch partner/i });

    expect(rescueLinks.length).toBeGreaterThan(0);
    rescueLinks.forEach(link => {
      expect(link.getAttribute('href')).toContain(`mailto:${CONTACT_EMAIL}`);
    });
  });

  it('surfaces the contact address for direct enquiries', () => {
    render(<App />);

    expect(screen.getByText(CONTACT_EMAIL)).toBeInTheDocument();
  });

  it('is navigable: a main landmark and a working skip link', () => {
    render(<App />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /skip to content/i })).toHaveAttribute('href', '#main');
  });
});
