import { render, screen, within } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';

/** Glitch duplicates headings for the effect; assert inside #main only. */
function expectNotFoundInMain() {
  const main = document.getElementById('main');
  expect(main).toBeTruthy();
  const { getAllByText } = within(main!);
  expect(getAllByText(/Page inexistante/i).length).toBeGreaterThan(0);
}

describe('app routes', () => {
  it('renders the /404 not-found screen', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/404'] });
    render(<RouterProvider router={router} />);

    expect(await screen.findByRole('heading', { name: /Oups/i })).toBeInTheDocument();
    expectNotFoundInMain();
  });

  it('renders not-found for unknown paths', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/no-such-route-here'] });
    render(<RouterProvider router={router} />);

    await screen.findByRole('heading', { name: /Oups/i });
    expectNotFoundInMain();
  });

  it('shows 404 content for an unknown blog slug', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/blog/does-not-exist-slug-xyz'],
    });
    render(<RouterProvider router={router} />);

    await screen.findByRole('heading', { name: /Oups/i });
    expectNotFoundInMain();
  });

  it('renders not-found under /webdev for unknown child paths', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/webdev/no-such-project'] });
    render(<RouterProvider router={router} />);

    await screen.findByRole('heading', { name: /Oups/i });
    expectNotFoundInMain();
  });

  it('renders the introduction page', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/introduction'] });
    render(<RouterProvider router={router} />);

    expect(await screen.findByRole('heading', { name: /Introduction/i })).toBeInTheDocument();
  });
});
