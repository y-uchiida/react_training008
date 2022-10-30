import React, { FC } from 'react'
import { Box, Button, ButtonProps, Typography } from '@mui/material'
import { palette } from '../../conf/theme';
import styled from '@emotion/styled';

interface props {
	text: string,
	icon: JSX.Element
}

const WrapBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	'& Button': {
		color: 'black',
		backgroundColor: 'white',
		':hover': {
			backgroundColor: palette.primary.light
		},
		'Typography': {
			fontWeight: 600,
			color: 'black',
		}
	}
}));

export const SideBarMenu = ({ text, icon }: props) => {
	return (
		<WrapBox sx={{ display: 'flex', alignItems: 'center' }}>
			<Button variant='contained' startIcon={icon} size='large' disableElevation>
				<Typography variant='h6' component='h2'>{text}</Typography>
			</Button>
		</WrapBox>
	)
}
