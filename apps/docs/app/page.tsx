export default function HomePage() {
  return (
    <main>
      <div className="section">
        <h1>Coherence</h1>
        <p>Token-driven, accessibility-first design system.</p>

        <div
          className="panel"
          style={{
            background: 'var(--color-neutral-0)',
            color: 'var(--color-neutral-1000)',
            border: '1px solid var(--color-blue-500)'
          }}
        >
          Tokens are wired into the docs app.
        </div>
      </div>
    </main>
  )
}