export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        background: "color-mix(in srgb, var(--color-bg) 95%, transparent)",
        backdropFilter: "blur(12px)",
        padding: "16px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--color-text-dim)",
          }}
        >
          &copy; {new Date().getFullYear()}{" "}
          <span style={{ color: "var(--color-text-muted)" }}>Nandini Gulhane</span>
          {" "}— all bugs are features
        </p>

        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            color: "var(--color-text-dim)",
          }}
        >
          designed &amp; coded with{" "}
          <span style={{ color: "var(--color-accent)" }}>&#9829;</span>
        </p>
      </div>
    </footer>
  );
}
