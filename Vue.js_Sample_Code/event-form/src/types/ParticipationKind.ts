export enum ParticipationKind {
  Empty,
  OnSite,
  Zoom,
  ZoomWithMute,
  ArchiveOnly
}

export const participationKinds = Object.values(ParticipationKind).filter(
  (value): value is ParticipationKind =>
    typeof value !== 'string' && value !== ParticipationKind.Empty
)
