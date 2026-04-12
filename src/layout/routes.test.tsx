import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';

/** Glitch duplicates headings; 404 is fullscreen (no #main). */
function expectNotFoundContent() {
  expect(screen.getAllByText(/Page inexistante/i).length).toBeGreaterThan(0);
}

describe('app routes', () => {
  it('renders the /404 not-found screen', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/404'] });
    render(<RouterProvider router={router} />);

    expect(await screen.findByRole('heading', { name: /Oups/i })).toBeInTheDocument();
    expectNotFoundContent();
  });

  it('renders not-found for unknown paths', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/no-such-route-here'] });
    render(<RouterProvider router={router} />);

    await screen.findByRole('heading', { name: /Oups/i });
    expectNotFoundContent();
  });

  it('shows 404 content for an unknown blog slug', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/blog/does-not-exist-slug-xyz'],
    });
    render(<RouterProvider router={router} />);

    await screen.findByRole('heading', { name: /Oups/i });
    expectNotFoundContent();
  });

  it('renders not-found under /webdev for unknown child paths', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/webdev/no-such-project'] });
    render(<RouterProvider router={router} />);

    await screen.findByRole('heading', { name: /Oups/i });
    expectNotFoundContent();
  });

  it('renders the introduction page', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/introduction'] });
    render(<RouterProvider router={router} />);

    expect(await screen.findByRole('heading', { name: /Introduction/i })).toBeInTheDocument();
  });
});
