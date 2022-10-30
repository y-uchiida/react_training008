import React from 'react'
import { IconButton, styled, Typography } from '@mui/material'
import { Box } from '@mui/system';

interface props {
	icon: React.ReactNode,
	text?: string | number | null
	hoverColor?: string | null
}

const WrapBox = styled(Box)({
	fontSize: 'small',
	'& > .MuiBox-root': {
		display: 'flex',
		position: 'relative',
		flexDirection: 'row',
		width: 'fit-content',
		height: 'fit-content',
		alignItems: 'center',
	}
});

const wrapBoxStyle = {
	width: '100%',
}

const IconButtonStyle = {
	position: 'static',
	':hover': {
		color: 'inherit',
	},
	':before': {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		content: '" "',
		display: 'block',
		backgroundColor: 'green',
		opacity: 0,
		':hover': {
			backgroundColor: 'inherit'
		}
	}
}

const IconTextButton = ({ icon, text, hoverColor }: props) => {
	return (
		<WrapBox sx={wrapBoxStyle}>
			<Box sx={{
				columnGap: 1,
				':hover': { color: (hoverColor) ? hoverColor : null }
			}}>
				<IconButton size='small' sx={IconButtonStyle} disableTouchRipple>
					<Box fontSize='small'>
						{icon}
					</Box>
				</IconButton>
				<Typography fontSize='small'>{text}</Typography>
			</Box>
		</WrapBox >
	)
}

export default IconTextButton
