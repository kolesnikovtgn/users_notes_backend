export class CreateNoteDto {
  readonly title: string;
  readonly content: string;
  readonly userId: string;
  readonly likeCount: number;
  readonly tags: string[];
  readonly dateCreate: string;
}
