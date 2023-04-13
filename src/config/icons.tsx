import React from 'react'
import Icon from '@ant-design/icons'
import { ReactComponent as Light } from '../assets/icons/lighticon.svg'
import { ReactComponent as Dark } from '../assets/icons/darkicon.svg'
import { ReactComponent as GymApple } from '../assets/icons/gym_apple.svg'
import { ReactComponent as GymDumbell } from '../assets/icons/gym_dumbell.svg'
import { ReactComponent as GymGloves } from '../assets/icons/gym_gloves.svg'
import { ReactComponent as GymAppleLight } from '../assets/icons/gym_apple_light.svg'
import { ReactComponent as GymDumbellLight } from '../assets/icons/gym_dumbell_light.svg'
import { ReactComponent as GymGlovesLight } from '../assets/icons/gym_gloves_light.svg'

export const LightIcon = (props: any) => <Icon component={Light} {...props} />
export const DarkIcon = (props: any) => <Icon component={Dark} {...props} />
export const GymAppleIcon = (props: any) => <Icon component={GymApple} {...props} />
export const GymDumbellIcon = (props: any) => <Icon component={GymDumbell} {...props} />
export const GymGlovesIcon = (props: any) => <Icon component={GymGloves} {...props} />
export const GymAppleLightIcon = (props: any) => <Icon component={GymAppleLight} {...props} />
export const GymDumbellLightIcon = (props: any) => <Icon component={GymDumbellLight} {...props} />
export const GymGlovesLightIcon = (props: any) => <Icon component={GymGlovesLight} {...props} />