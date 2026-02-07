import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light text-center px-3">
      <h1 className="display-1 fw-bold text-primary-blue mb-0">404</h1>
      <h2 className="fw-bold mb-3" style={{ color: '#002a62' }}>Page Not Found</h2>
      <p className="text-muted mb-4" style={{ maxWidth: '400px' }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/" className="btn-primary-custom px-5 py-3 text-decoration-none">
        Return Home
      </Link>
    </div>
  );
}