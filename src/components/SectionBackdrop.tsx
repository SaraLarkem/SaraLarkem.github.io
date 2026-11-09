export type BackdropScene = 'castle' | 'moon' | 'gold'

type SectionBackdropProps = {
  scene: BackdropScene
}

/**
 * Decorative atmosphere drawn entirely in CSS (layered gradients + SVG grain),
 * so the site ships no third-party artwork. See `.atmosphere-backdrop--*` in index.css.
 */
export function SectionBackdrop({ scene }: SectionBackdropProps) {
  return (
    <>
      <div className={`atmosphere-backdrop atmosphere-backdrop--${scene}`} aria-hidden="true" />
      <div className="atmosphere-scrim" aria-hidden="true" />
    </>
  )
}
