import '@testing-library/jest-dom'

// Mock per next/router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: {},
      asPath: '',
      push: jest.fn(),
      replace: jest.fn(),
    }
  },
}))

// Mock per next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />
  },
}))

// Mock per next/navigation
jest.mock('next/navigation', () => ({
  usePathname() {
    return ''
  },
  useSearchParams() {
    return new URLSearchParams()
  },
})) 