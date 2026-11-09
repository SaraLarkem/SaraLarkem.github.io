/**
 * Decorative ember particles that drift upward over a backdrop.
 * Positions are fixed (not random) so renders are deterministic.
 */
const embers = [
  { left: 6, delay: 0, duration: 11, size: 3 },
  { left: 14, delay: 4.5, duration: 9, size: 2 },
  { left: 22, delay: 2, duration: 13, size: 4 },
  { left: 31, delay: 7, duration: 10, size: 2 },
  { left: 39, delay: 1, duration: 12, size: 3 },
  { left: 47, delay: 5.5, duration: 9.5, size: 2 },
  { left: 55, delay: 3, duration: 14, size: 3 },
  { left: 63, delay: 8, duration: 10.5, size: 2 },
  { left: 70, delay: 0.5, duration: 12.5, size: 4 },
  { left: 77, delay: 6, duration: 9, size: 2 },
  { left: 84, delay: 2.5, duration: 11.5, size: 3 },
  { left: 90, delay: 9, duration: 13, size: 2 },
  { left: 95, delay: 4, duration: 10, size: 3 },
  { left: 3, delay: 7.5, duration: 12, size: 2 },
]

export function Embers() {
  return (
    <div className="embers" aria-hidden="true">
      {embers.map((ember) => (
        <span
          key={ember.left}
          className="embers__particle"
          style={{
            left: `${ember.left}%`,
            width: ember.size,
            height: ember.size,
            animationDelay: `${ember.delay}s`,
            animationDuration: `${ember.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
