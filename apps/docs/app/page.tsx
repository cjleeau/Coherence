export default function HomePage() {
  return (
    <main>
      <div className="section">
        <h1>Coherence</h1>
        <p>Token-driven, accessibility-first design system.</p>

        <div
          className="panel"
          style={{
            background: 'var(--theme-color-surface-primary)',
            color: 'var(--theme-color-text-primary)',
            border: '1px solid var(--theme-color-border-default)'
          }}
        >
          Theme tokens are now driving UI usage.
        </div>
      </div>
    </main>
  )
}