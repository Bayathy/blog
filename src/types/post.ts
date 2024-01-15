import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypePostsFields {
  title: EntryFieldTypes.Symbol
  ogp?: EntryFieldTypes.AssetLink
  createdAt: EntryFieldTypes.Date
  content: EntryFieldTypes.RichText
}

export type TypePostsSkeleton = EntrySkeletonType<TypePostsFields, 'posts'>
export type TypePosts<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePostsSkeleton, Modifiers, Locales>
