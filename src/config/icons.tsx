import React from 'react'
import Icon from '@ant-design/icons'
import { ReactComponent as Light } from '../assets/icons/lighticon.svg'
import { ReactComponent as Dark } from '../assets/icons/darkicon.svg'

export const LightIcon = (props: any) => <Icon component={Light} {...props} />
export const DarkIcon = (props: any) => <Icon component={Dark} {...props} />