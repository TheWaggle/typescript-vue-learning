import { ParticipationKind } from '@/types/ParticipationKind'

export const messages = {
  entry: '申し込む',
  back: '入力画面に戻る',
  formTitle: 'イベント参加申し込みフォーム',
  confirmTitle: '登録内容の確認',
  firstName: '名',
  lastName: '姓',
  gender: '性別',
  email: 'メールアドレス',
  question: '当日取り上げて欲しい質問',
  impressions: '本イベントは何で知りましたか？',
  participation: '参加形式',
  participationKind: {
    [ParticipationKind.OnSite]: '会場参加',
    [ParticipationKind.Zoom]: 'Zoom参加',
    [ParticipationKind.ZoomWithMute]: 'Zoomミュート参加',
    [ParticipationKind.ArchiveOnly]: 'アーカイブのみ'
  } as Record<ParticipationKind, string>
}
