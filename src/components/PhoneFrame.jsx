export default function PhoneFrame({ className = '', children }) {
  return (
    <div className={className}>
      <div className="device-body" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6].map((layer) => (
          <div
            key={layer}
            className="device-layer"
            style={{ '--layer': layer }}
          />
        ))}
      </div>

      <div className="device-rear" aria-hidden="true">
        <div className="device-camera">
          <span className="device-lens device-lens-top" />
          <span className="device-lens device-lens-middle" />
          <span className="device-lens device-lens-bottom" />
          <span className="device-flash" />
          <span className="device-sensor" />
        </div>

        <svg className="device-rear-logo" viewBox="0 0 32 36" fill="currentColor">
          <path d="M21 1c.4 3.6-2.4 7-5.9 7.3C14.8 5.1 17.6 1.7 21 1Z" />
          <path d="M16 10.8c2.3 0 4-1.7 7-1.7 2.2 0 4.3 1.1 5.7 2.9-5 2.8-4.3 9.5.4 11.4-1.3 3.7-4.3 9.4-7.6 9.4-2 0-2.8-1.3-5.3-1.3s-3.6 1.3-5.5 1.3c-3.6 0-8.5-8.5-8.5-14.6 0-5.6 3.8-9.1 7.8-9.1 2.5 0 4 1.7 6 1.7Z" />
        </svg>
      </div>

      <div className="device-face">
        <div className="device-buttons" aria-hidden="true" />

        <div className="device-display">
          <div className="device-status" aria-hidden="true">
            <span>9:41</span>
            <span className="device-island" />

            <svg viewBox="0 0 48 14" fill="currentColor">
              <path d="M1 10h3v3H1zm5-3h3v6H6zm5-3h3v9h-3zm5-3h3v12h-3z" />
              <path d="M22 5a9 9 0 0 1 12 0l-1.5 1.8a6.5 6.5 0 0 0-9 0zm3 3a4.5 4.5 0 0 1 6 0l-1.5 1.8a2 2 0 0 0-3 0zm2 3 1-1 1 1-1 1z" />
              <rect
                x="36" y="3" width="10" height="8" rx="2"
                fill="none" stroke="currentColor"
              />
              <rect x="38" y="5" width="6" height="4" rx=".5" />
              <path d="M47 5h1v4h-1z" />
            </svg>
          </div>

          {children}

          <div className="device-home" aria-hidden="true">
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}