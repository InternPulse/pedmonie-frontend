<<<<<<< HEAD
<<<<<<< HEAD
'use client'

import { Avatar as ChakraAvatar, Group } from '@chakra-ui/react'
=======
=======
>>>>>>> super-admin-dashboard
import {
  Avatar as ChakraAvatar,
  AvatarGroup as ChakraAvatarGroup,
} from '@chakra-ui/react'
<<<<<<< HEAD
>>>>>>> origin/(frontend)---Transaction-confirmation-UI-
=======
>>>>>>> super-admin-dashboard
import * as React from 'react'

export const Avatar = React.forwardRef(function Avatar(props, ref) {
  const { name, src, srcSet, loading, icon, fallback, children, ...rest } =
    props
  return (
    <ChakraAvatar.Root ref={ref} {...rest}>
<<<<<<< HEAD
<<<<<<< HEAD
      <AvatarFallback name={name} icon={icon}>
        {fallback}
      </AvatarFallback>
=======
      <ChakraAvatar.Fallback name={name}>
        {icon || fallback}
      </ChakraAvatar.Fallback>
>>>>>>> origin/(frontend)---Transaction-confirmation-UI-
=======
      <ChakraAvatar.Fallback name={name}>
        {icon || fallback}
      </ChakraAvatar.Fallback>
>>>>>>> super-admin-dashboard
      <ChakraAvatar.Image src={src} srcSet={srcSet} loading={loading} />
      {children}
    </ChakraAvatar.Root>
  )
})

<<<<<<< HEAD
<<<<<<< HEAD
const AvatarFallback = React.forwardRef(function AvatarFallback(props, ref) {
  const { name, icon, children, ...rest } = props
  return (
    <ChakraAvatar.Fallback ref={ref} {...rest}>
      {children}
      {name != null && children == null && <>{getInitials(name)}</>}
      {name == null && children == null && (
        <ChakraAvatar.Icon asChild={!!icon}>{icon}</ChakraAvatar.Icon>
      )}
    </ChakraAvatar.Fallback>
  )
})

function getInitials(name) {
  const names = name.trim().split(' ')
  const firstName = names[0] != null ? names[0] : ''
  const lastName = names.length > 1 ? names[names.length - 1] : ''
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0)
}

export const AvatarGroup = React.forwardRef(function AvatarGroup(props, ref) {
  const { size, variant, borderless, ...rest } = props
  return (
    <ChakraAvatar.PropsProvider value={{ size, variant, borderless }}>
      <Group gap='0' spaceX='-3' ref={ref} {...rest} />
    </ChakraAvatar.PropsProvider>
  )
})
=======
export const AvatarGroup = ChakraAvatarGroup
>>>>>>> origin/(frontend)---Transaction-confirmation-UI-
=======
export const AvatarGroup = ChakraAvatarGroup
>>>>>>> super-admin-dashboard
