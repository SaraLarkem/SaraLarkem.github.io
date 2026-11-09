type SectionBackdropProps = {
  image: string
  position?: string
}

export function SectionBackdrop({ image, position = 'center' }: SectionBackdropProps) {
  return (
    <>
      <div className="atmosphere-backdrop" aria-hidden="true">
        <img src={image} alt="" style={{ objectPosition: position }} />
      </div>
      <div className="atmosphere-scrim" aria-hidden="true" />
    </>
  )
}
