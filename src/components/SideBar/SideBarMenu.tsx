import { SvgIconTypeMap, Typography } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import React, { FC } from 'react'

interface props {
	text: string,
	icon: JSX.Element
}

export const SideBarMenu = ({ text, icon }: props) => {
	return (
		<>
			{icon}
			<Typography variant='h6' component='h2'>{text}</Typography>
		</>
	)
}
