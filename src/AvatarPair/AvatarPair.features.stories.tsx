import React from 'react'
import {ComponentMeta} from '@storybook/react'
import AvatarPair from './AvatarPair'
import Avatar from '../Avatar'

export default {
  title: 'Components/AvatarPair/Features',
  component: AvatarPair,
} as ComponentMeta<typeof AvatarPair>

export const ParentCircle = () => (
  <AvatarPair>
    <Avatar src="https://avatars.githubusercontent.com/u/92997159?v=4" />
    <Avatar square src="https://avatars.githubusercontent.com/primer" />
  
  </AvatarPair>
)

export const ParentSquare = () => (
  <AvatarPair>
    <Avatar square src="https://avatars.githubusercontent.com/primer" />
    <Avatar src="https://avatars.githubusercontent.com/u/92997159?v=4" />
  </AvatarPair>
)
